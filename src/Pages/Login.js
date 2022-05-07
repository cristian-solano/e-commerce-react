import { useForm } from "react-router-form";

const Login = () => {

    const { handleSubmit, register } = useForm()


    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email"/>
                <label htmlFor="password"></label>
                <input type="password" id="password" placeholder="New Password"/>
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login