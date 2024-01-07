import { useContext } from "react";
import { MyContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const{signIn}=useContext(MyContext)
    
        
    }
    return (
        <div>
            <form>
            <input type="email" name="email" id="" />
            <input type="password" name="password" id="" />
            <input type="submit" value="log in" />
            </form>
        </div>
    );
};

export default Login;