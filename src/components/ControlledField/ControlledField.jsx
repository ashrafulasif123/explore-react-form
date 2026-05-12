import { useState } from "react";

const ControlledField = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(phone, email, password)

    }
    const handlePhoneChange = e =>{
        setPhone(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="phone" onChange={handlePhoneChange} defaultValue={phone} placeholder="Phone"
                    required />
                <br />
                <input type="email" name="email" onChange={handleEmailChange} defaultValue={email} placeholder="email"
                    required />
                <br />
                <input type="password" name="password" onChange={handlePasswordChange} defaultValue={password} placeholder="Password"
                    required />
                <br />
                <input type="submit" value="Submit" />
            </form>

            {/* <div style={{color: 'red'}}>
                <span><small>{error}</small></span>
            </div> */}
        </div>
    );
};

export default ControlledField;