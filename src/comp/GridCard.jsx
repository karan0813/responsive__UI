import React, { useState } from 'react';

const GridCard = () => {
    const [like, Setlike] = useState(true)
    const handlelike = () => {
        Setlike(false)
        if (!like) {
            Setlike(true)
        }

    }
    return <div className="p-6 border-2 rounded-t-lg bg-blue-100 from-slate-300 ">
        <div className="flex justify-between">
            <h1 className="font-bold mb-5">DEV Team</h1>
            {like ? <svg xmlns="http://www.w3.org/2000/svg" onClick={handlelike} className="h-6 w-6 hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" onClick={handlelike} className="h-5 w-5 hover:animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>}

        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste asperiores facilis sunt id quia reiciendis iure libero ex, repellat quasi!</p>
        <div className="flex items-center justify-between">
            <button className="px-4 py-2 rounded-sm  bg-neutral-900 text-white my-4">More</button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
        </div>
    </div>;
};

export default GridCard;
