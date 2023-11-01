import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function About() {
  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">About Me</Card.Title>
          <Card.Text>
            I am Adam Olson, a passionate web developer with a unique background. I hold a double major in Psychology and Mass Communications from the University of Wisconsin Eau Claire. Recently, I completed the edX Full Stack Web Development program, solidifying my skills in creating dynamic and user-friendly web applications. My career journey has led me to spend 5 years in product support at a fintech company, where I have had the opportunity to hone my front-end and back-end development skills.

            With expertise in HTML, CSS, JavaScript, MERN stack (MongoDB, Express.js, React, Node.js), REST APIs, databases (MySQL), jQuery, GraphQL, and more, I'm well-equipped to take on web development projects from start to finish.
          </Card.Text>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Education:</strong> University of Wisconsin Eau Claire, Double Major in Psychology and Mass Communications
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Web Development Skills:</strong>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
              <li>REST APIs</li>
              <li>Databases (MySQL)</li>
              <li>jQuery</li>
              <li>GraphQL</li>
              <li>And more...</li>
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Professional Experience:</strong> 5 years in product support at a fintech company
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
}

export default About;