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

function App() {
  const { themeMode, themeToggler } = useColorScheme();
  return (
    <div className='min-h-screen'>
      {/** HEADER */}
      <Header mode={themeMode} themeToggler={themeToggler} />
      {/** CLIENTS*/}
      <Clients mode={themeMode} />

      {/**COMPLIANCE */}
      <Compliance mode={themeMode} />

      {/**COMPLIANCE_MANAGEMENT */}
      <ComplianceManagement mode={themeMode} />

      {/** COMPLIANCE_DIFFERENCE */}
      <ComplianceDifference mode={themeMode} />

      {/** COMPLIANCE_SOLUTION */}
      <Compliancesolution mode={themeMode} />

      {/** BENEFITS */}
      <Benefits mode={themeMode} />

      {/**PRICES */}
      <Prices mode={themeMode} />

      {/** FOOTER */}
      <Footer mode={themeMode} />
    </div>
  );
}

export default App;
