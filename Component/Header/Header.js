import icon from "../../../assets/icon.png";

const Header = () => {
  return (
    <div className="mb-16">
      <div className=" flex justify-center p-10 items-end  bg-gradient-to-b from-[#00fffc]">
        <div className="w-28">
          <img src={icon} alt=""></img>
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
