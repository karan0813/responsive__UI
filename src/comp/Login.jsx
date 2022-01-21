import React, { useState } from 'react';
import { auth, db } from '../firebase'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Login = () => {
    const history = useHistory()

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")

    const signin = (e) => {
        e.preventDefault();
        //login
        auth.signInWithEmailAndPassword(email, password).then(user => {
            setusername(user)
            history.push("/home")

        }).catch(error => { alert(error.message) })
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(authuser => {
            console.log(authuser);
            if (authuser) {
                history.push("/login")
            }
        }).catch(err => { alert(err.message) })
    }

    return <div className="flex justify-center items-center bg-slate-400 h-screen w-screen ">
        <div className=" flex flex-col  ">
            <form className="flex flex-col bg-rose-900 p-12 space-y-4 shadow-lg">
                <label className="text-gray-900 font-bold" htmlFor=''>Email</label>
                <input onChange={(e) => { setemail(e.target.value) }} className=" w-80 px-4 py-2 border-0 focus:outline-none rounded-sm" type="text" placeholder='Enter Email' />

                <label className="text-gray-900 font-bold" htmlFor=''>Password</label>
                <input onChange={(e) => { setpassword(e.target.value) }} className="w-80 px-4 py-2  border-0 focus:outline-none rounded-sm" type="password" placeholder='Enter Password' />
                <button className="w-auto bg-rose-300 py-3 rounded-sm" onClick={signin} >Login</button>
                <button className="w-auto bg-rose-300 py-3 rounded-sm" onClick={register} >Register</button>

            </form>
        </div>


    </div>;
};

export default Login;
