import React from 'react'
import ImagesKK from "../assets/images.png"
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";


const Arrivalsitems = ({items}) => {
  return (
    <div className="w-[24%]">
       <div className=" relative group overflow-hidden">
        <img src={items.thumbnail} className="h-[320px]" alt="images" />
        <div className="bg-[white] left-0 absolute bottom-[-120px] h-[120px] w-full justify-end group-hover:bottom-0 duration-300 ease-in-out">
          <ul className="pr-5">
            <li className="flex items-center gap-4 justify-end font-sans font-semibold text-[24px] text-[#767676] hover:text-[#262626]">Add to Wish List<FaHeart/></li>
            <li className="flex items-center gap-4 justify-end font-sans font-semibold text-[24px] text-[#767676] hover:text-[#262626] py-2">Compare<TfiReload/></li>
            <li className="flex items-center gap-4 justify-end font-sans font-semibold text-[24px] text-[#767676] hover:text-[#262626]">Add to Cart<FaShoppingCart/></li>
          </ul>
        </div>
       </div>
       <div className="flex justify-between py-[30px] items-center">
        <h4 className="font-sans font-bold text-[24px] text-[#262626]">{items.title}</h4>
        <h3 className="font-sans font-bold text-[20px] text-[#262626]">${items.price}</h3>
       </div>
    </div>
  )
}

export default Arrivalsitems