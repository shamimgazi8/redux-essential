"use client";
import { decriment, incriment } from "@/app/lib/paginationSlice";
import { useGetPostsQuery } from "@/app/lib/postsSlice";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import {
  FaEnvelopeOpenText,
  FaRegComment,
  FaRegShareSquare,
} from "react-icons/fa";
import { LuChevronLeft } from "react-icons/lu";
import {
  MdOutlineChevronRight,
  MdOutlineSubtitles,
  MdSaveAlt,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import TransitionsModal from "./ModelWindow";
import { Spinner } from "./Spinner";

const Post = () => {
  const [isActive, setActive] = useState(true);
  const dispatch = useDispatch();

  const [x, setx] = useState(0);
  const [y, sety] = useState(5);
  const [z, setz] = useState(1);
  function onClickminus() {
    if (x <= 0) return;
    setx(x - 5);
    sety(y - 5);
    setz(z - 1);
    dispatch(incriment(x));
    dispatch(decriment(y));
  }

  function onClickplus() {
    if (y >= data.length) return;
    setx(x + 5);
    sety(y + 5);
    setz(z + 1);
    dispatch(incriment(x));
    dispatch(decriment(y));
  }

  const { data, error, isLoading } = useGetPostsQuery({});

  if (isLoading) {
    return <Spinner />;
  }
  console.log("=======", data);
  const paginationsLength = data ? data.length / 5 : 1;

  if (error) {
    return (
      <div>
        <Spinner />
        <p className=" w-full text-center text-2xl font-semibold text-danger m-5">
          Something Went Wrong Please try again later 😣
        </p>
      </div>
    );
  }
  return (
    <>
      {" "}
      <h1 className=" text-3xl font-bold text-blue-950 px-5 py-5">Posts</h1>
      {data.slice(x, y).map((post: any, i: number) => {
        return (
          <div key={i} className="">
            <div className=" mt-5 border border-gray-300 mx-5 my-5 px-3 py-3 rounded">
              <h1 className=" flex gap-3 items-center text-xl font-semibold mb-5">
                <MdOutlineSubtitles /> {post.title}
              </h1>
              <p className=" flex gap-3 items-center  text-sm font-normal leading-10">
                <FaEnvelopeOpenText /> {post.body}
              </p>
              <div className=" flex gap-5 p-3 m-5">
                <button className="flex justify-center items-center gap-3 bg-white h-[40px] w-[80px] rounded text-gray-500 duration-100 hover:bg-primary hover:text-white ">
                  <BiLike /> Like
                </button>
                <button className="flex justify-center items-center gap-3 bg-white h-[40px] w-[120px] rounded text-gray-500 duration-100 hover:bg-primary hover:text-white ">
                  <FaRegComment /> comment
                </button>
                <button className="flex justify-center items-center gap-3 bg-white h-[40px] w-[80px] rounded text-gray-500 duration-100 hover:bg-primary hover:text-white ">
                  <FaRegShareSquare /> share
                </button>
                <button className="flex justify-center items-center gap-3 bg-white h-[40px] w-[100px] rounded text-gray-500 duration-100 hover:bg-primary hover:text-white ">
                  <MdSaveAlt /> save
                </button>
              </div>
              <div>
                <TransitionsModal heading={post.title} body={post.body} />
              </div>
              {/* <button className="flex justify-center items-center gap-3 h-[40px] w-[150px] bg-purple-600 text-white rounded hover:bg-secondary duration-300">
                {" "}
                <MdOutlineViewInAr /> View Post
              </button> */}
            </div>
          </div>
        );
      })}
      <div className="w-[100%] border-y-[1px] border-[#DBDADE] mt-[30px] py-[20px] flex gap-1 pl-5">
        <button
          onClick={() => onClickminus()}
          className=" hover:bg-primary duration-300 px-1.5 py-1 h-[28px] w-[28px] bg-[#EBEBF4] rounded hover:text-[#EBEBF4] "
        >
          <LuChevronLeft className=" text-[#67656d] hover:text-[#EBEBF4]" />
        </button>
        {Array.from(Array(data.length).slice(0, paginationsLength), (x, i) => (
          <button
            key={i}
            className={`${
              i + 1 === z ? " bg-primary text-white" : ""
            } hover:bg-secondary hover:text-white duration-300  px-1.5 py-1 h-[28px] w-[28px] bg-[#EBEBF4] rounded overflow-hidden `}
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
    </>
  );
};

export default Post;
