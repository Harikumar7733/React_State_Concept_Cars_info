import "./Information.css";
import {useState} from "react";

function Information(){
    const [model,setModel] = useState("Maruthi Dzire");
    const [colour,setColour] = useState("Grey");
    const [type,setType] = useState("Sedan");
    const [price,setPrice] = useState("₹9,00,000");
    const[fuel,setFuel] = useState("Diesel");
    const[image,setImage] = useState("https://imgd.aeplcdn.com/642x336/n/cw/ec/170173/dzire-2024-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",)

    function crysta(){
        setModel("Innova Crysta");
        setColour("Milky white");
        setType("SUV");
        setPrice("₹25,00,000");
        setFuel("Petrol");
        setImage("https://i.pinimg.com/originals/d0/9d/04/d09d04451a96408e58b72bb111ff4c26.jpg")
    }

    function dzire(){
        setModel("Maruthi Suzuki Dzire");
        setColour("Cherry Red");
        setType("Sedan");
        setPrice("₹9,00,000");
        setFuel("Diesel");
        setImage("https://imgd.aeplcdn.com/642x336/n/cw/ec/170173/dzire-2024-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80")
    }

    function Fortunrer(){
        setModel("Toyota Fortuner Legender");
        setColour("Black");
        setType("SUV");
        setPrice("₹69,00,000");
        setFuel("Diesel");
        setImage("https://wallpapers.com/images/hd/toyota-fortuner-legender-super-white-yjakyf3ldvwe1knf.jpg")
    }

    function Thar(){
        setModel("Mahindra Thar Roxx");
        setColour("Black");
        setType("SUV");
        setPrice("₹22,00,000");
        setFuel("Petrol");
        setImage("https://i.pinimg.com/736x/1f/42/8e/1f428ed25b47ee592594642f90984df0.jpg")
    }
    
    function Creata(){
        setModel("Hyundai Creta");
        setColour("white");
        setType("Hatchback");
        setPrice("₹26,00,000");
        setFuel("Diesel");
        setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUse6aBNVrP2nnoAurH14xbGBanQMnLnMlA&s")
    }


    return(
        <div id="container">
           <div className="left">
               <img src={image} width="100%" height="70%"/>
           </div>
           <div className="right">
               <dl>
                <dt>CAR MODEL:</dt>
                <dd  className="list"><b>{model}</b></dd>

                <dt>COLOUR:</dt>
                <dd  className="list"><b>{colour}</b></dd>

                <dt>CAR TYPE:</dt>
                <dd  className="list"><b>{type}</b></dd>

                <dt>PRICE:</dt>
                <dd  className="list"><b>{price}</b></dd>

                <dt>FUEL TYPE:</dt>
                <dd  className="list"><b>{fuel}</b></dd>

                <dt>DESCRPTION:</dt>
                <dd><b>Maruti car price starts at Rs 3.99 Lakh for the cheapest model which is Alto 
                    K10 and the price of most expensive model, which is Invicto starts at Rs 25.05 Lakh.
                    Maruti offers 17 car models in India, including 2 cars in SUV category, 1 car in Sedan category, 
                    7 cars in Hatchback category, 2 cars in Compact SUV category, 1 car in Compact Sedan category, 3 
                    cars in MUV category, 1 car in Minivan category. Maruti has 2 upcoming cars in India, Wagon R and e Vitara.
                    Maruti Suzuki has been the biggest carmaker in India for decades. In fact, one in every four cars sold 
                    every month is a Maruti Suzuki. With 18 models on sale today, all Maruti Suzuki cars are widely known for 
                   their affordability and fuel-efficient powertrains. Adding to Maruti’s popularity is the highest number of 
                   showrooms and service centres across the country with easy availability of spare parts. For numbers, there are 
                   4,564 touch points across 2,304 cities in India. Maruti operates under two types of dealerships which include 
                   Maruti Nexa cars and Maruti Arena cars. Maruti Suzuki sells its premium cars under the Nexa outlet.</b></dd>
               </dl>

              <div className="btn">
              <button className="btn-1" onClick={dzire}>Dzire</button>
               <button className="btn-1" onClick={crysta}>Innova Crysta</button>
               <button className="btn-1"onClick={Fortunrer}>Fortuner</button>
               <button className="btn-1" onClick={Thar}>Thar</button>
               <button className="btn-1" onClick={Creata}>Creata</button>
              </div>

           </div>
        </div>
    )
}

export default Information;