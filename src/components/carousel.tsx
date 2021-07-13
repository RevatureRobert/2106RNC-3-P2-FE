import peace from "./images/pics/peace.png";
import logo_name from "./images/pics/logo_name.png";
import safeSpace from "./images/pics/safeSpace.png";
const Carousel: React.FC = () => {
    return (
        <div className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={peace} className="d-block w-100" alt="peace" />
                </div>
                <div className="carousel-item">
                    <img
                        src={logo_name}
                        className="d-block w-100"
                        alt="logo_name"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={safeSpace}
                        className="d-block w-100"
                        alt="people"
                    />
                </div>
            </div>
        </div>
    );
};

export default Carousel;
