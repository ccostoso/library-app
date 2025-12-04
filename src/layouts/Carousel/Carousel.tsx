import Luv2CodeBook from '../../images/BooksImages/book-luv2code-1000.png';
import './Carousel.css';

export const Carousel = () => {
    return (
        <section id="homepage-carousel" className="container mt-5">
            <div className="homepage-carousel-title">
                <h3>
                    Find your next "I stayed up too late reading" book here.
                </h3>
            </div>
            {/* Desktop */}
            <section id="desktop-carousel">
                <div
                    id="carousel-example-controls"
                    className="carousel carousel-dark slide mt-5 d-none d-lg-block"
                    data-bs-interval="false"
                >
                    <div className="carousel-inner">
                        <article className="carousel-item active">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-6 col-md-4 col-lg-3 mb-3">
                                    <figure className="text-center">
                                        <img
                                            src={Luv2CodeBook}
                                            alt="Luv2Code Book"
                                            className="carousel-book-img"
                                        />
                                        <figcaption className="mt-2">
                                            <h6>Luv2Code Book</h6>
                                            <a
                                                href="#"
                                                className="btn main-color text-white"
                                            >
                                                Reserve
                                            </a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </article>
                        <article className="carousel-item">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-6 col-md-4 col-lg-3 mb-3">
                                    <figure className="text-center">
                                        <img
                                            src={Luv2CodeBook}
                                            alt="Luv2Code Book"
                                            className="carousel-book-img"
                                        />
                                        <figcaption className="mt-2">
                                            <h6>Luv2Code Book</h6>
                                            <a
                                                href="#"
                                                className="btn main-color text-white"
                                            >
                                                Reserve
                                            </a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </article>
                        <article className="carousel-item">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className="col-6 col-md-4 col-lg-3 mb-3">
                                    <figure className="text-center">
                                        <img
                                            src={Luv2CodeBook}
                                            alt="Luv2Code Book"
                                            className="carousel-book-img"
                                        />
                                        <figcaption className="mt-2">
                                            <h6>Luv2Code Book</h6>
                                            <a
                                                href="#"
                                                className="btn main-color text-white"
                                            >
                                                Reserve
                                            </a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </article>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carousel-example-controls"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carousel-example-controls"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Mobile */}
            <section className="d-lg-none mt-3" id="mobile-carousel">
                <div className="row d-flex justify-content-center align-items-center">
                    <figure className="text-center">
                        <img
                            src={Luv2CodeBook}
                            alt="Luv2Code Book"
                            className="carousel-book-img"
                        />
                        <figcaption className="mt-2">
                            <h6 className="fw-bold">Luv2Code Book</h6>
                            <a href="#" className="btn main-color text-white">
                                Reserve
                            </a>
                        </figcaption>
                    </figure>
                </div>
                <div className="homepage-carousel-title mt-3">
                    <a href="" className="btn btn-outline-secondary btn-lg">
                        View More
                    </a>
                </div>
            </section>
        </section>
    );
};
