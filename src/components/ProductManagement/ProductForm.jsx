import { useState } from "react";

const ProductForm = ({handleAddProduct}) => {

   const [error, setError] = useState('')
        
    const handleProductSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value
        const price = Number(e.target.price.value)
        const quantity = Number(e.target.quantity.value)

        if(!name){
            setError('Please Provide a Product Name')
            return
        }
        else if(!price){
            setError('Please Provide a Product Price')
            return
        }
        else if(price < 0){
            setError('Price Cannot be negetive')
            return
        }
        else{
            setError('')
        }
        

        const newProduct = {
            name, price, quantity
        }
        handleAddProduct(newProduct)
    }

    return (
        <div>
           <form onSubmit={handleProductSubmit}> 
                <input type="text" name="name" placeholder="Product Name"/>
                <br />
                <input type="text" name="price" placeholder="Product Price"/>
                <br />
                <input type="text" name="quantity" placeholder="Product Quantity"/>
                <br />
                <input type="submit" value="Submit" />
            </form> 
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;