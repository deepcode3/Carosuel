import { useState } from "react";
import "./App.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Kitten from "./kitten";
import Button from "./components/button";

function App() {
    const [index, setIndex] = useState<number>(0);

    const prevImage = () => {
        if (index === 0) {
            setIndex(Kitten.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    const nextImage = () => {
        if (index === Kitten.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    console.log(Kitten);
    return (
        <div className="OuterCover">
            <div className="container">
                <Button onClick={prevImage}>
                    <FaAngleLeft className="button" />
                </Button>
                {Kitten.slice(index, index + 1).map((i, key) => (
                    <img key={key} className="catImg" src={i.image} alt="cats" />
                ))}
                <Button onClick={nextImage}>
                    <FaAngleRight className="button" />
                </Button>
            </div>
        </div>
    );
}

export default App;
