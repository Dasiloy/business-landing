/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */
import Text from "./text";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const PlanCard = ({ plan }) => {
  return (
    <div className='pt-12 px-6 pb-10 rounded-[32px] border-4 border-primary-light dark:border-primary-dark bg-bckg-light dark:bg-bckg-dark'>
      {/** PLAN NAME */}
      <div className='flex'>
        <div className='p-[10px] border-[1.5px] bg-[#6fda441a]  border-primary-light dark:border-primary-dark rounded-lg'>
          <Text className='font-bold text-primary-light dark:text-primary-dark'>
            {plan.name}
          </Text>
        </div>
      </div>

      {/** SUMMARY */}
      <Text
        Component='p'
        variant='p'
        className='mt-3 font-normal text-Gray_100-light dark:text-Gray_100-dark'>
        {plan.summary}
      </Text>

      {/** PRICE */}
      <Text
        Component='h1'
        variant='h1'
        className='mt-6 font-bold text-mainText-light dark:text-mainText-dark'>
        {plan.price}
      </Text>
      <Text
        Component='p'
        variant='p'
        className='font-bold text-Gray_100-light dark:text-Gray_100-dark'>
        {plan.name === "Enterprise Plan" ? "Reach out for a quote" : "/ month"}
      </Text>

      {/** ACTION BUTTON */}
      <button className='mt-6 border-2 w-full flex items-center justify-center px-6 py-4 rounded-lg text-white-light border-primary-light dark:border-primary-dark font-semibold dark:text-white-dark bg-primary-light dark:bg-primary-dark'>
        Get Started
      </button>

      {/** benefits */}
      <div className='grid grid-cols-1 gap-4 mt-7'>
        {benefits.map((b) => {
          const isIncluded = plan?.permissions?.includes(b);
          return (
            <div key={b} className='flex flex-row items-center gap-3'>
              <div
                className={`h-6 w-6 rounded-full flex justify-center items-center ${
                  isIncluded
                    ? "bg-success-light dark:bg-success-dark"
                    : "bg-danger-light dark:bg-danger-dark"
                }`}>
                {isIncluded ? (
                  <FaCheck
                    size={16}
                    className='text-white-light dark:text-white-dark'
                  />
                ) : (
                  <IoClose
                    size={16}
                    className='text-white-light dark:text-white-dark'
                  />
                )}
              </div>
              <Text
                variant='p'
                className={`${
                  isIncluded
                    ? "font-bold text-mainText-light dark:text-mainText-dark"
                    : "font-normal text-Gray_100-light dark:text-Gray_100-dark"
                }`}>
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

const benefits = [
  "Employee Background Checks",
  "Compliance Reminders",
  "Basic Reporting",
  "Email Support",
  "Asset Management",
  "Advanced Reporting",
  "Automated Renewal Triggers",
  "Priority Email Support",
  "Dedicated Account Manager",
  "Custom Integrations",
  "API Access",
  "On-Demand Audit Reports",
  "Phone Support",
];
