import { decriment, incriment } from "@/app/lib/paginationSlice";
import { useState } from "react";
import { LuChevronLeft } from "react-icons/lu";
import { MdOutlineChevronRight } from "react-icons/md";
import { useDispatch } from "react-redux";

const PaginationTab = () => {
  const [isActive, setActive] = useState(true);
  const dispatch = useDispatch();

  const [x, setx] = useState(0);
  const [y, sety] = useState(5);

  function onClickplus() {
    setx(x + 5);
    sety(y + 5);
    dispatch(incriment(x));
    dispatch(decriment(y));
    console.log("im pagination page", x, y);
  }

  return (
    <div className="w-[100%] border-y-[1px] border-[#DBDADE] mt-[30px] py-[20px] flex gap-1 pl-5">
      <button className=" hover:bg-primary duration-300 px-1.5 py-1 h-[28px] w-[28px] bg-[#EBEBF4] rounded hover:text-[#EBEBF4] ">
        <LuChevronLeft className=" text-[#67656d] hover:text-[#EBEBF4]" />
      </button>
      {Array.from(Array(5), (x, i) => (
        <button
          onClick={() => setActive(true)}
          key={i}
          className={`${""} hover:bg-secondary hover:text-white duration-300  px-1.5 py-1 h-[28px] w-[28px] bg-[#EBEBF4] rounded `}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => onClickplus()}
        className=" hover:bg-primary duration-300 px-1.5 py-1 h-[28px] w-[28px] bg-[#EBEBF4] rounded "
      >
        <MdOutlineChevronRight className=" text-[#67656d] hover:text-[#EBEBF4]" />
      </button>
    </div>
  );
};
