const ProductForm = () => {

    const handleProductSubmit = () =>{
        
    }

    return (
        <div>
           <form>
                <input type="text" name="name" placeholder="Product Name"/>
                <br />
                <input type="text" name="price" placeholder="Product Price"/>
                <br />
                <input type="text" name="quantity" placeholder="Product Quantity"/>
                <br />
            
            </form> 
        </div>
    );
};

export default ProductForm;