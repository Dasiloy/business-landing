/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */
import Text from "../atoms/text";
import { Facebook, LinkedIn, Youtube } from "../atoms/socials";

const Footer = ({ mode }) => {
  return (
    <div className='bg-bckg-light dark:bg-bckg-dark py-24 pb-[70px]'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-[40%_60%]'>
          {/** LEFT */}
          <div>
            {/** LOGO HERE */}
            <div className='flex flex-row items-center gap-3'>
              <img
                src={mode === "light" ? "/logo-dark.svg" : "/logo.svg"}
                alt='Logo'
                className='w-[140px] h-[54px] md:w-[200px] object-contain'
              />
            </div>
            {/** LOCATION HERE */}
            <div className='mt-[30px] flex flex-row gap-3'>
              <img
                src={mode === "light" ? "/location.svg" : "/location-dark.svg"}
                alt='Address'
                className='w-8 h-8'
              />
              <div className='max-w-[180px]'>
                <Text
                  variant='p'
                  className='mt-1 font-normal text-Gray_100-light dark:text-Gray_100-dark'>
                  401 Warrenheip Street Buninyong Victoria 3357 Australia
                </Text>

                {/** SOCIALS */}
                <ul className='flex flex-row gap-6 mt-8'>
                  <li>
                    <a href='#'>
                      <Facebook />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <LinkedIn />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <Youtube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/** RIGHT */}
          <div className='grid grid-cols-1 mt-20 lg:mt-0 md:grid-cols-[auto_auto_auto] justify-between gap-10 md:gap-0'>
            {/** PLANS */}
            <div>
              <Text
                variant='p'
                className='mb-5 font-black text-mainText-light dark:text-mainText-dark '>
                Plans
              </Text>
              <ul className='grid grid-cols-1 gap-5'>
                <li>
                  <a
                    href='#'
                    className='text-base font-normal text-Gray_100-light dark:text-Gray_100-dark'>
                    Free
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-base font-normal text-Gray_100-light dark:text-Gray_100-dark'>
                    Professional
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-base font-normal text-Gray_100-light dark:text-Gray_100-dark '>
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>

            {/** LINKs */}
            <div>
              <Text
                variant='p'
                className='mb-5 font-black text-mainText-light dark:text-mainText-dark '>
                Links
              </Text>
              <ul className='grid grid-cols-1 gap-5'>
                <li>
                  <a
                    href='#'
                    className='text-base font-normal text-Gray_100-light dark:text-Gray_100-dark'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-base font-normal text-Gray_100-light dark:text-Gray_100-dark'>
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-base font-normal text-Gray_100-light dark:text-Gray_100-dark '>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-base font-normal text-Gray_100-light dark:text-Gray_100-dark '>
                    User Terms
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-base font-normal text-Gray_100-light dark:text-Gray_100-dark '>
                    Warranty & Returns Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-base font-normal text-Gray_100-light dark:text-Gray_100-dark '>
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            {/** HELP */}
            <div>
              <Text
                variant='p'
                className='mb-5 font-black text-mainText-light dark:text-mainText-dark '>
                Help
              </Text>
              <ul className='grid grid-cols-1 gap-5'>
                <li>
                  <a
                    href='#'
                    className='text-base font-normal text-Gray_100-light dark:text-Gray_100-dark'>
                    sales@ourcompliance.com.au
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-base font-normal text-Gray_100-light dark:text-Gray_100-dark'>
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-base font-normal text-Gray_100-light dark:text-Gray_100-dark '>
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/** FOOTER CREDITS */}
        <div className='mt-[91px] pt-10 border-t border-Gray_500-light gap-10 md:gap-0 flex flex-col md:flex-row items-center md:justify-between dark:border-Gray_500-dark'>
          <Text
            variant='p'
            className='font-normal text-Gray_100-light dark:text-Gray_100-dark '>
            © 2024 oneCompliance | All Rights Reserved
          </Text>

          <ul className='flex flex-row items-center w-full p-0 gap-11 md:w-auto'>
            <li>
              <a
                href='#'
                className='text-base font-normal text-primary-light dark:text-primary-dark '>
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-base font-normal text-primary-light dark:text-primary-dark '>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
