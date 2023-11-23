import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carrusel.css";

export default function Carrusel({ imagenes }) {
  
    return (

        <div className="contenedor">
            <Carousel
                className="carrusel"
                autoFocus={true}
                autoPlay={true}
                interval={2000}
                showIndicators={false}
                infiniteLoop={true}
                showThumbs={false}
                showArrows={false}
            >
                {imagenes.map((imagen, index) =>
                    <div key={index}>
                        <img
                            src={imagen.urlImagen}
                            alt="fotos"
                        />
                    </div>
                )}
            </Carousel>
        </div>
    )
}
