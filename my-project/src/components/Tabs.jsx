import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Bank");

  return (
    <div className="flex bg-[#fff] justify-center shadow-lg py-3 items-center border-b-[1px] border-b-[#C1C1C1]">
      <button0
        className={`px-4 py-2 text-3xl font-bold   ${
          activeTab === "Bank"
            ? "text-[#17A9E2] border-b-2 border-[#17A9E2]"
            : ""
        }`}
        onClick={() => setActiveTab("Bank")}>
        Bank
      </button0>
      <button
        className={`px-4 py-2 text-3xl font-bold  ${
          activeTab === "Developer"
            ? "text-[#17A9E2]  border-b-2 border-[#17A9E2]"
            : ""
        }`}
        onClick={() => setActiveTab("Developer")}>
        Developer
      </button>
    </div>
  );
};

export default Tabs;
