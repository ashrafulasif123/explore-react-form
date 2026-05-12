import useInputF from '../../hooks/useInputF'

const HookForm = () => {
    const [phone, phoneOnChange] = useInputF('')
    const [email, emailOnChange] = useInputF('')
    const [password, passwordOnChange] = useInputF('')
    const handleSubmit = e => {
        e.preventDefault()
        console.log(phone)
        console.log(email)
        console.log(password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="phone" onChange={phoneOnChange} defaultValue={phone} placeholder="Phone" />
                <br />
                <input type="email" onChange={emailOnChange} defaultValue={email} placeholder="Email" />
                <br />
                <input type="password" onChange={passwordOnChange} defaultValue={password} placeholder="Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;