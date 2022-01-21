import React from 'react';
import GridCard from './GridCard';

const Grid = () => {
    return (
        <>
            <div className=" bg-gray-400">
                <div className="flex justify-center items-center relative  bottom-5 ">
                    <input className=" lg:w-1/2 md:w-96 w-60 border-0 focus: outline-none pr-2 py-3 pl-2 rounded-sm " type="text" placeholder="serch For Dev" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 pr-2 w-7 rounded-sm bg-white relative right-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 bg-gray-400 p-5  " >
                <div className="m-3  shadow-md "><GridCard /></div>
                <div className="m-3 shadow-md"><GridCard /></div>

                <div className="m-3 shadow-md"><GridCard /></div>

                <div className="m-3 shadow-md"><GridCard /></div>

                <div className="m-3 shadow-md"><GridCard /></div>

                <div className="m-3 shadow-md"><GridCard /></div>

                <div className="m-3 shadow-md col-span-3 hidden lg:block "><GridCard /></div>

            </div></>
    );
};

export default Grid;
