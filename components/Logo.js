import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Logo() {
    return (
        <Navbar expand="lg" variant="light" fixed="top" sticky="top">
            <Container>
                <Navbar.Brand href="#">
                    <img src="logo-blanco.svg" alt="" title="" style={{
                        width: '100px'
                    }} />
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}