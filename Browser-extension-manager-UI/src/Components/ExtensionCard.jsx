import React from "react";
import Button from "../UI/Button";
import ToggleButton from "./ToggleButton";

const ExtensionCard = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 p-4 rounded-2xl bg-gray-600">
        <div className="flex gap-5">
          <img src="../../public/extensionCard/logo-devlens.svg"></img>
          <div className="flex flex-col">
            <p className=" text-white text-xl">Lorem Ipsum</p>
            <span className="text-md text-white">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum
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
          <ToggleButton></ToggleButton>
        </div>
      </div>
    </div>
  );
};

export default ExtensionCard;
