// Importing packges
import { useState } from 'react';

// Importing Assets
import Brand from '../../assets/svg/Brand.svg';

// Importing bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// Importing Pages
import PopUpModal from '../../Pages/Login&RegisterPopUp';

// Importing Bootstrap Components
import { Form } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import FormControl from 'react-bootstrap/esm/FormControl';

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary px-5">
      <Container fluid>
        <Navbar.Collapse className="justify-content-start ">
          <Navbar.Brand href="#">
            <img src={Brand} alt="error" />
          </Navbar.Brand>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Form className="d-flex" style={{ width: '350px' }}>
            <InputGroup style={{ width: '320px' }}>
              <FormControl
                className="rounded-5"
                type="search"
                placeholder=" Search for your favorite groups in ATG"
                aria-label="Search"
              />
            </InputGroup>
          </Form>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Create account.{' '}
            <a href="#login" style={{ color: 'blue' }} onClick={handleShow}>
              It’s free!
            </a>
          </Navbar.Text>
          <PopUpModal showModal={showModal} handleClose={handleClose} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
