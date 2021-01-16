import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
       <img
       className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        />
        <div className="home__row">
        <Product 
        id="12345" 
        title="The Lean Startup: Constant Innovation Creates Radically Succesful Business paperback"
        price={11.96}
        rating={5}

        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />

<Product 
        id="12345" 
        title="Alexa"
        price={11.96}
        rating={5}

        image="data:image/jpeg;base64,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"
        />
        </div>
        

        <div className="home__row">

        <Product 
        id="12345" 
        title="One Plus Nord"
        price={11.96}
        rating={5}

        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXm_XKpM3L7D81OUNP6Ps60zkF65RHlVoTPA&usqp=CAU"
        />

        <Product 
        id="12345" 
        title="Leaf Wireless Bluetooth Headphones"
        price={11.96}
        rating={5}

        image="data:image/jpeg;base64,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"
        />

        <Product 
        id="12345" 
        title="Apple Watch Series 3"
        price={11.96}
        rating={5}

        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNQZyxN339VE725fsMiqloN5dTS31HhqY6Dw&usqp=CAU"
        />
        </div>


        <div className="home__row">
        
        <Product 
        id="12345" 
        title="Samsung Curved TV"
        price={11.96}
        rating={5}

        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCOGHWrOZBJbCzNbRvwrXKVTjIZSBlDOmK7Q&usqp=CAU"
        />
        
        </div>
        </div>
    );
}

export default Home;
