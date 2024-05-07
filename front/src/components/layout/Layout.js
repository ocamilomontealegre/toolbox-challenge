import React from 'react';
import { Container, Navbar} from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">React Test App</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-4">
        {children}
      </Container>

      <footer className="mt-4 text-center">
        <p>&copy; Made with love by @ocamilomontealegre</p>
      </footer>
    </div>
  );
};

export default Layout;