import { ReactPropTypes, useState, useEffect, useContext, useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import useAxios from '../hooks/useAxios'
import axios from '../utils/axios'
import AuthContext from '../context/AuthProvider'

const SignInForm = ({ setToken }) => {
  const { setAuth } = useContext(AuthContext)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [errMsg, setErrMsg] = useState()
  const [success, setSuccess] = useState()

  const LOGIN_URL = '/user/login'
  const errRef = useRef()

  useEffect(() => {
    setErrMsg('')
  }, [username, password])

  const handleSubmit = async (e) => {
    e.preventDefault()

    axios
      .post(LOGIN_URL, { username, password })
      .then((res) => {
        const accessToken = res?.data?.accessToken
        const userCollection = res?.data?.userCollection
        const wishlist = res?.data?.wishlist
        setAuth({ username, password, userCollection, wishlist, accessToken })
        setUsername('')
        setPassword('')
        setSuccess(true)
        console.log(res.data)
      })
      .catch((err) => {
        setErrMsg(err.response.data.message)
        errRef.current.focus()
      })
  }

  return (
    <section>
      <Form onSubmit={handleSubmit} className="align-items-left mx-2">
        <Form.Group controlId="formGroupUsername" className="mb-2">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => setUsername(e.target.value)}
            type="username"
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p
          className={errMsg ? 'text-danger' : 'offscreen'}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <Form.Group>
          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </Form.Group>
      </Form>
    </section>
  )
}
// SignInForm.ReactPropTypes = {
// 	setToken: ReactPropTypes.func.isRequired
// }

export default SignInForm
