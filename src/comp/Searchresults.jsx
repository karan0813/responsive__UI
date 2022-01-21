import React from 'react';
import Serchitem from './Serchitem';

const Searchresults = ({ Apidata }) => {
    console.log(Apidata);
    return <div className="grid lg:grid-cols-3 gap-5  md:grid-cols-2  ">
        {Apidata.map(value => {
            return <div className="m-4 bg-gray-700 "><Serchitem metatitle={value.metatitle} productimage={value.productimage} mrpprice={value.mrpprice} pricewithoutdiscount={value.pricewithoutdiscount} /></div>

        })}

    </div>;
};

export default Searchresults;
