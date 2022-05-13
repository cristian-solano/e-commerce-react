import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

const CreateUser = ({onCreate}) => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate()

    const onSubmit = (res) => {
         onCreate(res)
    }

    const handlerOnRegister = (name) => {
        navigate('/shop')
       
    }


    return (
        <div className="content" style={{margin: "30px"}}>
            <div className="container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label"> Name:</label>
                        <input  id='firstName' type="text" className="form-control" placeholder="Name"{...register('first_name')} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input id='lastName' type="text" placeholder="Last Name" className="form-control" {...register('last_name')}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input id='email' type="email" placeholder="example@example.com" className="form-control"{...register('email')}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input id='password' type="password" placeholder="New password" className="form-control" {...register('password')}/>
                    </div>
                    <br />
                
                    <button onClick={handlerOnRegister} className="btn btn-dark">Sign in</button>
                </form>
            </div>
       </div>
    )
} 
export default CreateUser