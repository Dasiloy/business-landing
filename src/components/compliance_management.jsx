/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */
import Text from "../atoms/text";

const ComplianceManagement = ({ mode }) => {
  return (
    <div className='bg-white-light dark:bg-white-dark py-40 xl:py-44'>
      <div className='container'>
        <div className='flex flex-col gap-[70px] lg:gap-[150px] lg:flex-row lg:items-center'>
          <img
            src={mode === "light" ? "LT3.svg" : "DT3.svg"}
            alt='Image'
            className='lg:w-2/5 2xl:w-full h-auto'
          />

          <div className=''>
            <Text
              variant='h3'
              Component='h3'
              className='font-extrabold text-mainText-light dark:text-mainText-dark'>
              Efficiently Manage all Aspects of your Compliance Management in
              one place!
            </Text>
            <Text
              variant='p'
              className='text-Gray_100-light dark:text-Gray_100-dark mt-6'>
              Our cutting-edge compliance management software removes the need
              for spreadsheets and calendar reminders, the fear of something
              being missed and a negative audit finding. We provide a simple to
              use platform and will even load your initial data for you. 
            </Text>
            <Text
              variant='p'
              className='text-Gray_100-light dark:text-Gray_100-dark mt-4'>
              If we do not have a compliance type you need we will add it to the
              system quickly for you.
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

export default ComplianceManagement;
