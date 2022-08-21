import Carousel from 'react-bootstrap/Carousel';

export default function Hero() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="bkg_footer.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>centro de<br/>soluciones<br/>gráficas</h3>
                    <p>impresión en gran formato</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}