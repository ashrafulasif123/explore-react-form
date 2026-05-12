import { useRef } from "react";

const UnControlledField = () => {

    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email)
        console.log(password)
    }

    return (
        <div>
            <form onClick={handleSubmit}>
                <input ref={emailRef} type="email" name="email" id="" placeholder="email"
                    required />
                <br />
                <input ref={passwordRef} type="password" name="password" placeholder="Password"
                    required />
                <br />
                <input type="submit" value="Submit" />
            </form>


        </div>
    );
};

export default UnControlledField;