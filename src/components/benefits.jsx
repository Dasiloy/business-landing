/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import Card from "../atoms/card";
import Text from "../atoms/text";

/* eslint-disable react/prop-types */

const Benefits = () => {
  return (
    <div className='bg-bckg-light dark:bg-bckg-dark py-24'>
      <div className='container mx-auto'>
        <Text
          Component='h2'
          variant='h2'
          className='font-black text-center text-mainText-light dark:text-mainText-dark'>
          Benefits of ourCompliance
        </Text>
        <Text
          Component='p'
          variant='p'
          className='mt-6 font-normal text-center text-Gray_100-light dark:text-Gray_100-dark'>
          Discover the advantages of{" "}
          <span className='font-bold'>ourCompliance,</span> designed to simplify
          and enhance your compliance management. Our innovative platform offers
          a comprehensive suite of features tailored to meet the unique needs of
          businesses across various industries. With ourCompliance, you can
          streamline your compliance processes, ensure data security, and
          maintain peace of mind, knowing that your workforce is fully compliant
          and up-to-date.
        </Text>
        <Text
          Component='p'
          variant='p'
          className='mt-4 font-bold text-center text-Gray_100-light dark:text-Gray_100-dark'>
          Here's how ourCompliance can transform your compliance management:
        </Text>

        {/** CARDS */}
        <div className='gap-6 mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-20 xl:mb-28'>
          {benefits.map((b) => (
            <Card
              key={b.title}
              title={b.title}
              summary={b.summary}
              image_url={b.image_url}
            />
          ))}
        </div>

        <div className='flex w-full mb-16'>
          <button className='mt-14 border-2 px-6 py-4 rounded-lg text-white-light border-primary-light dark:border-primary-dark font-semibold dark:text-white-dark bg-primary-light dark:bg-primary-dark mx-auto'>
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

const benefits = [
  {
    image_url: "/benefits/benefit1.png",
    title: "No Lock-In Contract",
    summary:
      "Enjoy flexibility without long-term commitments, allowing you to adapt as your business needs change.",
  },
  // fill up to 12
  {
    image_url: "/benefits/benefit2.png",
    title: "User-Friendly Interface",
    summary:
      "Our intuitive platform is easy to navigate, ensuring a seamless user experience for all users.",
  },
  {
    image_url: "/benefits/benefit3.png",
    title: "Automated Compliance Checks",
    summary:
      "Automate compliance checks to ensure your workforce is up-to-date with the latest regulations.",
  },
  {
    image_url: "/benefits/benefit4.png",
    title: "Customizable Reporting",
    summary:
      "Generate custom reports to track compliance progress and identify areas for improvement.",
  },
  {
    image_url: "/benefits/benefit5.png",
    title: "24/7 Customer Support",
    summary:
      "Our dedicated support team is available around the clock to assist with any queries or issues.",
  },
  {
    image_url: "/benefits/benefit6.png",
    title: "Secure Data Storage",
    summary:
      "Protect sensitive data with secure cloud storage, ensuring compliance with data protection regulations.",
  },
  {
    image_url: "/benefits/benefit7.png",
    title: "Scalable Solution",
    summary:
      "Customize the platform to reflect your brand identity, enhancing your company's professional image.",
  },
  {
    image_url: "/benefits/benefit8.png",
    title: "Third-Party Integrations",
    summary:
      "Request new integrations to fit seamlessly into your existing workflow, improving efficiency and connectivity.",
  },
  {
    image_url: "/benefits/benefit9.png",
    title: "CSV Uploads",
    summary:
      "Let our team build your system by uploading your current data, ensuring a smooth transition and minimal disruption.",
  },
  {
    image_url: "/benefits/benefit10.png",
    title: "New Compliance Types",
    summary:
      "Request additional compliance checks to meet your specific needs, keeping your business up-to-date with industry standards.",
  },
  {
    image_url: "/benefits/benefit11.png",
    title: "Out-of-the-Box Audit Reports",
    summary:
      "Generate comprehensive reports effortlessly, providing valuable insights and documentation for audits.",
  },
  {
    image_url: "/benefits/benefit12.png",
    title: "Simplified Compliance Management",
    summary:
      "Oversee compliance with automated renewals, ensuring continuous peace of mind.",
  },
];
