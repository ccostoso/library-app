import './App.css';
import { Carousel } from './components/Carousel';
import { ExploreTopBooks } from './components/ExploreTopBooks';
import { Navbar } from './components/Navbar/Navbar';
import { Heroes } from './components/Heroes';

function App() {
    return (
        <>
            <Navbar />
            <ExploreTopBooks />
            <Carousel />
            <Heroes />
        </>
    );
}

export default App;
