import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li>
                                <p><Link href='/'>Inicio</Link></p>
                            </li>
                            <li>
                                <p><Link href='/'>Nosotros</Link></p>
                            </li>
                            <li>
                                <p><Link href='/'>Servicios</Link></p>
                            </li>
                            <li>
                                <p><Link href='/'>Destacado</Link></p>
                            </li>
                            <li>
                                <p><Link href='/'>3D</Link></p>
                            </li>
                            <li>
                                <p><Link href='/'>Contacto</Link></p>
                            </li>
                            <li>
                                <p><Link href='/'>Aviso de privacidad</Link></p>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>
                                <p><Link href='/'>Facebook</Link></p>
                            </li>
                            <li>
                                <p><Link href='/'>Instagram</Link></p>
                            </li>
                            <li>
                                <p><Link href='/'>Youtube</Link></p>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>envíanos tu mensaje</h3>
                        <Form className='forma'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" className='forma mb-2' placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="Empresa">
                                <Form.Control type="password" className='forma' placeholder="Empresa" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Control type="password" className='forma' placeholder="Telefono" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formCorreo">
                                <Form.Control type="email" className='forma' placeholder="Correo electrónico" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='mb-3'>
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <p className='legal'>centro de soluciones gráficas</p>
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
                .footer {
                    background: black;
                    margin: 0;
                    padding: 50px 10px;
                    padding-bottom: 0;
                    background: url(bkg_footer.jpg) no-repeat center center fixed; 
                    -webkit-background-size: contain;
                    -moz-background-size: contain;
                    -o-background-size: contain;
                    background-size: contain;
                }
                .footer ul {
                    padding: 0;
                    list-style: none;
                }
                .footer p, .footer h3 {
                    color: #fff;
                }
                p.legal {
                    border-top: 1px solid #fff;
                    padding: 15px 0;
                }
                a {
                    color: #ffffff !important;
                    text-decoration: none !important;
                }
                form.forma .forma {
                    border-radius: 0 !important;
                    background: rgba(255,255,255,0.7);
                    margin-right: 20px;
                }
            `}</style>
        </footer>
    )
}