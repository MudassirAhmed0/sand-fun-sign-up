"use client";
import React from "react";
import Facility from "./Facility";

const facilities = [
  {
    heading: "Strategic Partner",
    details: [
      {
        partner: "1 Partner",
        sqm: "72",
        sar: "2,000,000"
      }
    ],
    benefits: [
      [
        "Co-branding with all Event branding across.",
        "Honoring the Strategic Partner in the award ceremony.",
        "A prominent space in the exhibition.",
        "Allocate 2 seats in the first row to the main leaders during the opening.",
        "Allocate 2 seats in the second row to leaders during the opening.",
        "The logo will be featured in all marketing collaterals to match the sponsorship size.",
        "Logo to be prominently featured on the backdrop of the conference stage.",
        "To be on 3 banners inside the venue.",
        "Logo to be prominently featured on the show website.",
        "The logo will be prominently featured on VIP invitation cards.",
        "Logo to be prominently featured on interview media boards.",
        "Participation of 3 speakers in the industry conference."
      ],
      [
        "Highlight the strategic partner on the event's social media pages.",
        "Logo to be prominently featured in all electronic communications.",
        "8 VVIP invitations to attend the opening ceremony.",
        "Media coverage dedicated to the Strategic Partner.",
        "Eligible to distribute pre-approved publications on the event site.",
        "Strategic Partner logo to be on 3 roll-ups inside the venue.",
        "Receive a video and photo album of the opening ceremony and event.",
        "Allocate 2 seats in the Awards and Gala Night.",
        "Eligible for 30 VIP Event Tickets."
      ]
    ]
  },
  {
    heading: "VIP Experience Partner",
    details: [
      {
        partner: "1 Partner",
        sqm: "36",
        sar: "500,000"
      }
    ],
    benefits: [
      [
        "Co-branding with all VIP Experience branding across",
        "Honoring the VIP Experience Partner in the Awards ceremony.",
        "A prominent space for the VIP Experience Sponsor in the VIP Zone.",
        "Allocate 1 seat in the first row to main leaders during the opening.",
        "Allocate 3 seats in the second row to main leaders during the opening.",
        "Logo to be featured in all marketing collaterals to match the VIP Experience Partner size.",
        "Logo Co-branding with Exhibition branding backdrop of the VIP Zone.",
        "A banner featured next to VIP Zone (Size 90cmX180cm)",
        "Logo to be prominently featured on the show website.",
        "The logo will be prominently featured on VIP invitation cards."
      ],
      [
        "Highlight the VIP Experience Partner on the event's social media pages.",
        "Logo to be featured in all electronic communications.",
        "2 VVIP invitations to attend the opening ceremony.",
        "Receive selected video and photo albums of the opening ceremony and event.",
        "Allocate 1 seat in the Awards and Gala Night",
        "Eligible for 15 VIP Event Tickets."
      ]
    ]
  },
  {
    heading: "Entertainment Partner",
    details: [
      {
        partner: "1 Partner",
        sqm: "18",
        sar: "300,000"
      }
    ],
    benefits: [
      [
        "Co-branding with all Entertainment branding across",
        "Honoring the Entertainment Partner in the Awards ceremony.",
        "A prominent space in the exhibition.",
        "Allocate 1 seat in the first row to main leaders during the opening.",
        "Allocate 2 seats in the second row to main leaders during the opening.",
        "Logo to be featured in all marketing collaterals to match the Entertainment partner size.",
        "Logo Co-branding with Exhibition branding backdrop of the Entertainment Zone.",
        "A banner featured in the Entertainment Zone (Size 90cmX180cm)",
        "Logo to be prominently featured on the show website.",
        "The logo will be prominently featured on VIP invitation cards."
      ],
      [
        "Highlight the Entertainment Partner on the event's social media pages.",
        "Logo to be prominently featured in all electronic communications.",
        "1 VVIP invitation to attend the opening ceremony.",
        "Receive selected video and photo albums of the opening ceremony and event.",
        "Allocate 1 seat in the Awards and Gala Night",
        "Eligible for 15 VIP Event Tickets."
      ]
    ]
  },
  {
    heading: "Exhibition Sponsor",
    details: [
      {
        partner: "1 Partner",
        sqm: "18",
        sar: "250,000"
      }
    ],
    benefits: [
      [
        "Co-branding with all Exhibition branding across",
        "Honoring the Exhibition Sponsor in the Awards ceremony.",
        "A prominent space in the exhibition.",
        "Allocate 2 seats in the second row to main leaders during the opening",
        "The logo will be featured in all marketing collaterals to match the exhibition partner's size.",
        "Logo Co-branding with Exhibition branding backdrop of the Exhibition Hall.",
        "A hanging banner featured in the Exhibition Hall (Size 90cmX180cm)",
        "Logo to be featured on the show website.",
        "Highlight the exhibition sponsor on the event's social media pages."
      ],
      [
        "Logo to be featured in all electronic communications.",
        "1 VVIP invitation to attend the opening ceremony.",
        "Receive selected video and photo albums of the opening ceremony and event.",
        "Allocate 1 seat in the Awards and Gala Night",
        "Eligible for 10 VIP Event Tickets."
      ]
    ]
  },
  {
    heading: "Hangar Talks Partner",
    details: [
      {
        partner: "1 Partner",
        sqm: "18",
        sar: "200,000"
      }
    ],
    benefits: [
      [
        "Co-branding with all the Hanger Talks branding across",
        "Honoring the Hanger Talks in the award ceremony.",
        "A prominent space in the exhibition.",
        "Allocate 1 seat in the first row of the Hanger Talks conference opening day in the Hangar Talks venue.",
        "Allocate 2 seats in the second row to the main leaders during the opening.",
        "The logo will be featured in all marketing collaterals to match the Hanger Talks size.",
        "Logo to be featured prominently on the backdrop of the conference stage.",
        "A hanging banner (90cmX180 cm) will be featured"
      ],
      [
        "The logo will also be featured on the show's website.",
        "Highlight the Hanger Talks on the event's social media pages.",
        "Logo to be prominently featured in all electronic communications.",
        "1 VVIP invitation to attend the opening ceremony.",
        "Receive selected video and photo albums of the opening ceremony and event.",
        "Allocate 1 seat in the Awards and Gala Night",
        "10 VIP Event Tickets."
      ]
    ]
  },
  {
    heading: "Awards Partner",
    details: [
      {
        partner: "1 Partner",
        sqm: "18",
        sar: "200,000"
      }
    ],
    benefits: [
      [
        "Co-branding as ‘partner’ across Awards branding",
        "Honoring the Awards partner in the Awards ceremony.",
        "A prominent space in the exhibition.",
        "Allocate 2 seats in the second row to the main leaders during the opening",
        "The logo will be featured in all marketing collaterals to match the conference partner's size.",
        "Logo to be featured prominently on the backdrop of the Awards stage.",
        "A hanging banner featured next to the awards stage (Size 90cmX180cm)",
        "Logo to be featured on the show website.",
        "Highlight the Awards partner on the event's social media pages."
      ],
      [
        "Logo to be prominently featured in all electronic communications.",
        "1 VIP invitation to attend the opening ceremony.",
        "Receive selected video and photo albums of the opening ceremony and event.",
        "Allocate 1 seat in the Awards and Gala Night.",
        "Eligible for 10 VIP Event Tickets."
      ]
    ]
  },
  {
    heading: "Food Court Sponsor",
    details: [
      {
        partner: "1 Partner",
        sqm: "18",
        sar: "200,000"
      }
    ],
    benefits: [
      [
        "Co-branding with all Food Court branding across",
        "Honoring the Food Court Sponsor in the Awards ceremony.",
        "A prominent space in the Food Court zone - outdoor area.",
        "Allocate 1 seat in the second row to main leaders during the opening.",
        "Logo to be featured in all marketing collaterals to match the Food Court partner size.",
        "Logo Co-branding with Exhibition branding backdrop of the Entertainment Zone.",
        "A banner featured in the Food Court Area (Size 90cmX180cm)",
        "Logo to be prominently featured on the show website.",
        "The logo will be prominently featured on VIP invitation cards."
      ],
      [
        "Highlight the Food Court Partner on the event's social media pages.",
        "Logo to be prominently featured in all electronic communications.",
        "1 VVIP invitation to attend the opening ceremony.",
        "Receive selected video and photo albums of the opening ceremony and event.",
        "Allocate 1 seat in the Awards and Gala Night.",
        "Eligible for 10 VIP Event Tickets."
      ]
    ]
  },
  {
    heading: "Platinum Sponsors",
    details: [
      {
        partner: "2 Sponsors",
        sqm: "54",
        sar: "1,000,000"
      }
    ],
    benefits: [
      [
        "Honoring the Platinum Sponsors in the award ceremony.",
        "A prominent space in the exhibition.",
        "Allocate 1 seat in the first row to the main leaders during the opening.",
        "Allocate 2 seats in the second row to main leaders during the opening.",
        "The logo will be featured in all marketing collaterals to match the sponsorship size.",
        "Logo to be featured prominently on the backdrop of the conference stage.",
        "A banner featured next to the VIP Zone (Size 90cmX180cm)",
        "Logo to be prominently featured on the show website.",
        "The logo will be prominently featured on VIP invitation cards.",
        "Logo to be prominently featured on interview media boards.",
        "Participation of 2 speakers in the industry conference."
      ],
      [
        "Highlight the platinum sponsors on the event's social media pages.",
        "Logo to be prominently featured in all electronic communications.",
        "4 VVIP invitations to attend the opening ceremony.",
        "Eligible to distribute pre-approved publications on the event site.",
        "Receive a video and photo album of the opening ceremony and event.",
        "Allocate 1 seat in the Awards and Gala Night.",
        "Eligible for 25 VIP Event Tickets."
      ]
    ]
  },
  {
    heading: "Gold Sponsors",
    details: [
      {
        partner: "3 Sponsors",
        sqm: "36",
        sar: "500,000"
      }
    ],
    benefits: [
      [
        "Honoring the Gold Sponsors in the award ceremony.",
        "A prominent space in the exhibition.",
        "Allocate 2 seats in the second row to main leaders during the opening.",
        "The logo will be featured in all marketing collaterals to match the sponsorship size.",
        "Logo to be featured prominently on the backdrop of the conference stage.",
        "A banner featured next to the VIP Zone (Size 90cmX180cm)",
        "Logo to be prominently featured on the show website.",
        "The logo will be prominently featured on VIP invitation cards.",
        "Logo to be prominently featured on interview media boards.",
        "Participation of 1 speaker in the industry conference."
      ],
      [
        "Highlight the Gold Sponsors on the event's social media pages.",
        "Logo to be prominently featured in all electronic communications.",
        "2 VVIP invitations to attend the opening ceremony.",
        "Receive a video and photo album of the opening ceremony and event.",
        "Allocate 1 seat in the Awards and Gala Night.",
        "Eligible for 15 VIP Event Tickets."
      ]
    ]
  },
  {
    heading: "Silver Sponsors",
    details: [
      {
        partner: "4 Sponsors",
        sqm: "18",
        sar: "250,000"
      }
    ],
    benefits: [
      [
        "Honoring the Silver Sponsors in the award ceremony.",
        "A prominent space in the exhibition.",
        "Allocate 2 seats in the second row to main leaders during the opening.",
        "The logo will be featured in all marketing collaterals to match the sponsorship size.",
        "Logo to be prominently featured on the backdrop of the conference stage.",
        "A banner featured next to the VIP Zone (Size 90cmX180cm)",
        "Logo to be prominently featured on the show website.",
        "The logo will be prominently featured on VIP invitation cards.",
        "Logo to be prominently featured on interview media boards.",
        "Participation of 1 speaker in the industry conference."
      ],
      [
        "Highlight the Silver Sponsors on the event's social media pages.",
        "Logo to be prominently featured in all electronic communications.",
        "1 VVIP invitation to attend the opening ceremony.",
        "Receive a video and photo album of the opening ceremony and event.",
        "Allocate 1 seat in the Awards and Gala Night.",
        "Eligible for 10 VIP Event Tickets."
      ]
    ]
  }
];

const SponsorshipPackages = ({ varient2 }) => {
  // const handlePackages = (index) => {
  //   const packages_Main = document.querySelectorAll(".packages_Main")[index];
  //   const allDropDowns = document.querySelectorAll(".dropDown");
  //   const benfitsTags = document.querySelectorAll(".benifitTag");
  //   const benfitsTagsv2 = document.querySelectorAll(".benifitTagv2 span");
  //   const clickedDropDown = allDropDowns[index];
  //   const elHeight = clickedDropDown.querySelector("div").offsetHeight;
  //   const benifitTag = benfitsTags[index];
  //   const benfitsTagv2 = benfitsTagsv2[index];
  //   if (clickedDropDown.style.opacity == "0") {
  //     clickedDropDown.style.opacity = "1";
  //     clickedDropDown.style.maxHeight = `${elHeight}px`;
  //     packages_Main.classList.add("active");
  //     if (benifitTag) {
  //       benifitTag.innerHTML = "Hide Benefits";
  //     }
  //     if (benfitsTagv2) {
  //       benfitsTagv2.innerHTML = "Hide Benefits";
  //     }
  //   } else {
  //     packages_Main.classList.remove("active");
  //     clickedDropDown.style.opacity = "0";
  //     clickedDropDown.style.maxHeight = `0px`;
  //     if (benifitTag) {
  //       benifitTag.innerHTML = "Show Benefits";
  //     }
  //     if (benfitsTagv2) {
  //       benfitsTagv2.innerHTML = "Show Benefits";
  //     }
  //   }
  // };

  const handlePackages = (index) => {
    const packages_Main = document.querySelectorAll(".packages_Main")[index];
    const allDropDowns = document.querySelectorAll(".dropDown");
    const benfitsTags = document.querySelectorAll(".benifitTag");
    const benfitsTagsv2 = document.querySelectorAll(".benifitTagv2 span");
    const clickedDropDown = allDropDowns[index];
    const elHeight =
      window.innerWidth > 600
        ? clickedDropDown.querySelector("div").getBoundingClientRect().height
        : 2400; // Use getBoundingClientRect()
    const benifitTag = benfitsTags[index];
    const benfitsTagv2 = benfitsTagsv2[index];

    // Force reflow
    // clickedDropDown.style.display = "none";
    // clickedDropDown.offsetHeight; // Force reflow
    // clickedDropDown.style.display = "";

    if (clickedDropDown.style.opacity == "0") {
      clickedDropDown.style.opacity = "1";
      clickedDropDown.style.maxHeight = `${elHeight}px`;
      clickedDropDown.classList.add("overflow-auto");
      clickedDropDown.classList.remove("overflow-hidden");

      packages_Main.classList.add("active");
      if (benifitTag) {
        benifitTag.innerHTML = "Hide Benefits";
      }
      if (benfitsTagv2) {
        benfitsTagv2.innerHTML = "Hide Benefits";
      }
    } else {
      clickedDropDown.classList.add("overflow-hidden");
      clickedDropDown.classList.remove("overflow-auto");

      packages_Main.classList.remove("active");
      clickedDropDown.style.opacity = "0";
      clickedDropDown.style.maxHeight = `0px`;
      if (benifitTag) {
        benifitTag.innerHTML = "Show Benefits";
      }
      if (benfitsTagv2) {
        benfitsTagv2.innerHTML = "Show Benefits";
      }
    }
  };

  return (
    <section className="py220">
      <div className="Container1640">
        <h2 data-aos="fade-up" className="text64 text-[#000000] text-center">
          Sponsorship packages and opportunities
        </h2>
        <div className="lg:mt-[5.9375vw] sm:mt-[80px] mt-[40px]  overflow-hidden">
          {/* <ul className="bg-[#1A1C1F] bg-opacity-[0.03] border border-[#1A1C1F] border-opacity-[0.03] flex lg:gap-x-[18.75vw] lg:px-[4.16666666667vw] sm:px-[50px] px-[30px] lg:py-[0.72916666666vw] py-[12px] lg:text28 mtext20 text-[#1A1C1F] f500">
            <li>package</li>
            <li>Target</li>
            <li>SQM</li>
            <li>Total Cost</li>
          </ul> */}
          <div className="lg:w-[90.355%] mx-[auto]">
            <div className="flex flex-col lg:gap-y-[1.53645833333vw] sm:gap-[30px] gap-[25px] lg:py-[1.53645833333vw] sm:py-[40px] py-[30px]">
              {facilities.map((facilitie, index) => (
                <Facility
                  facilitie={facilitie}
                  key={index}
                  index={index}
                  handlePackages={handlePackages}
                  varient2={varient2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipPackages;
