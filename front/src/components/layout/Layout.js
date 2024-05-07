import React from "react";
import { Container, Navbar } from "react-bootstrap";
import styles from "../../styles/layout/layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className={styles.navbar}>
        <Container>
          <Navbar.Brand href="/">React Test App</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className={styles.contentContainer}>
        {children}
      </Container>
    </>
  );
};

export default Layout;