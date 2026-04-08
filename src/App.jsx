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

  const [filterType, setFilterType] = useState("all");
    const extensionList = extensions.filter((items) => {
      if (filterType === "all") {
        return extensions
      } else if (filterType === "active") {
        return items.isActive === true
      } else if (filterType === "inactive") {
        return items.isActive === false
      }
    })
  return (
    <div className="section-container">
      <Header></Header>
      <ExtensionsFilters  setFilterType = {setFilterType} setExtensions = {setExtensions}></ExtensionsFilters>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {extensionList.map((data) => {
          return <ExtensionCard data = {data} key={data.id}  setExtensions = {setExtensions} extensions = {extensions} ></ExtensionCard>
        })}
      </div>
    </div>
  );
};

export default App;
