import { createContext } from "react";
import { useState } from "react";
import {GoogleAuthProvider,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import auth from "../Firebase/Firebase.config";
export const MyContext=createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password,)
    }
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;