import { LOGO_URL } from "../utils/constants";
const Footer = () => {
  return (
    <div className="bg-red-500 text-white h-52 flex m-0 p-1  ">
      <div className="flex justify-center items-center w-2/5">
        <img
          className="h-12 w-16 md:h-24 md:w-28 rounded-full  "
          src={LOGO_URL}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-3/5 text-center">
        <p className="text-xl font-bold p-2">
          This Website is Created By Suvendu Kumar Sahoo{" "}
        </p>
        <p className="font-bold text-sm p-2">THANKS FOR USING EATMORE 🙏</p>
        <p className="text-xs font-bold p-2">
          @2024 SuvenduDeveloper | All Rights Reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
