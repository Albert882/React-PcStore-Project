import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementItemQuantity,
  incrementItemQuantity,
} from "../../redux/features/cart-slice";
import { MdBalance } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/all"
import { BiRuble } from "react-icons/all"

export default function PeripheryItem({
  item,
  handleOpenModal,
  handleChangeInfoId,
}) {


  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const productIsAdded = cartItems?.find(
    (addedItem) => addedItem?.id === item?.id
  );

  const handleIncrementItem = () => dispatch(incrementItemQuantity(item));
  const handleDecrementItem = () => dispatch(decrementItemQuantity(item));

  return (
    <div
      className="w-full bg-[#1a223f] h-[104px] p-[20px] border-b border-[#34406a] flex gap-2"
      key={item?.id}
    >
      <div
        className="w-[75%] h-full flex gap-3 cursor-pointer"
        onClick={() => {
          handleChangeInfoId(item?.id);
          handleOpenModal();
        }}
      >
        {item?.type === "HeadPhone" && (
          <img src={item?.image} className="w-[72px] h-[72px]" alt="" />
        )}
        {item?.type === "Rug" && (
          <img src={item?.image} alt="" className="w-[80px] h-[64px]" />
        )}
        {item?.type === "GraphTable" && (
          <img src={item?.image} alt="" className="w-[80px] h-[64px]" />
        )}
        {item?.type === "Microphone" && (
          <img src={item?.image} alt="" className="w-[40px] h-[64px]" />
        )}
        {item?.type === "Mouse" && (
          <img src={item?.image} alt="" className="w-[45px] h-[60px]" />
        )}
        {item?.type === "AudioSpeaker" && (
          <img src={item?.image} alt="" className="w-[80px] h-[64px]" />
        )}
        {item?.type === "WebCamera" && (
          <img src={item?.image} alt="" className="w-[65px]" />
        )}
        {item?.type === "Keyboard" && (
          <img src={item?.image} alt="" className="h-[50px] w-[125px]" />
        )}
        <span className="text-white py-2 font-medium hidden sm:block">{item?.title}</span>
      </div>
      <div className="w-auto h-full flex justify-end items-center flex-col">
        <div className="flex osm:flex-row flex-col gap-3 items-center">
          <div className="flex items-center justify-center osm:mb-0 mb-[-10px]">
            <p className="text-white w-auto text-base font-medium">
              {item?.price} 
            </p>
            <BiRuble className="text-white font-medium w-5 h-5"/>
          </div>
          {productIsAdded ? (
            <div className=" flex items-center justify-center gap-2">
              <button
                className=" w-8 h-8 bg-[#263159] hidden vsm:flex rounded-md text-white font-semibold items-center justify-center"
                onClick={handleDecrementItem}
              >
                <MdOutlineDelete className="text-red-500 w-5 h-5"/>
              </button>
              <p className=" text-white bg-[#0F162F] w-9 h-8 flex justify-center items-center rounded-md font-semibold">
                {productIsAdded?.quantity}x
              </p>
              <button
                className=" w-8 h-8 bg-[#263159] text-white rounded-md font-semibold hidden vsm:flex items-center justify-center"
                onClick={handleIncrementItem}
              >
                +
              </button>
                  <div className=" rounded-md flex gap-1 vsm:hidden overflow-hidden bg-[#263159] items-center flex-col">
                    <button className=" w-full h-5 border-b border-[#2F3960] text-xl text-white" onClick={handleIncrementItem}>
                      +
                    </button>
                    <button className=" w-full flex py-1 items-center justify-center" onClick={handleDecrementItem}>
                      <MdOutlineDelete className=" text-xl text-red-500"/>
                    </button>
                  </div>
            </div>
          ) : (
            <div>
              <button
                className="bg-[#62dcff] font-semibold md:block hidden text-sm text-[#181f39] py-[8px] px-[12px] rounded-md"
                onClick={() => dispatch(addToCart(item))}
                >
                ДОБАВИТЬ
              </button> 
              <button
                className="bg-[#62dcff] font-semibold text-sm md:hidden block text-[#181f39] py-[8px] px-[12px] rounded-md"
                onClick={() => dispatch(addToCart(item))}
                >
                <AiOutlinePlus className=" text-lg"/>
              </button>
            </div>
          )}
        </div>
        <div>
          <a href="" className="lg:flex gap-3 hidden text-[#8190ca]">
            <MdBalance className="w-6 h-6" />
            В Сравнение
          </a>
        </div>
      </div>
    </div>
  );
}
