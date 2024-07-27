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
                src={mode === "light" ? "/logo.svg" : "/logo-dark.svg"}
                alt='Logo'
                className='h-[54px] w-[54px] object-contain'
              />
              <Text
                variant='h4'
                className='text-mainText-light dark:text-mainText-dark'>
                ourCompliance
              </Text>
            </div>
            {/** LOCATION HERE */}
            <div className='mt-[30px] flex flex-row gap-3'>
              <img
                src={mode === "light" ? "/location.svg" : "/location-dark.svg"}
                alt='Address'
                className='h-8 w-8'
              />
              <div className='max-w-[180px]'>
                <Text
                  variant='p'
                  className='font-normal text-Gray_100-light mt-1 dark:text-Gray_100-dark'>
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
                className='font-black text-mainText-light mb-5 dark:text-mainText-dark '>
                Plans
              </Text>
              <ul className='grid grid-cols-1 gap-5'>
                <li>
                  <a
                    href='#'
                    className='font-normal text-Gray_100-light dark:text-Gray_100-dark text-base'>
                    Free
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='font-normal text-Gray_100-light dark:text-Gray_100-dark text-base'>
                    Professional
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='font-normal text-Gray_100-light dark:text-Gray_100-dark text-base '>
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>

            {/** LINKs */}
            <div>
              <Text
                variant='p'
                className='font-black text-mainText-light mb-5 dark:text-mainText-dark '>
                Links
              </Text>
              <ul className='grid grid-cols-1 gap-5'>
                <li>
                  <a
                    href='#'
                    className='font-normal text-Gray_100-light dark:text-Gray_100-dark text-base'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='font-normal text-Gray_100-light dark:text-Gray_100-dark text-base'>
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='font-normal text-Gray_100-light dark:text-Gray_100-dark text-base '>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='font-normal text-Gray_100-light dark:text-Gray_100-dark text-base '>
                    User Terms
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='font-normal text-Gray_100-light dark:text-Gray_100-dark text-base '>
                    Warranty & Returns Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='font-normal text-Gray_100-light dark:text-Gray_100-dark text-base '>
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            {/** HELP */}
            <div>
              <Text
                variant='p'
                className='font-black text-mainText-light mb-5 dark:text-mainText-dark '>
                Help
              </Text>
              <ul className='grid grid-cols-1 gap-5'>
                <li>
                  <a
                    href='#'
                    className='font-normal text-Gray_100-light dark:text-Gray_100-dark text-base'>
                    sales@ourcompliance.com.au
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='font-normal text-Gray_100-light dark:text-Gray_100-dark text-base'>
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='font-normal text-Gray_100-light dark:text-Gray_100-dark text-base '>
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
            className='font-normal text-Gray_100-light  dark:text-Gray_100-dark '>
            © 2024 oneCompliance | All Rights Reserved
          </Text>

          <ul className='flex flex-row items-center gap-11 p-0 w-full md:w-auto'>
            <li>
              <a
                href='#'
                className='font-normal text-primary-light dark:text-primary-dark text-base '>
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href='#'
                className='font-normal text-primary-light dark:text-primary-dark text-base '>
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
