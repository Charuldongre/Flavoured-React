import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import {MdDelete} from 'react-icons/md'
import { useDispatch } from "react-redux";
import { removeFromCart,incQty, decQty } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";
const ItemCard = ({img,id,name,price,qty}) => {
  const dispatch=useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
        <MdDelete onClick={()=>{dispatch(removeFromCart(id)); toast(`${name} removed`, {icon:"👏"}) }}
         
        className="absolute right-7 text-gray-600 cursor-pointer "/>
      <img
        src={img}
        alt=""
        className="w-[50px] h-[50px]"
      />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
            <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-1 absolute right-7">
            <FaMinus onClick={()=>qty >1 ? dispatch(decQty({id})) : (qty=0)} className="border-2 border-gray-200 text-gray-600 hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer " />
            <span>{qty}</span>
            <FaPlus onClick={()=> dispatch(incQty({id}))} className="border-2 border-gray-200 text-gray-600 hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
