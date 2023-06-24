import { Button, Form } from "react-bootstrap";

export function Signup() {
  return (
    <>
    <Form onSubmit={e => {
        e.preventDefault();
        alert('Enviando!')
    }}>
        <label>
            <h1>Form Login</h1>
        </label>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                {" "}
                Wil never share wour Email {" "}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" Label="Check me" />
        </Form.Group>

        <Button variant="primary" type="submit">
        {" "}
        Submit{" "}
        </Button>
    </Form>
    </>
  )
}
