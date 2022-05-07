import { useForm } from "react-hook-form"


const Login = () => {

    const { handleSubmit, register } = useForm()
    


    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="example@example.com" {...register('email')}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="New Password" {...register('password')}/>
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login