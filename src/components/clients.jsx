/* eslint-disable react/prop-types */
const Clients = ({ mode }) => {
  return (
    <div className='pt-[72px] pb-[83px] flex flex-col items-center justify-center shadow-lg dark:shadow-dark bg-white-light dark:bg-white-dark'>
      <p className='text-base text-mainText-light dark:text-mainText-dark font-thin '>
        Smart Companies{" "}
        <span className='font-semibold'>Love oneCompliance</span>
      </p>
      <div className='mt-[33px] flex flex-row gap-6 flex-wrap items-center justify-center'>
        {clients.map((client, index) => (
          <div
            key={index}
            className='flex items-center justify-center w-2/5 md:w-1/3 lg:w-auto'>
            <img
              width={client.width}
              height={client.height}
              alt={`client-${index}`}
              src={mode === "light" ? client.light : client.dark}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;

const clients = [
  {
    width: 190,
    height: 48,
    light: "/client1.png",
    dark: "/client1-dark.png",
  },
  {
    width: 147,
    height: 48,
    light: "/client2.png",
    dark: "/client2-dark.png",
  },
  {
    width: 198,
    height: 48,
    light: "/client3.png",
    dark: "/client3-dark.png",
  },
  {
    width: 181,
    height: 48,
    light: "/client4.png",
    dark: "/client4-dark.png",
  },
  {
    width: 201,
    height: 48,
    light: "/client5.png",
    dark: "/client5-dark.png",
  },
  {
    width: 157,
    height: 48,
    light: "/client6.png",
    dark: "/client6-dark.png",
  },
];
