import React from "react";
import '../css/Home.css';

export default function Home() {
    return (
        // HTML code for homepage consist of h2 header and a p paragraph
        <div className="hbody">
            <div className="text">
            <h2 className="home-heading">
                INVENTORY MANAGEMENT
            </h2>
            <p className="home-paragraph">
                Welcome to the Inventory Management system, where you can efficiently manage your store's inventory. 
                Keep track of stock levels, add new items, update existing ones, and get alerts when inventory is low. 
                Streamline your inventory management process and ensure your store runs smoothly.
            </p>
            </div>
        </div>
    );
}
