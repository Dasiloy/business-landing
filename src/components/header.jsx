/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import Text from "../atoms/text";
import { FiMoon } from "react-icons/fi";
import { TiWeatherSunny } from "react-icons/ti";

const Header = ({ themeToggler, mode }) => {
  return (
    <div className='hero'>
      <div className='container'>
        {/** NAVBAR */}
        <div className='flex flex-row items-center justify-between mt-16'>
          {/** LOGO */}
          <div className='flex flex-row items-center gap-3'>
            <img
              src={"/logo.svg"}
              alt='Logo'
              className='w-[140px] h-[54px] md:w-[200px] object-contain'
            />
          </div>
          {/** RIGHT */}
          <div className='flex flex-row items-center gap-8 justify-between'>
            <button className='border-2 px-6 py-4 hidden md:flex rounded-lg text-white-light border-primary-light dark:border-primary-dark font-semibold dark:text-white-dark bg-primary-light dark:bg-primary-dark'>
              Request Demo
            </button>
            <button className='border-2 px-6 py-4 bg-[#030C07] rounded-lg hidden md:flex text-white-light font-semibold  border-primary-light dark:border-primary-dark'>
              Request Early Access
            </button>
            {/** Theme Switcher */}
            <button
              onClick={themeToggler}
              className='bg-primary-light px-3 md:px-[18px] py-0.5 md:py-1 px-0.5 flex flex-row items-center gap-1 rounded-[100px]'>
              <span
                className={`rounded-[100px] flex items-center justify-center px-[18px] py-2 ${
                  mode === "light" ? "bg-white-dark" : ""
                }`}>
                <TiWeatherSunny
                  size={24}
                  color={mode === "light" ? "#fff" : "#252525"}
                />
              </span>
              <span
                className={`rounded-[100px] flex items-center justify-center px-[18px] py-2 ${
                  mode === "dark" ? "bg-white-dark" : ""
                }`}>
                <FiMoon
                  size={24}
                  color={mode === "dark" ? "#fff" : "#252525"}
                />
              </span>
            </button>
          </div>
        </div>

        {/** HERO */}
        <div className='mt-[120px] mb-[160px] lg:mt-[180px] mb-[240px] xl:mt-[220px] mb-[280px] flex flex-col-reverse lg:flex-row lg:items-center gap-[81px] lg:justify-between'>
          <div className='2xl:w-1/2'>
            <Text
              variant='h0'
              Component='h1'
              className='font-extrabold text-mainText-dark'>
              Powerful all-in-one{" "}
              <span className='text-primary-light'>Compliance Software</span>{" "}
              made Simple!
            </Text>
            <Text variant='p' className='text-Gray_100-dark mt-6'>
              Our software simplifies background checks, tracks compliance, and
              keeps your workforce certified with an intuitive platform.
              Experience easy, automated compliance management today!
            </Text>
            <div className='flex flex-row items-center gap-8'>
              <button className='mt-14 border-2 px-6 py-4 rounded-lg text-white-light border-primary-light dark:border-primary-dark font-semibold dark:text-white-dark bg-primary-light dark:bg-primary-dark'>
                Get Started
              </button>
              <button className='mt-14 border-2 px-6 py-4 bg-[#030C07] rounded-lg flex text-white-light font-semibold  border-primary-light dark:border-primary-dark'>
                Learn More
              </button>
            </div>
          </div>

          <img
            src={mode === "light" ? "LT1.svg" : "DT1.svg"}
            alt='Image'
            className='lg:w-2/5 2xl:w-1/2 h-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
