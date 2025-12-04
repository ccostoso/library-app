type ReturnBookSlideProps = {
    images: string[];
    active: boolean;
};

export const ReturnBookSlide = ({ images, active }: ReturnBookSlideProps) => {
    return (
        <article className={`carousel-item ${active ? 'active' : ''}`}>
            <div className="row d-flex justify-content-center align-items-center">
                {images.map((image, index) => (
                    <figure
                        key={index}
                        className="text-center col-6 col-md-4 col-lg-3 mb-3"
                    >
                        <img
                            src={image}
                            alt="Luv2Code Book"
                            className="carousel-book-img"
                        />
                        <figcaption className="mt-2">
                            <h6>Luv2Code Book</h6>
                            <a href="#" className="btn main-color text-white">
                                Reserve
                            </a>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </article>
    );
};
