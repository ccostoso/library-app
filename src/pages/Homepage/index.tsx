import { Navbar } from '../../components/Navbar/Navbar';
import { ExploreTopBooks } from '../../components/ExploreTopBooks';
import { Carousel } from '../../components/Carousel';
import { Heroes } from '../../components/Heroes';
import { LibraryServices } from '../../components/LibraryServices';
import { Footer } from '../../components/Footer';

export const Homepage = () => {
    return (
        <>
            <Navbar />
            <ExploreTopBooks />
            <Carousel />
            <Heroes />
            <LibraryServices />
            <Footer />
        </>
    );
};
