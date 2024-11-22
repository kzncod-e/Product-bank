import { useState } from "react";
import home from "../img/blackHome.png";
import loan from "../img/image 8.png";
import contact from "../img/Contact.png";
import file from "../img/File.png";
import product from "../img/Shopping Bag.png";
import bank from "../img/Bank Building.png";
import scoring from "../img/Performance.png";
import vector from "../img/Vector (2).png";
import faq from "../img/Help.png";
import pipeline from "../img/Layers.png";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: home, label: "Dashboard", active: false },
    { icon: contact, label: "Contact", active: false },
    { icon: file, label: "Loan", active: false },
    { icon: product, label: "Product", active: false },
    { icon: "", label: "Bank Product", active: true },
    { icon: "", label: "Product" },
    { icon: "", label: "Category Product" },
    { icon: bank, label: "Bank", active: false },
    {
      icon: scoring,
      label: "Credit Scoring",
      active: false,
      hasDropdown: true,
    },
    { icon: faq, label: "FAQ'S", active: false },
    { icon: pipeline, label: "Pipeline", active: false },
    { icon: pipeline, label: "Pipeline Developer", active: false },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`md:hidden ${
          isOpen && "hidden"
        } fixed top-1 left-1 z-50 bg-[#C1C1C1] text-white p-1 rounded-md shadow-md`}
        onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:fixed md:inline-block md:w-fit`}>
        <div className="pb-6 flex justify-center">
          <img src={loan} alt="Logo" />
        </div>
        <nav>
          <ul className="flex flex-col gap-1 w-52 px-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <div
                  className={`flex items-center  px-3 py-2 rounded-[10px] gap-2 ${
                    item.active
                      ? "bg-[#17A9E2] text-white"
                      : "bg-white text-black"
                  }`}>
                  {item.icon ? (
                    <img src={item?.icon} className="h-7" />
                  ) : (
                    <>
                      {" "}
                      <p className="h-7 w-7"></p>
                    </>
                  )}

                  <span className="font-medium">{item.label}</span>
                  {item.hasDropdown && (
                    <img
                      src={vector}
                      className="h-2 absolute right-4"
                      alt="Dropdown"
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
}
