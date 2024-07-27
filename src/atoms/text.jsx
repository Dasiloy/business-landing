/* eslint-disable react/prop-types */
import classNames from "classnames";

const Text = ({ Component = "p", variant = "p", children, className }) => {
  return (
    <Component
      className={classNames(
        "leading-[150%]",
        {
          "text-base": variant === "p",
          "text-[34px] lg:text-[55px]": variant === "h0",
          "text-[30px] lg:text-[48px]": variant === "h1",
          "text-[22px] lg:text-[35px]": variant === "h2",
          "text-[20px] lg:text-[32px]": variant === "h3",
          "text-[22px] lg:text-[24px]": variant === "h4",
          "text-[20px] lg:text-[20px]": variant === "h5",
          "text-[18px]": variant === "h6",
        },
        className
      )}>
      {children}
    </Component>
  );
};

export default Text;
