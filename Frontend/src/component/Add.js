import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Add.css';

export default function Add(props) { 
    let navigate = useNavigate();  //intialize the navigation function.              
    const [name, setName] = useState(''); //setting the state of name
    const [description, setDesc] = useState(''); //setting the state of description
    const [cost,setCost] = useState('');        //setting the  state of cost
    const [avlQty,setAvlQty] = useState('');     //setting the state of avlQty
    const [minQty,setMinQty] = useState('');     //setting the state of minQty
    const [productId,setProductId] = useState(''); //setting the state of minQty

    const postData = (e) => {       //Make a post request to add data , show alerts and navigate to dashboard.
        e.preventDefault();
        if (!productId || !name || !description || !cost || !avlQty || !minQty) {
            alert("All fields are mandatory. Please fill all fields.");
            return;
        }
        
        axios.post(`http://${props.apiKey}/product`, { 
            productId,
            name,
            description,
            cost,
            avlQty,
            minQty
        }).then(() => {
            navigate('/dashboard');
            setTimeout(() => {
                alert("Product added successfully");
            }, 500);
        })
    }
    return (
        // HTML code for Add product form , take respective fields value. Valid data navigate to dashboard.
        // Invalid data shows alert.
        <div class="abody">
            <div class="awrapper">
                <form action="">
                    <h1> Add Product</h1>        
                    <div class="input-box">
                        <input type="number" id="productId" placeholder="Enter product Id " 
                        onChange={(e) => setProductId(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <input type="text" id="name" placeholder="Enter name of product" 
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <input type="text" id="desc" placeholder="Enter Description of product" 
                        onChange={(e) => setDesc(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <input type="number" id="cost" placeholder="Enter Cost of product"                        
                        onChange={(e) => setCost(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <input type="number" id="avlQty" placeholder="Available Quantity of product" 
                        onChange={(e) => setAvlQty(e.target.value)}/>
                    </div>
                    <div class="input-box">
                        <input type="number" id="minQty" placeholder="Minimum Quantity of product" 
                        onChange={(e) => setMinQty(e.target.value)}/>
                    </div>                 
                    <div class="button">
                        <a type="submit" href="#" onClick={postData}>Add Product</a> 
                    </div>
                </form>

            </div>
        </div>
    )
}