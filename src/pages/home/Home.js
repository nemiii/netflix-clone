import Latest from "./Latest";
import Movies from "./Movies";
import Sliders from "./Slider";
import Trailers from "./Trailers";

const Home = () => {
    return (
        <>
            <Sliders />
            <Movies />
            <Trailers />
            <Latest />
        </>
    );
};

export default Home;