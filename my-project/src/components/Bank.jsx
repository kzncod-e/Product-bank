import bank from "../data/bank";
import rate from "../img/rate.png";
import shield from "../img/shield.png";
import time from "../img/time.png";
import timeRate from "../img/timerate.png";
import dolar from "../img/dolar.png";
import user from "../img/user1.png";

export default function Bank() {
  return (
    <>
      <section className="my-5">
        {bank.map((el, index) => (
          <>
            <div
              key={index}
              className="flex my-4 bg-[#fff]  text-center py-5  w-full rounded-[5px] shadow-custom flex-col">
              <div className="flex flex-col w-full justify-center items-center">
                <div className="flex  w-full ">
                  <div className="flex mx-7 flex-wrap justify-center  gap-16  ">
                    <div className="flex  flex-col justify-center  items-center">
                      {/* bank content */}
                      <div className="w-full flex justify-center  mb-4 ml-6">
                        <img src={el?.imgUrl} className="h-28" alt="qoi" />
                      </div>
                      <div className="flex gap-5">
                        <div className="flex-col border-r-[1px] pr-5 border-black flex gap-3 ">
                          <h4 className="font-medium text-[#707a83] text-base">
                            Rating :
                          </h4>
                          <img src={el.Stars} className="w-44" alt="" />
                          <p className="font-medium text-[#707a83] text-base">
                            {el.review} Reviews
                          </p>
                        </div>
                        <div className="flex-col  border-black flex gap-3 ">
                          <h4 className="font-medium text-[#707a83] text-base">
                            User :
                          </h4>
                          <div>
                            <span>{el.users}</span>
                          </div>
                          <p className="font-medium text-[#707a83] text-base">
                            Users yearly
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end bank contet */}
                    {/* bank rate */}
                    <div className="flex  gap-6 justify-center flex-col ">
                      <div>
                        {/* Header */}
                        <h1 className="flex justify-center lg:justify-start w-full gap-1">
                          <span className="text-[#4A5055] text-2xl font-semibold ">
                            {el.BankName}
                          </span>
                          <span className="text-[#1CABE6] text-2xl font-semibold">
                            {el.title}
                          </span>
                        </h1>
                      </div>
                      <div className="flex flex-wrap       gap-8  items-end">
                        <div className="flex gap-5 flex-col">
                          <div className="flex items-center gap-3">
                            <img src={rate} alt="" />
                            <p className=" text-[#707a83] flex gap-2 text-base">
                              {" "}
                              Fix Rate (Year):<span> {el.fixRate}</span>
                            </p>
                          </div>
                          <div className="flex  items-center gap-3">
                            <img src={time} alt="" />
                            <p className=" text-[#707a83] flex gap-2 text-base">
                              {" "}
                              Max Tenor:<span> {el.maxTenor}</span>
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <img src={timeRate} alt="" />
                            <p className=" text-[#707a83] flex gap-2 text-base">
                              {" "}
                              Loan to Value:<span> {el.loan}</span>
                            </p>
                          </div>
                        </div>
                        {/* col 2 */}
                        <div className="flex gap-5 flex-col">
                          <div className="flex items-center gap-3">
                            <img src={shield} alt="" />
                            <p className=" text-[#707a83] flex gap-2 text-base">
                              Jaminan:
                              <span>
                                {el.jaminan.map((el, index) => (
                                  <>
                                    <span key={index}>{el}</span>
                                  </>
                                ))}
                              </span>
                            </p>
                          </div>
                          <div className="flex  items-center gap-3">
                            <img src={user} alt="" />
                            <p className=" text-[#707a83] flex gap-2 text-base">
                              {" "}
                              Target:
                              <span className="flex gap-1">
                                {el.target.map((el) => (
                                  <>
                                    <span>{el}</span>
                                  </>
                                ))}
                              </span>
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <img src={dolar} alt="" />
                            <p className=" text-[#707a83] flex gap-2 text-base">
                              {" "}
                              Komisi:<span> {el.komisi}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <button className="text-[#37b5e7] border-[1px] border-[#C1C1C1] rounded-lg shadow-custom  px-5 py-3 font-semibold text-xl">
                        Details
                      </button>
                    </div>
                    {/* details button */}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
}
