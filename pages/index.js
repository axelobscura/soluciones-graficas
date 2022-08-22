import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
  return (
    <Layout>
      <Logo />
      <Hero />
      <Container className='pt-5 pb-2'>
        <Row>
          <Col>
            <h3 className='rojo'>Nuestros servicios más solicitados.</h3>
            <p>Contamos con el personal más capacitado<br/>y equipo de vanguardia para ofrecerle la mejor calidad</p>
          </Col>
        </Row>
      </Container>
      <Container className='pt-2 pb-5'>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src="card1.jpg" />
              <Card.Body>
                <Card.Text>
                  Impresión en cama plana
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="card2.jpg" />
              <Card.Body>
                <Card.Text>
                  Corte cnc y láser
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="card3.jpg" />
              <Card.Body>
                <Card.Text>
                  Impresión en gran formato
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
