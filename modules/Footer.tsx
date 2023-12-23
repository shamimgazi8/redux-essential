import Link from "next/link";
const Footer = () => {
  return (
    <header>
      <div className=" w-full pl-4 bg-purple-800">
        <Link href="/">
          <p className=" cursor-pointer text-red text-[50px] font-extrabold">
            Redux Essesntial Example
          </p>
        </Link>
      </div>
    </header>
  );
};
export default Footer;
