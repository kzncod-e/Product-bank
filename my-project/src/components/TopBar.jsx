import notif from "../img/Notification.png";
import bottom from "../img/bottom.png";
export default function TopBar() {
  return (
    <>
      <section className=" flex w-full   justify-between pr-3   bg-[#fff] border-b-[#C1C1C1]  border-b-2 h-fit  px-8 py-5">
        <div id="profile">
          <h1 className="lg:text-5xl text-xl  font-normal text-[#4F5051]">
            Product
          </h1>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-3 border-x-[#C1C1C1] border-0 md:border-x-[1px] px-2 items-center">
            <img src={notif} className="h-7" alt="" />
            <img src={bottom} className="h-[7px]" alt="" />
          </div>
          <div className="flex gap-3  items-center border-0 md:border-r-[1px] pr-2 border-r-[#C1C1C1]">
            <h4 className="text-[#646567] text-base lg:text-xl">
              YOHANNES AFFANDY
            </h4>
            <img src={bottom} className="h-[7px]" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
