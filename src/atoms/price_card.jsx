/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */
import Text from "./text";
import { FaCheck } from "react-icons/fa";

const PlanCard = ({ plan }) => {
  return (
    <div className='pt-12 px-6 pb-10 rounded-[32px] hover:border-4 shadow-md hover:border-primary-light hover:dark:border-primary-dark bg-bckg-light dark:bg-bckg-dark'>
      {/** PLAN NAME */}
      <div className='flex items-center justify-center'>
        <div className='p-[10px] border-[1.5px] bg-[#6fda441a]  border-primary-light dark:border-primary-dark rounded-lg'>
          <Text className='font-bold text-primary-light dark:text-primary-dark'>
            {plan.name}
          </Text>
        </div>
      </div>

      {/** SUMMARY */}
      <Text
        Component='p'
        variant=''
        className='mt-8 text-[15px] font-normal text-Gray_100-light dark:text-Gray_100-dark'>
        {plan.summary}
      </Text>

      {/** PRICE */}
      <Text
        Component='h1'
        variant='h1'
        className='mt-6 font-semibold text-primary-light dark:text-primary-dark'>
        {plan.price}
      </Text>
      <Text
        Component='p'
        variant='p'
        className='font-bold text-Gray_100-light dark:text-Gray_100-dark'>
        / month
      </Text>

      {/** ACTION BUTTON */}
      {plan.name !== "Professional Plan" && (
        <button className='flex items-center justify-center w-full px-6 py-4 mt-6 font-semibold border-2 rounded-lg text-white-light border-primary-light dark:border-primary-dark dark:text-white-dark bg-primary-light dark:bg-primary-dark hover:bg-secondary-dark hover:dark:bg-secondary-dark'>
          Change Plan
        </button>
      )}

      {/** benefits */}
      <div className='grid grid-cols-1 gap-4 mt-7 xl:mt-12'>
        {plan?.permissions?.map((b) => {
          return (
            <div key={b} className='flex flex-row items-center gap-3'>
              <div
                className={`h-6 w-6 rounded-full flex justify-center items-center bg-success-light dark:bg-success-dark`}>
                <FaCheck
                  size={16}
                  className='text-white-light dark:text-white-dark'
                />
              </div>
              <Text
                variant='p'
                className={`${"font-medium text-mainText-light dark:text-mainText-dark"}`}>
                {b}
              </Text>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlanCard;
