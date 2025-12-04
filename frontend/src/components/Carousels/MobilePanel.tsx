type MobilePanelProps = {
    bookImage: string;
};

export const MobilePanel = ({ bookImage }: MobilePanelProps) => {
    return (
        <section className="d-lg-none mt-3" id="mobile-carousel">
            <div className="row d-flex justify-content-center align-items-center">
                <figure className="text-center">
                    <img
                        src={bookImage}
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
    );
};
