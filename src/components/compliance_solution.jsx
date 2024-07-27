/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */
import Text from "../atoms/text";

const Compliancesolution = ({ mode }) => {
  return (
    <div className='bg-white-light dark:bg-white-dark py-44 xl:py-52'>
      <div className='container'>
        <div className='flex flex-col gap-[70px] lg:gap-[150px] lg:flex-row lg:items-center'>
          <img
            src={mode === "light" ? "LT5.svg" : "DT5.svg"}
            alt='Image'
            className='lg:w-2/5 2xl:w-full h-auto'
          />

          <div className=''>
            <Text
              variant='h3'
              Component='h3'
              className='font-extrabold text-mainText-light dark:text-mainText-dark'>
              Customizable Compliance Solutions for Every Industry
            </Text>
            <Text
              variant='p'
              className='text-Gray_100-light dark:text-Gray_100-dark mt-6'>
              We understand that every industry and employer has unique
              compliance requirements. That's why we offer the flexibility to
              add new compliance checks upon request. For our enterprise
              clients, we provide seamless integration with any compatible
              third-party applications to streamline processes and enhance
              efficiency in your business. Whether you need specialized
              background checks or advanced compliance tracking, our solution is
              tailored to meet your specific needs.
            </Text>

            <button className='mt-14 border-2 px-6 py-4 rounded-lg text-white-light border-primary-light dark:border-primary-dark font-semibold dark:text-white-dark bg-primary-light dark:bg-primary-dark'>
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliancesolution;
