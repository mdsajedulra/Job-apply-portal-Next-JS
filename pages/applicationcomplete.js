import Image from "next/image";
import complete from "/public/complete.gif";
const applicationcomplete = () => {
  return (
    <div className="h-screen bg-[#003241] flex justify-center items-center  ">
      <div>
        <Image width="400" height="400" src={complete}></Image>
        <h1 className="text-center text-3xl text-white">
          Thank you for Application
        </h1>
        <p className="text-white text-center mt-3">
          We will notify you within 2 days
        </p>
      </div>
    </div>
  );
};

export default applicationcomplete;
