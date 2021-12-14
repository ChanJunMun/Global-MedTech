import { useRef, useState } from 'react';
import { Form, Button, Modal, ModalBody } from 'react-bootstrap'

import { useRouter } from 'next/router';

function NewRegisterForm(props) {
  const router = useRouter();
  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false), router.push('/');};
  const handleShow = () => setShow(true);

  function SubmitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const newUserData = {
      name: enteredName,
      email: enteredEmail,
    };

    props.onAddUser(newUserData);

  }

  return (
    <>
    <Form className='mt-5' onSubmit={SubmitHandler}>
      <Form.Group className="mb-3" >
        <Form.Label htmlFor='name'>Name</Form.Label>
        <Form.Control type="text" required id='name' ref={nameInputRef} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label htmlFor='email'>Email address</Form.Label>
        <Form.Control type="email" required id='email' ref={emailInputRef} />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <button variant="primary" onClick={handleShow}>
        Register
      </button>
    </Form>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Global MedTech</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        Thank you for registering with us!
      </Modal.Body>

      <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Back to home page
          </Button>
        </Modal.Footer>
    </Modal>
      </>
  );
}

export default NewRegisterForm;