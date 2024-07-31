import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <div className="container">
                <div className="row">
                    <Card
                        title="Alfa Romeo Giulia"
                        content="El Alfa Romeo Giulia es un sedán deportivo que ofrece una experiencia de conducción emocionante con su potente motor y un diseño elegante. Destaca por su equilibrio entre rendimiento y confort, y está disponible en varias versiones, incluyendo la de alto rendimiento Quadrifoglio."
                        image="https://www.media.stellantis.com/cache/b/5/3/c/d/b53cd87f278e627740ce6a69e783fdf81f838c01.jpeg"
                    />
                    <Card
                        title="Alfa Romeo Tonale"
                        content="El Alfa Romeo Tonale es un SUV compacto que combina estilo italiano con tecnología moderna. Con un diseño distintivo y una conducción dinámica, el Tonale ofrece una opción más versátil sin comprometer el rendimiento característico de la marca Alfa Romeo."
                        image="https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2019/10/alfa-romeo-tonale.jpg?tf=3840x"
                    />
                    <Card
                        title="Alfa Romeo Stelvio"
                        content="El Alfa Romeo Stelvio es un SUV de tamaño medio que se destaca por su rendimiento deportivo y su diseño atractivo. Con una configuración de tracción integral y motores potentes, el Stelvio ofrece una experiencia de conducción emocionante en un paquete práctico y elegante."
                        image="https://cdn.drivek.com/configurator-imgs/cars/es/$original$/ALFA-ROMEO/STELVIO-QUADRIFOGLIO/42887_SUV-5-DOORS/alfa-romeo-stelvio-quadrifoglio-front-view.jpg"
                    />
					<Card
                        title="Alfa Romeo Milano"
                        content="El Alfa Romeo Milano es un nuevo modelo que combina la elegancia clásica con innovaciones tecnológicas de vanguardia. Este vehículo está diseñado para ofrecer un rendimiento sobresaliente y una experiencia de conducción refinada, alineándose con la rica herencia de la marca Alfa Romeo."
                        image="https://www.ofertamotor.es/wp-content/uploads/2024/01/1-8.jpg"
                    />
                    <Card
                        title="Alfa Romeo 33 Stradale"
                        content="El Alfa Romeo 33 Stradale 2023 es un superdeportivo que rinde homenaje al legendario 33 Stradale de los años 60. Combina un diseño exquisito con tecnología de vanguardia y un rendimiento excepcional. Con un motor V6 y un diseño que respeta el legado de su predecesor, el nuevo 33 Stradale ofrece una experiencia de conducción única y emocionante."
                        image="https://www.km77.com/images/medium/8/0/4/7/alfa-romeo-33-stradale-2024-frontal-lateral.368047.jpg"
                    />
                </div>
            </div>
			<Footer/>
        </div>
    );
}

export default Home;