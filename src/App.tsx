import './App.css';
import { Carousel } from './components/Carousel/Carousel';
import { ExploreTopBooks } from './layouts/Homepage/ExploreTopBooks';
import { Navbar } from './components/Navbar/Navbar';

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
