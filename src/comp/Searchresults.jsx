import React from 'react';
import Serchitem from './Serchitem';

const Searchresults = ({ Apidata }) => {
    return <div className="grid lg:grid-cols-3 gap-5  md:grid-cols-2 bg-gray-400 ">
        {Apidata.map((value, index) => {
            return <div key={index} className="m-4  bg-zinc-200 "><Serchitem id={value.productuniqueid} off={value.discountpercentage} metatitle={value.metatitle} productimage={value.productimage} mrpprice={value.mrpprice} pricewithoutdiscount={value.pricewithoutdiscount} /></div>

        })}

    </div>;
};

export default Searchresults;
