/* eslint-disable react/prop-types */
import { useEffect } from "react";
import ReactModal from "react-modal";
import Text from "./text";
import { IoMdCloseCircleOutline } from "react-icons/io";

const AppModal = ({ modalIsOpen, closeModal }) => {
  useEffect(() => {
    if (modalIsOpen) {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      script.async = true;
      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "47014589",
            formId: "6b9aefbb-ddc0-4c29-a80e-18e3f70f1110",
            target: ".hubspotForm",
          });
        }
      };
      document.body.appendChild(script);
    }
  }, [modalIsOpen]);

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick
      className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black/50'>
      <div className='relative w-full px-8 py-6 bg-white-light md:max-w-screen-sm xl:max-w-screen-md rounded-xl'>
        <div>
          <h2 className='text-center pt-4 text-primary-light text-[32px] leading-[48px] font-extrabold'>
            Request a Demo
          </h2>

          <Text className='px-4 mt-4 mb-10 text-center text-mainText-light'>
            Fill out the form below to schedule a personalized demo of
            ourCompliance and see how it can transform your compliance
            management.
          </Text>

          <button className='absolute top-10 right-10' onClick={closeModal}>
            <IoMdCloseCircleOutline color='#000' size={24} />
          </button>

          <div className='hubspotForm'></div>
        </div>
      </div>
    </ReactModal>
  );
};

export default AppModal;
