import React from 'react';

const Component = ({item, logos}) => {

    function priceColor() {
        if (item.price < 1000) return "green"
        if (item.price > 1000 && item.price <3000) return "yellow"
        if (item.price > 3000) return "red"
    }

    const borderStyle = {
        borderWidth: 2,
        borderColor: item.availability ? "green" : "red"
    }


    return (
        <div className="card" style={borderStyle}>
            <img src={logos[item.car]} alt=""/>
            <div className="space" >
                <h1>{item.car_model_year}{item.car_model_year < 2000 && "--OLD" }</h1>
                <h2 style={{color: priceColor()}}>{item.price}EUR</h2>
                <a href={"https://vinpatikra.lt/"+ item.car_vin}>Check</a>
            </div>



        </div>
    );
};

export default Component;