import { useEffect } from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../Services"


const Login = () => {

    const { handleSubmit, register } = useForm()
    const navigate = useNavigate()
    const [userObj, setUserObj] = useState({})


    const onSubmit = (data) => {
        console.log(data)
        setUserObj(data)
    }

    useEffect(() => {
        if(userObj.email){
            loginUser(userObj)
            .then((res) => {
            localStorage.setItem("token",res.access)
            })
            .then(() => {
                navigate('/shop')
            })
            
        }
    }, [userObj, navigate])

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