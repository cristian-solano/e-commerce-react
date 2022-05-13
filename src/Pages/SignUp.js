
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CreateUser from "../Components/CreateUser"
import { signUpUser } from "../Services"

const SignUp = () => {

    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({})
    const [user, setUser] = useState({})

    


    useEffect(() => {   
       if (newUser.first_name) {
            
            
        } else {
            console.log('no hay valores')
        }
        signUpUser(newUser)
            .then((res) => {
                console.log(res)
                navigate('/login')
                
            }) 
        console.log(newUser)
        
    }, [newUser, navigate])

    

    const handlerOnCreateUser = (e) => {
        setNewUser(e)
        setUser(e)
        
        console.log(e)
    }

    console.log('Usuario:', user )

    return(
        <div>
            
            <CreateUser  onCreate={handlerOnCreateUser}/>
        </div>
    )
}

export default SignUp