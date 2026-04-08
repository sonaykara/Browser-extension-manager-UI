import { useState } from "react";
import Button from "../UI/Button";

const ExtensionsFilters = ({ setFilterType }) => {
  const [activeBtn, setActiveBtn] = useState("all");
  const handleActiveBtn = (param) => {
    setActiveBtn(param);
  };
  return (
    <div className="bg-transparent mt-12 flex justify-between items-center">
      <div className="text-white text-3xl">Extension List</div>
      <div className="flex gap-3.5 ">
        <Button
          onClick={() => {
            setFilterType("all");
            handleActiveBtn("all");
          }}
          config={{
            name: "All",
            className: `text-white rounded-2xl w-full px-6 py-2 hover:bg-gray-600 transition ${activeBtn === "all" ? "bg-amber-600" : ""}`,
          }}
        ></Button>

        <Button
          onClick={() => {
            setFilterType("active");

            handleActiveBtn("active");
          }}
          config={{
            name: "Active",
            className: `text-white rounded-2xl w-full px-6 py-2 hover:bg-gray-600 transition ${activeBtn === "active" ? "bg-amber-600" : ""}`,
          }}
        ></Button>

        <Button
          onClick={() => {
            setFilterType("inactive");

            handleActiveBtn("inactive");
          }}
          config={{
            name: "Inactive",
            className: `text-white rounded-2xl w-full px-6 py-2 hover:bg-gray-600 transition ${activeBtn === "inactive" ? "bg-amber-600" : ""}`,
          }}
        ></Button>
      </div>
    </div>
  );
};

export default ExtensionsFilters;
