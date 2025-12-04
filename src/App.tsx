import './App.css';
import { Carousel } from './layouts/Carousel/Carousel';
import { ExploreTopBooks } from './layouts/Homepage/ExploreTopBooks';
import { Navbar } from './layouts/Navbar/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <ExploreTopBooks />
            <Carousel />
        </>
    );
}

export default App;
