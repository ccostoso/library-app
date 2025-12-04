import { CarouselControlButton } from './CarouselControlButton';
import { ReturnBookSlide } from './ReturnBookSlide';

type DesktopCarouselProps = {
    bookChunks: string[][];
};

export const DesktopCarousel = ({ bookChunks }: DesktopCarouselProps) => {
    return (
        <section id="desktop-carousel">
            <div
                id="carousel-example-controls"
                className="carousel carousel-dark slide mt-5 d-none d-lg-block"
                data-bs-interval="false"
            >
                <div className="carousel-inner">
                    {bookChunks.map((chunk, index) => (
                        <ReturnBookSlide
                            key={index}
                            images={chunk}
                            active={index === 0}
                        />
                    ))}
                    <CarouselControlButton
                        direction="prev"
                        targetId="carousel-example-controls"
                    />
                    <CarouselControlButton
                        direction="next"
                        targetId="carousel-example-controls"
                    />
                </div>
                <div className="homepage-carousel-title mt-3">
                    <a href="" className="btn btn-outline-secondary btn-lg">
                        View More
                    </a>
                </div>
            </div>
        </section>
    );
};
