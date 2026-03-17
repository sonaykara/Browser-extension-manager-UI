import ExtensionsFilters from "./Components/ExtensionsFilter";
import Header from "./Components/Header";
import ExtensionCard from "./Components/ExtensionCard";
import React, { useEffect, useState } from "react";

const App = () => {
  const [extensions, setExtensions] = useState([]);
  useEffect(() => {
    fetch("../src/data/extensionsMock.json")
      .then((res) => res.json())
      .then((data) => {
        setExtensions(data)
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="section-container">
      <Header></Header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {extensions.map((data) => {
          return <ExtensionCard data = {data} ></ExtensionCard>
        })}
      </div>
    </div>
  );
};

export default App;
