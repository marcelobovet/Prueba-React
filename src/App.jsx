import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Finder from "./components/Finder";
import CardItem from "./components/CardItem";
import Loader from "./components/Loader";
import Button from "react-bootstrap/Button";


import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getMarsRoverPhotos } from "./MyApi";

function App() {
    const [originalPhotos, setOriginalPhotos] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await getMarsRoverPhotos();

            setPhotos(data.photos);
            setOriginalPhotos(data.photos);
            setLoading(false);
        };

        fetchData().catch(console.error);
    }, []);

    const sortById = () => {

        const sortedarr = [...photos].sort((a, b) => !sorted ? b.id - a.id : a.id - b.id);
        setSorted(!sorted)
        setPhotos(sortedarr);
    };

    const onFindByText = (event) => {
        if (event.target.value === "") setPhotos(originalPhotos);
        event.preventDefault();

        const filteredArr = photos.filter((photo) => {
            return (
                photo.camera.name.toLowerCase() === event.target.value.toLowerCase()
            );
        });

        if (filteredArr.length) {
            setPhotos(filteredArr);
        }
    };

    return (
        <div className="App">
            <Nav />
            <Finder onChange={onFindByText} />
            <div className="container-btn">
                <Button onClick={sortById} className=""> Ordenar <FaArrowDown/><FaArrowUp/> </Button>
                {loading && <Loader />}
            </div>
            <div className="container-cards">
                {photos.map((photo, index) => (
                    <CardItem key={index} item={photo} />
                ))}
            </div>
        </div>
    );
}

export default App;
