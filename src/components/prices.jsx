/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/prop-types */
import Text from "../atoms/text";
import PlanCard from "../atoms/price_card";

const Prices = () => {
  return (
    <div className='bg-white-light dark:bg-white-dark py-24 pb-[183px]'>
      <div className='container'>
        <Text
          Component='h2'
          variant='h2'
          className='font-black text-center text-mainText-light dark:text-mainText-dark'>
          Choose Your Plan
        </Text>
        <Text
          Component='p'
          variant='p'
          className='mt-6 font-normal text-center text-Gray_100-light dark:text-Gray_100-dark'>
          Select the subscription package that fits your business needs. Our
          flexible pricing options provide maximum value, offering comprehensive
          features and support to simplify compliance management.
        </Text>

        {/** PRICES CONTAINER */}
        <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7'>
          {prices.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;

const prices = [
  {
    name: "Basic Plan",
    price: "$29",
    summary:
      "Essential tools for compliance management, including background checks, reminders, and basic reporting. Ideal for small businesses.",
    permissions: [
      "Employee Background Checks",
      "Compliance Reminders",
      "Basic Reporting",
      "Email Support",
    ],
  },
  {
    name: "Professional Plan",
    price: "$59",
    summary:
      "Advanced features like asset management, detailed reporting, and automated renewals. Perfect for growing businesses.",
    permissions: [
      "Employee Background Checks",
      "Compliance Reminders",
      "Basic Reporting",
      "Email Support",
      "Asset Management",
      "Advanced Reporting",
      "Automated Renewal Triggers",
      "Priority Email Support",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    summary:
      "Comprehensive package with dedicated support, custom integrations, and API access. Designed for large organizations. Contact us for pricing.",
    permissions: [
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
    ],
  },
];
