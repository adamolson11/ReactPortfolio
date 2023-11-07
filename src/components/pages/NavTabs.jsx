
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar style={{ backgroundColor: '#156064' }} expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#home" style={{ color: '#AFFC41' }}>
            Brand link
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey="/home" as="ul">
              <Nav.Item as="li">
                <Nav.Link
                  href="#home"
                  onClick={() => handlePageChange('Home')}
                  style={{ color: '#AFFC41' }}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  href="#about"
                  onClick={() => handlePageChange('About')}
                  style={{ color: '#AFFC41' }}
                >
                  About me
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  href="#resume"
                  onClick={() => handlePageChange('Resume')}
                  style={{ color: '#AFFC41' }}
                >
                  Resume
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}
                  style={{ color: '#AFFC41' }}
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  href="#portfolio"
                  onClick={() => handlePageChange('Portfolio')}
                  style={{ color: '#AFFC41' }}
                >
                  Portfolio
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ backgroundColor: '#EE964B' }}>
        {}
      </div>
      <Navbar style={{ backgroundColor: '#156064' }} variant="dark" fixed="bottom">
        <Container>
          <Nav className="w-100 justify-content-center">
            <Nav.Item>
              <Nav.Link
                href="https://github.com/adamolson11/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#AFFC41' }}
              >
                GitHub
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/adam-olson-aab562201/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#AFFC41' }}
              >
                LinkedIn
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTabs;
