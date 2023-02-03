import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/img/logo.png';

const headernav = () => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="250"
              height="200"
              className="align-item-center justify-content-center"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default headernav;