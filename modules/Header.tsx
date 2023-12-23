import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className=" w-full pl-4 bg-purple-800">
        <Link href="/">
          <p className=" cursor-pointer text-secondary text-[50px] font-extrabold">
            Redux Essesntial Example
          </p>
        </Link>
        <div className=" flex justify-between gap-4 mt-5 mr-5 items-center">
          <div className=" flex gap-4 mt-5">
            <Link href="/">
              <button className=" text-white bg-purple-500 rounded text-xl font-semibold px-3 py-6 hover:bg-secondary duration-300 mb-3">
                Posts
              </button>
            </Link>
            <Link href="/user">
              <button className=" text-white bg-purple-500 rounded text-xl font-semibold px-3 py-6  hover:bg-secondary duration-300 mb-3">
                Users
              </button>
            </Link>
            <Link href="/notification">
              <button className=" text-white bg-purple-500 rounded text-xl font-semibold px-3 py-6  hover:bg-secondary duration-300 mb-3">
                notifications
              </button>
            </Link>
          </div>

          <button className=" text-white bg-blue-800 rounded text-xl h-12 font-semibold px-3   hover:bg-primary duration-300 mb-3">
            Refresh Notifications
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
