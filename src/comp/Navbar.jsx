import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';



const Navbar = () => {

    useEffect(() => {
        const btn = document.querySelector(".button__svg")
        const menu = document.querySelector(".button__menu")

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden")
        })

    }, []);

    return (
        <>
            <nav className="bg-gray-300 w-full flex justify-between items-center">

                <div className="flex items-center space-x-5 ml-7 py-5 font-bold ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden  button__svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>Ran0813

                    <Link to="" className=" text-blue-700 hidden lg:flex" >Home</Link>

                    <Link to="" className=" text-blue-700 hidden lg:flex">AboutUs</Link>



                </div>
                <div className=" lg:flex hidden  ">
                    {/* signup buttons */}
                    <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg" />

                    <button className=" px-5 lg:py-2 bg-gray-400 mx-4 rounded-sm hover:bg-gray-500"><Link to="/login">Logout</Link></button>

                </div>
            </nav>
            <div className="bg-gray-300 lg:hidden   hidden button__menu ">
                <div className="flex justify-between mr-2">
                    <a href="" className="block px-5 py-3 hover:bg-gray-400"> Home</a>
                    <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg" />


                </div>
                <a href="" className="px-5 block py-3 hover:bg-gray-400"> AboutUs</a>
                <button className=" px-5 py-2 bg-gray-400 mx-4 rounded-sm hover:bg-gray-500">Logout</button>


            </div>
        </>);
};

export default Navbar;
