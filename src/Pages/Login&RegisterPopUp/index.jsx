import { Modal } from 'react-bootstrap';
import './style.css';
import { useState } from 'react';
import CreateAccount from '../RegisterPage';
import Login from '../LoginPage';

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
