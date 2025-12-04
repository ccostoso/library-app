import Luv2CodeBook from '../../images/BooksImages/book-luv2code-1000.png';
import NewBook1 from '../../images/BooksImages/new-book-1.png';
import NewBook2 from '../../images/BooksImages/new-book-2.png';
import './Carousel.css';
import { DesktopCarousel } from './DesktopCarousel';
import { MobilePanel } from './MobilePanel';

const books = [
    Luv2CodeBook,
    NewBook1,
    NewBook2,
    Luv2CodeBook,
    NewBook1,
    NewBook2,
    Luv2CodeBook,
    NewBook1,
    NewBook2,
];

// Helper function to chunk array into groups of specified size
const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
};

export const Carousel = () => {
    const bookChunks = chunkArray(books, 3);
    return (
        <section id="homepage-carousel" className="container mt-5">
            <div className="homepage-carousel-title">
                <h3>
                    Find your next "I stayed up too late reading" book here.
                </h3>
            </div>
            <DesktopCarousel bookChunks={bookChunks} />
            <MobilePanel bookImage={Luv2CodeBook} />
        </section>
    );
};
