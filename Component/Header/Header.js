import Image from "next/image";


const Header = () => {
  return (
    <div className="mb-16">
      <div className=" flex justify-center p-10 items-end  bg-gradient-to-b from-[#00fffc]">
        <div className="w-28">
          <Image width={50} height={50} src="https://osacabd.org/wp-content/uploads/2022/09/fav-icon.png" alt=""></Image>
        </div>
        <div className="">
          <h1 className="font-bold text-5xl text-blue-900">OSACA</h1>
          <h1 className="text-2xl">
            Organisation for Social Advancement & Cultural Activities
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
