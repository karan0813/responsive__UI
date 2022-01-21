import React, { useEffect, useState } from 'react';

const Serchitem = ({ mrpprice, pricewithoutdiscount, productimage, metatitle }) => {



    return <>

        <div className="flex  flex-col">
            <div>
                <img className="object-contain " src={productimage} alt='' />
            </div>
            <h3 className="m-3 font-bold">{metatitle?.length > 22 ? metatitle.substr(0, 35) + "..." : metatitle(metatitle, 20)}</h3>
            <div className="flex items-center justify-items-start m-3">
                <p className="px-5 line-through"><span className="font-bold">Rs:</span>{mrpprice}</p> <p><span className="font-bold">Rs:</span>{pricewithoutdiscount}</p>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-gray-500 px-5 py-2 rounded-sm m-3">Order Now</button>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </div>
        </div>



    </>
};

export default Serchitem;
