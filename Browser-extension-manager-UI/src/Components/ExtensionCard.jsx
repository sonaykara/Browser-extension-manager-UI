import React from "react";
import Button from "../UI/Button";
import ToggleButton from "./ToggleButton";

const ExtensionCard = ({data , setExtensions , extensions }) => {
  return (
    <div className="flex flex-col bg-gray-600 rounded-2xl p-4 justify-between min-h-[160px] min-w-[160px]">
      <div className="flex flex-col pt-4 rounded-2xl bg-gray-600 gap-8">
        <div className="flex gap-5">
          <img className="w-[50px] h-[50px]" src={data.logo}></img>
          <div className="flex flex-col">
            <p className=" text-white text-xl">{data.name}</p>
            <span className="text-md text-white">
             {data.description}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button
            config={{
              name: "Remove",
              className:
                "bg-gray-500 text-white rounded-2xl px-4 py-1 hover:bg-gray-600 transition",
            }}
          ></Button>
          <ToggleButton data = {data} setExtensions = {setExtensions} extensions = {extensions}></ToggleButton>
        </div>
      </div>
    </div>
  );
};

export default ExtensionCard;
