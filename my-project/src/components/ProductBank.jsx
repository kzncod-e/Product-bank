import home from "../img/Home Page.png";
import account from "../img/Account.png";
import card from "../img/Magnetic Card.png";
import organization from "../img/Organization.png";
import piggybank from "../img/Money Box.png";
const data = [
  {
    imgUrl: home,
    title: "KPR dan Multiguna",
  },
  {
    imgUrl: account,
    title: "Refinancing",
  },
  {
    imgUrl: card,
    title: "Kredit Modal Usaha dan Investasi",
  },
  {
    imgUrl: piggybank,
    title: "Deposito",
  },
  {
    imgUrl: organization,
    title: "Take Over dan Bridging Loan",
  },
];
export default function ProductBank() {
  return (
    <>
      <section className="w-full my-4">
        <div className="flex gap-8  justify-between items-center">
          {data.map((el, index) => (
            <>
              <div
                key={index}
                className="flex items-center  w-52 shadow-lg h-36 bg-[#fff] text-center border-[#C1C1C1] border-[1px] flex-col py-6  rounded-[5px] px-4">
                <img src={el.imgUrl} className="h-14 w-14" alt="" />
                <span className="text-base font-medium text-[#999999]">
                  {el.title}
                </span>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
