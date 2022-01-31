import './App.css';
import Component from "./components/Component";
import {useState} from "react";



function App() {

  const cars = [
    {
      "id": 1,
      "car": "Mitsubishi",
      "car_model": "Montero",
      "car_color": "Yellow",
      "car_model_year": 2002,
      "car_vin": "SAJWJ0FF3F8321657",
      "price": 3200,
      "availability": false
    },
    {
      "id": 2,
      "car": "Volkswagen",
      "car_model": "Passat",
      "car_color": "Maroon",
      "car_model_year": 2008,
      "car_vin": "WBANV9C51AC203320",
      "price": 1500,
      "availability": false
    },
    {
      "id": 5,
      "car": "Mitsubishi",
      "car_model": "Lancer Evolution",
      "car_color": "Purple",
      "car_model_year": 2002,
      "car_vin": "WAU2GBFCXDN339713",
      "price": 2500,
      "availability": false
    },
    {
      "id": 9,
      "car": "BMW",
      "car_model": "6 Series",
      "car_color": "Purple",
      "car_model_year": 2008,
      "car_vin": "5TDBY5G16DS675822",
      "price": 2200,
      "availability": true
    },
    {
      "id": 10,
      "car": "Mitsubishi",
      "car_model": "GTO",
      "car_color": "Purple",
      "car_model_year": 1994,
      "car_vin": "JM1NC2PFXE0140518",
      "price": 1500,
      "availability": false
    },
    {
      "id": 12,
      "car": "Audi",
      "car_model": "Q7",
      "car_color": "Pink",
      "car_model_year": 2012,
      "car_vin": "WA1WYBFE2AD448505",
      "price": 1200,
      "availability": true
    },
    {
      "id": 13,
      "car": "Mercedes-Benz",
      "car_model": "SL-Class",
      "car_color": "Aquamarine",
      "car_model_year": 1989,
      "car_vin": "4A4AP3AU8FE713946",
      "price": 900,
      "availability": true
    },
    {
      "id": 14,
      "car": "Volvo",
      "car_model": "C70",
      "car_color": "Red",
      "car_model_year": 2012,
      "car_vin": "WAUHGBFC9DN768366",
      "price": 800,
      "availability": true
    },
  ]
  const logos = {
    Mitsubishi: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Mitsubishi_logo.svg/2381px-Mitsubishi_logo.svg.png",
    Volkswagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/600px-Volkswagen_logo_2019.svg.png",
    BMW: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png",
    Audi: "https://logos-world.net/wp-content/uploads/2021/03/Audi-Logo.png",
    "Mercedes-Benz": "https://i.pinimg.com/564x/ea/00/5f/ea005f65954f6870abb45092848dc52f.jpg",
    Volvo: "https://static.dezeen.com/uploads/2021/09/volvo_flat_logo_design_transport_dezeen_2364_col_sq_4.jpg"
  }
// for each car model show its logo
// if price is less than 1000 make price tag green
// if price is more than 1000 but less than 2000 make price tag yellow
// if price is more than 3000 make price tag to be red
// if car made earlier than 2000year add word "OLD" to car card
// in car cards make links so they will redirect to "https://vinpatikra.lt/{CAR VIN CODE}"
// depending on car availability make cards border to be green if available and red if not




  return (
      <div className="App">

        {cars.map((x,i) => <Component item={x} logos={logos}/>)}

      </div>
  );
}

export default App;
