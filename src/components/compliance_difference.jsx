/* eslint-disable no-irregular-whitespace */
import Text from "../atoms/text";

/* eslint-disable react/prop-types */
const ComplianceDifference = ({ mode, openModal }) => {
  return (
    <div className='py-40 bg-secondary-light dark:bg-secondary-dark xl:py-52'>
      <div className='container'>
        <div className='flex flex-col-reverse gap-[70px] lg:gap-[80px] lg:flex-row lg:items-center'>
          <div>
            <Text
              variant='h3'
              Component='h3'
              className='font-extrabold text-primary-light dark:text-primary-dark'>
              The ourCompliance Difference
            </Text>
            <Text
              variant='p'
              className='mt-6 text-mainText-light dark:text-mainText-dark'>
              We provide a simple way to manage your compliance requirements
              online without needing to maintain and monitor spreadsheets. Our
              system allows management of individuals and assets and can be
              setup to work with both position and employee hierarchy. Receive
              notifications with plenty of time for you to act when needing a
              manual process to be completed.
            </Text>
            <Text
              variant='p'
              className='mt-4 text-mainText-light dark:text-mainText-dark'>
              Provide audit reports to responsible bodies quickly and
              efficiently.
            </Text>

            <button
              onClick={openModal}
              className='px-6 py-4 font-semibold border-2 rounded-lg mt-14 text-white-light border-primary-light dark:border-primary-dark dark:text-white-dark bg-primary-light dark:bg-primary-dark hover:bg-secondary-dark'>
              Request Demo
            </button>
          </div>
          <img
            src={mode === "light" ? "LT4.svg" : "DT4.svg"}
            alt='Image'
            className='h-auto lg:w-2/5 2xl:w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default ComplianceDifference;
