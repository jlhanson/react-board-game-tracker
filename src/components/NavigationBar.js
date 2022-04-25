import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import SignInForm from './SignInForm'

const NavigationBar = ({ username, loggedIn }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Board Game Tracker</Navbar.Brand>
					<Nav>
						<Nav.Link href="/bg">All Games</Nav.Link>
					</Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {loggedIn === true ? (
                <>
                  <Nav.Link href="#collection">Collection</Nav.Link>
                  <Nav.Link href="#wishlist">Wishlist</Nav.Link>
                  <Nav.Link href="#friends">Friends</Nav.Link>
                  <NavDropdown
                    title={username}
                    id="collasible-nav-dropdown"
                    align="end"
                  >
                    <NavDropdown.Item href="#account">Account</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#signout">
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <NavDropdown
                    title="Sign In"
                    id="collasible-nav-dropdown"
                    align="end"
                  >
                    <SignInForm />
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar
