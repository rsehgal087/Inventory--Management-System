import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Update.css'

export default function Update(props) {
    let navigate = useNavigate();        //intialize the navigation function
    const [name, setName] = useState(''); //setting the state of name
    const [description, setDesc] = useState(''); //setting the state of description
    const [cost,setCost] = useState('');         //setting the state of cost
    const [avlQty,setAvlQty] = useState('');     //setting the state of avlQty
    const [minQty,setMinQty] = useState('');     //setting the state of minQty
    const [productId,setProductId] = useState(null); //setting the state of minQty

    useEffect(() => {
        // Retrieve product details from localStorage and set them in state
        setProductId(localStorage.getItem('Product Id'));
        setName(localStorage.getItem('Name'));
        setDesc(localStorage.getItem('Description'));
        setCost(localStorage.getItem('Cost'));
        setAvlQty(localStorage.getItem('Avl Qty'));
        setMinQty(localStorage.getItem('Min Qty'));
    }, []); 

    const updateAPIData = (e) => {
        e.preventDefault(); 

        // Validate that all fields are filled; if not, show an alert
        if (!productId || !name || !description || !cost || !avlQty || !minQty) {
            alert("All fields are mandatory. Please fill all fields.");
            return;
        }

        axios.put(`http://${props.apiKey}/product/${productId}`, { //make a put request to update the data
            productId,
            name,
            description,
            cost,
            avlQty,
            minQty
        }).then(() => {
            navigate('/dashboard'); // Navigate to the dashboard upon successful update

            // Show a success message after a brief delay
            setTimeout(() => {
                alert("Product updated successfully");
            }, 500);
        });
    }


    return (
        // HTML code for Update product form , take respective fields value. Valid data navigate to dashboard.
        // Invalid data shows alert.
        <div class="ubody">
        <div class="uwrapper">
            <form action="">
                <h1> Update Product</h1>
                <div class="input-box">
                    <input type="text" id="productId" placeholder="Enter product Id " value={productId} 
                    onChange={(e) => setProductId(e.target.value)}/>
                </div>
                <div class="input-box">
                    <input type="text" id="name" placeholder="Enter name of product"value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div class="input-box">
                    <input type="text" id="desc" placeholder="Enter Description of product"value={description} 
                    onChange={(e) => setDesc(e.target.value)}/>
                </div>
                <div class="input-box">
                    <input type="text" id="cost" placeholder="Enter Cost of product"value={cost} 
                    onChange={(e) => setCost(e.target.value)}/>
                </div>
                <div class="input-box">
                    <input type="text" id="avlQty" placeholder="Available Quantity of product" value={avlQty} 
                    onChange={(e) => setAvlQty(e.target.value)}/>
                </div>
                <div class="input-box">
                    <input type="text" id="minQty" placeholder="Minimum Quantity of product" value={minQty} 
                    onChange={(e) => setMinQty(e.target.value)}/>
                </div>               
                <div class="button">
                    <a type="submit" href="#" onClick={updateAPIData}>Update</a>
                </div>
            </form>

        </div>
    </div>
    )
}