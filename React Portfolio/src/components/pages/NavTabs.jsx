import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavTabs({ currentPage, handlePageChange }) {
  return (<>
  
   <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link  href="#home"
          onClick={() => handlePageChange('Home')}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="#about"
          onClick={() => handlePageChange('About')}>About me</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="#resume"
          onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="#contact"
          onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
      </Nav.Item>
       <Nav.Item as="li">
        <Nav.Link href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
      </Nav.Item>
    </Nav>
    
    </>
  );
}

export default NavTabs;
