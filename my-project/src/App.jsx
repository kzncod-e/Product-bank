import MenuBar from "./components/Tabs";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import ProductBank from "./components/ProductBank";
import Toolbar from "./components/ToolBar";
import ProductCard from "./components/Bank";

function App() {
  return (
    <>
      <div className="flex overflow-x-hidden   bg-[#D9D9D9]">
        <SideBar />
        <div className="flex flex-col w-full  md:ml-52 ml-0">
          <TopBar />
          <MenuBar />
          <div className=" sm:mx-6 my-4">
            <ProductBank />
            <Toolbar />
            <div className="mx-2">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
