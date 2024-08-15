import React from "react";
import Benefits from "./components/benefits";
import Clients from "./components/clients";
import Compliance from "./components/compliance";
import ComplianceDifference from "./components/compliance_difference";
import ComplianceManagement from "./components/compliance_management";
import Compliancesolution from "./components/compliance_solution";
import Footer from "./components/footer";
import Header from "./components/header";
import Prices from "./components/prices";
import { useColorScheme } from "./hooks/useColorScheme";
import AppModal from "./atoms/app-modal";

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const { themeMode, themeToggler } = useColorScheme();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div className='min-h-screen'>
      {/** HEADER */}
      <Header
        mode={themeMode}
        openModal={openModal}
        themeToggler={themeToggler}
      />
      {/** CLIENTS*/}
      <Clients mode={themeMode} />

      {/**COMPLIANCE */}
      <Compliance mode={themeMode} openModal={openModal} />

      {/**COMPLIANCE_MANAGEMENT */}
      <ComplianceManagement mode={themeMode} openModal={openModal} />

      {/** COMPLIANCE_DIFFERENCE */}
      <ComplianceDifference mode={themeMode} openModal={openModal} />

      {/** COMPLIANCE_SOLUTION */}
      <Compliancesolution mode={themeMode} openModal={openModal} />

      {/** BENEFITS */}
      <Benefits mode={themeMode} openModal={openModal} />

      {/**PRICES */}
      <Prices mode={themeMode} openModal={openModal} />

      {/** FOOTER */}
      <Footer mode={themeMode} />

      {/** MODAL */}
      <AppModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
