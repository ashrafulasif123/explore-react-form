const SimpleForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        console.log(email)
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Your name"/>
                <br /> 
                <input type="email" name="email" id="" placeholder="email" />
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default SimpleForm;