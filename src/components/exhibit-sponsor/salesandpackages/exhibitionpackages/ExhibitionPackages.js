import React from "react";

const ExhibitionPackages = ({ arabic }) => {
  return (
    <div>
      <h2 data-aos="fade-up" className="text64 text-white text-center">
        Exhibition packages
      </h2>
      <div className="lg:mt-[7.29166666667vw] sm:mt-[90px] mt-[60px] flex flex-wrap items-start justify-center lg:gap-[6.14583333333vw] gap-[30px]">
        <table
          data-aos="fade-up"
          className="lg:w-[46.342%] sm:w-[67%] w-full border20  bg-[#FFFFFF03] overflow-hidden"
        >
          <thead
            className={`${
              arabic
                ? "lg:pr-[5.05208333333vw] lg:pl-[5.15625vw] sm:px-[70px] px-[30px]"
                : "lg:pl-[5.05208333333vw] lg:pr-[5.15625vw] sm:px-[70px] px-[30px]"
            } lg:py-[0.72916666666vw] py-[12px] bg-[#FFF] bg-opacity-[0.03] block lg:text28 mtext20 text-[#FFFFFF] f500 capitalize border border-white border-opacity-[0.03]`}
          >
            <tr className="flex lg:gap-x-[12.4479166667vw] gap-x-[60px] sm:gap-x-[125px] text-[#EFB51D]">
              <th className="lg:w-[5.20833333333vw] w-[72px] f500">Space</th>
              <th className="lg:w-[9.47916666667vw] w-[120px] f500">
                Cost /SQM2
              </th>
            </tr>
          </thead>
          <tbody
            className={`${
              arabic
                ? "lg:pr-[5.05208333333vw] lg:pl-[5.15625vw] sm:px-[70px] px-[30px]"
                : "lg:pl-[5.05208333333vw] lg:pr-[5.15625vw] sm:px-[70px] px-[30px]"
            } lg:pt-[1.14583333333vw] lg:pb-[1.5625vw] pt-[12px] pb-[18px] lg:text26 mtext18 text-[#FFFFFF] capitalize flex flex-col lg:gap-y-[1.77083333333vw] gap-y-[12px]`}
          >
            <tr className="flex lg:gap-x-[12.4479166667vw] gap-x-[60px] sm:gap-x-[125px] text-center ">
              <td className="lg:w-[5.20833333333vw] w-[72px]">Indoor</td>
              <td className="lg:w-[9.47916666667vw] w-[120px]">2,300 SAR</td>
            </tr>
            <tr className="flex lg:gap-x-[12.4479166667vw] gap-x-[60px] sm:gap-x-[125px] text-center ">
              <td className="lg:w-[5.20833333333vw] w-[72px]">Outdoor</td>
              <td className="lg:w-[9.47916666667vw] w-[120px]">1,700 SAR</td>
            </tr>
          </tbody>
        </table>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="lg:w-[39.5833333333vw] sm:w-[67%] w-full"
        >
          <table className="w-full border20  bg-[#FFFFFF03] overflow-hidden">
            <thead
              className={`  lg:px-[5.05208333333vw] sm:px-[40px] px-[30px] lg:py-[0.72916666666vw] py-[12px] bg-[#FFF] bg-opacity-[0.03] block lg:text28 mtext20 text-[#FFFFFF] f500 capitalize border border-opacity-[0.03] border-white`}
            >
              <tr className="flex lg:gap-x-[10.15625vw] gap-x-[45px] sm:gap-x-[90px] text-[#EFB51D]">
                <th className="lg:w-[9.63541666667vw] w-[133px] f500">
                  Shell Scheme
                </th>
                <th className="lg:w-[9.47916666667vw] w-[120px] f500">
                  Cost /SQM2
                </th>
              </tr>
            </thead>
            <tbody
              className={`  lg:px-[5.05208333333vw] sm:px-[40px] px-[30px] lg:pt-[1.14583333333vw] lg:pb-[1.5625vw] pt-[12px] pb-[18px] lg:text26 mtext18 text-[#FFFFFF] capitalize flex flex-col lg:gap-y-[1.77083333333vw] gap-y-[12px]`}
            >
              <tr className="flex lg:gap-x-[10.15625vw] gap-x-[45px] sm:gap-x-[90px] text-center ">
                <td className="lg:w-[9.63541666667vw] w-[133px]">
                  Indoor STAND
                </td>
                <td className="lg:w-[9.47916666667vw] w-[120px]">2,600 SAR</td>
              </tr>
            </tbody>
          </table>
          <span className="lg:text20 mtext18 text-white block lg:mt-[0.72916666666vw] mt-[8px]">
            Maxima Walls, furniture inclusive of 1 table, 2 chairs, 1 counter,
            carpet, fascia name and 5 spotlights with electrical outlet
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionPackages;
