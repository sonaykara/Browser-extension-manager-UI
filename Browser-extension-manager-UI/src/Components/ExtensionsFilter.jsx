import Button from "../UI/Button";

const ExtensionsFilters = () => {
  return (
    <div className="bg-transparent mt-12 flex justify-between items-center">
      <div className="text-white text-3xl">Extension List</div>
      <div className="flex gap-3.5 ">
        <Button
          config={{
            name: "All",
            className:
              "bg-amber-600 text-white rounded-2xl w-full px-6 py-2 hover:bg-gray-600 transition",
          }}
        ></Button>

        <Button
          config={{
            name: "Active",
            className:
              "bg-gray-500 text-white rounded-2xl w-full px-6 py-2 hover:bg-gray-600 transition",
          }}
        ></Button>

        <Button
          config={{
            name: "Inactive",
            className:
              "bg-gray-500 text-white rounded-2xl w-full px-6 py-2 hover:bg-gray-600 transition",
          }}
        ></Button>
      </div>
    </div>
  );
};

export default ExtensionsFilters;
