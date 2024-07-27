/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */
import Text from "./text";

const Card = ({ title, summary, image_url }) => {
  return (
    <div className='shadow-md px-6 pt-14 pb-[66px] bg-white-light dark:bg-white-dark rounded-2xl'>
      <img src={image_url} alt='' className='w-12 h-12 mb-5' />
      <Text
        Component='h2'
        variant='h6'
        className='font-bold text-mainText-light dark:text-mainText-dark'>
        {title}
      </Text>
      <Text
        Component='p'
        variant='p'
        className='mt-5 font-normal text-Gray_100-light dark:text-Gray_100-dark'>
        {summary}
      </Text>
    </div>
  );
};

export default Card;
