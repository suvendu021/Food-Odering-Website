import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="flex items-center justify-center mb-6 md:mb-0">
          <img
            className="h-12 w-16 md:h-24 md:w-28 rounded-full"
            src={LOGO_URL}
            alt="Logo"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold mb-2">
            THANKS FOR USING <span className="text-yellow-400">EATMORE</span> 🙏
          </p>
          <p className="text-xs font-semibold">
            &copy; 2024 <span className="text-blue-400">SuvenduDeveloper</span>.
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
