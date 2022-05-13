import { useEffect } from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../Services"
import  "../login.css"


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

    const handlerOnSignUp = () => {
        navigate('/signup')
        
    }


    return (
        <div className="forms">
            <br />
            <div className="container">
                <h1>Store</h1>
                <div className="row pd">
                    <div className="col">
                        <form onSubmit={handleSubmit(onSubmit)} className="items">
                            <label htmlFor="email">Enter your email</label>
                            <input type="email" id="email" placeholder="example@example.com" className="form-control" {...register('email')}/>
                            <label htmlFor="password">Enter your password</label>
                            <input type="password" id="password" placeholder=" Password" className="form-control" {...register('password')}/>
                            <br />
                            <input type="submit" className="btn btn-light" />
                        </form>
                    </div>
                </div>
                <div className="signup">
                    <p>Don't you have any account?</p>  
                    <Link to={'/signup'}>
                    <button onClick={handlerOnSignUp} className="btn btn-link decorate">Sign Up</button>
                    </Link>
                </div>
                <br />
            </div>
            <br />
            
            
        </div>

    )
}

export default Login