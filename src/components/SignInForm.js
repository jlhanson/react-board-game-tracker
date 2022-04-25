import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignInForm = () => {
  return (
    <div>
      <Form className="align-items-left mx-2">
        <Form.Group controlId="formBasicEmail" className="mb-2">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default SignInForm
