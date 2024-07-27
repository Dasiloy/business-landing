/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import React from "react";
import Text from "../atoms/text";

const Compliance = ({ mode }) => {
  const [index, setIndex] = React.useState(0);
  return (
    <div className='bg-bckg-light dark:bg-bckg-dark py-24 pb-32'>
      <div className='container mx-auto max-w-screen-xl'>
        <Text
          Component='h2'
          variant='h2'
          className='font-black text-center text-mainText-light dark:text-mainText-dark'>
          The Game-changing Solution for Compliance Management Software
        </Text>
        <Text
          Component='p'
          variant='p'
          className='mt-6 font-normal text-center text-Gray_100-light dark:text-Gray_100-dark'>
          Discover the game-changing solution for compliance management software
          with our innovative features designed to streamline your processes and
          ensure compliance across your organization.
        </Text>

        <div className='flex flex-row w-full mt-[90px]  overflow-auto flex-nowrap   xl:justify-between'>
          {tabs.map((t, i) => (
            <button
              className={`flex pb-2.5 items-center px-4 w-52 xl:w-1/5 xl:justify-center text-nowrap ${
                i === index
                  ? "text-primary-light dark:text-primary-dark font-bold border-b-4 border-primary-light dark:border-primary-dark"
                  : "text-Gray_100-light dark:text-Gray_100-dark border-b-2 border-Gray_500-light dark:border-Gray_500-dark"
              }`}
              onClick={() => setIndex(i)}
              key={t}>
              {t}
            </button>
          ))}
        </div>

        <div className='mt-12 bg-white-light dark:bg-white-dark px-10 py-12 lg:px-20 py-24 px-[70px]py-[80px] rounded-[32px] shadow-md'>
          <div className='flex flex-col-reverse gap-[70px] lg:flex-row lg:items-center'>
            <div>
              <Text
                variant='h3'
                Component='h3'
                className='font-extrabold text-mainText-light dark:text-mainText-dark'>
                Employee Compliance Management 
              </Text>
              <Text
                variant='p'
                className='text-Gray_100-light dark:text-Gray_100-dark mt-6'>
                Never miss a compliance requirement again with automatic
                reminders to HR and the employee when an item is due to renew -
                Police Checks, Visa Checks, RSA, IT certifications if it has an
                expiry / renewal date we can manage it.
              </Text>

              <button className='mt-14 border-2 px-6 py-4 rounded-lg text-primary-light font-semibold dark:text-primary-dark border-primary-light dark:border-primary-dark'>
                Learn More
              </button>
            </div>

            <img
              src={mode === "light" ? "LT2.svg" : "DT2.svg"}
              alt='Image'
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;

const tabs = [
  "Employee Management",
  "Asset Management",
  "Automatic Renewal",
  "Audit Reports",
  "3rd Party Integrations ",
];
