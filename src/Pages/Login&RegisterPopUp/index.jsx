// Importing Models
import { Modal } from 'react-bootstrap';

// Importing style
import './style.css';

// Importing packges
import { useState } from 'react';

// Importing pages
import Login from '../LoginPage';
import CreateAccount from '../RegisterPage';

const PopUpModal = ({ showModal, handleClose }) => {
  const [signin, setSignin] = useState(true);

  const handleSignin = () => setSignin(false);
  const handleSignup = () => setSignin(true);

  return (
    <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal">
      <Modal.Header style={{ backgroundColor: '#EFFFF4' }}>
        <Modal.Title style={{ fontSize: '13px', color: '#008A45' }}>
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>{signin ? <CreateAccount handleSignin={handleSignin} /> : <Login handleSignup={handleSignup} />}</div>
      </Modal.Body>
    </Modal>
  );
};

export default PopUpModal;
