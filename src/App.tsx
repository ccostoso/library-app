import './App.css';
import { Carousel } from './components/Carousel';
import { ExploreTopBooks } from './components/ExploreTopBooks';
import { Navbar } from './components/Navbar/Navbar';
import { Heroes } from './components/Heroes';
import { LibraryServices } from './components/LibraryServices';
import { Footer } from './components/Footer';

function App() {
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
}

export default App;
