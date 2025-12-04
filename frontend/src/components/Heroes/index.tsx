export const Heroes = () => {
    return (
        <>
            {/* Desktop Hero */}
            <section className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-6">
                        <div className="col-image-left"></div>
                    </div>
                    <div className="col-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                The library team would love to know what you've
                                been reading. Whether it's to learn a new skill
                                or grow within one, we'll provide the top
                                content for you!
                            </p>
                            <a
                                href="#"
                                className="btn main-color text-white btn-lg"
                            >
                                Sign up!
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>Our collection is always changing!</h1>
                            <div className="lead">
                                Try to check in daily, as our collection is
                                always changing! We work nonstop to bring our
                                Luv 2 Read students the best content available.
                                Our books will always be our top priority.
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="col-image-right"></div>
                    </div>
                </div>
            </section>

            {/* Mobile Hero */}
            <section className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left"></div>
                        <div className="mt-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                The library team would love to know what you've
                                been reading. Whether it's to learn a new skill
                                or grow within one, we'll provide the top
                                content for you!
                            </p>
                            <a
                                href="#"
                                className="btn main-color text-white btn-lg"
                            >
                                Sign up!
                            </a>
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="col-image-right"></div>
                        <div className="mt-2">
                            <h1>Our collection is always changing!</h1>
                            <div className="lead">
                                Try to check in daily, as our collection is
                                always changing! We work nonstop to bring our
                                Luv 2 Read students the best content available.
                                Our books will always be our top priority.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
