

import { useContext, useEffect, useReducer, useState } from "react";
import { ProductContext } from "../context/productContext";

import { useNavigate } from "react-router-dom";



export const Home = () => {
    const { restaurants } = useContext( ProductContext );
    const navigate = useNavigate();

    function fun1 ( _id ) {
        navigate( `/restaurant/${_id}` );
    }

    return (
        <div className="home" >
            
            <h1 style={{ width: "100%" }} > Restaurants </h1>
            <div class='restaurant-list'>
            { restaurants && restaurants.map( r => (
                <div key={r._id} > 
                    <button onClick={ ()=> fun1( r._id ) } > { r.username } </button>
                </div>
            ) ) }
            </div>
        </div>
    )
}