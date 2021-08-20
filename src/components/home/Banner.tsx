import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import banner1 from 'assets/images/banner1.png';
import banner2 from 'assets/images/banner2.png';
const Banner = () => {
    return (
        <div>
            <Container>
                <Carousel className="mt-4 ">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
};

export default Banner;