import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import CreateUser from "../Components/CreateUser"
import { signUpUser } from "../Services"

const SignUp = () => {

    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({})
    const condition = false


    useEffect(() => {
       if (newUser.email) {
            signUpUser()
            .then((res) => {
                localStorage.setItem("token",res.access)
            })
            .then(() => {
                navigate('/shop')
            }) 
            
        } else {
            console.log('no hay valores')
        }
        
    }, [newUser, navigate])

    const handlerOnCreateUser = (e) => {
        setNewUser(e)
    }

    return(
        <div>
           {condition ? <p>Cargando</p> : <CreateUser  onCreate={handlerOnCreateUser}/> } 
        </div>
    )
}

export default SignUp