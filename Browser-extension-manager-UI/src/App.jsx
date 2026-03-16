import ExtensionsFilters from "./Components/ExtensionsFilter";
import Header from "./Components/Header";
import ExtensionCard from "./UI/ExtensionCard";

const App = () => {
  return (
    <div className="section-container">
      <Header></Header>
      <ExtensionsFilters></ExtensionsFilters>
      <div className="grid grid-cols-3 gap-4 mt-10">
      <ExtensionCard></ExtensionCard>
      <ExtensionCard></ExtensionCard>
      <ExtensionCard></ExtensionCard>
      </div>
      
      
    </div>
  );
};

export default App;
