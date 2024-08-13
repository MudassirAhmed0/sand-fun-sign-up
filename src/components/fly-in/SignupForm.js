"use client";
import InputField from "./form/InputField";
import React, { useEffect, useRef, useState } from "react";
import PhoneDropDownField from "./form/PhoneDropDownField";
import DropDownField from "./form/DropDownField";
import FieldAddBtn from "./form/FieldAddBtn";
import UploadField from "./form/UploadField";
import CheckBoxField from "./form/CheckBoxField";
import Image from "next/image";
import CloseIcon from "./form/CloseIcon";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [states, setStates] = useState({
    visitors: [],
    pilotlicens: "",
    aircraft: "",
    departureairport: "",
    returnairport: "",
    coaFile: "",
    corFile: "",
    certifiacteFile: "",
    agreement: false,
  });
  const [errors, setErrors] = useState({
    visitors: [],
    pilotlicens: "",
    aircraft: "",
    departureairport: "",
    returnairport: "",
    coaFile: "",
    corFile: "",
    certifiacteFile: "",
    agreement: false,
  });
  const [genderValue, setGenderValue] = useState("Gender");
  const phoneRef = useRef(null);

  const validateEmail = (email) => {
    // Regular expression for validating an email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email against the regular expression
    return emailRegex.test(email);
  };

  const handleFileChange = (event) => {
    setStates({ ...states, [event.target.id]: event.target.files[0] });
  };

  const newVisitor = {
    firstName: "",
    lastName: "",
    nationality: "",
    passport: "",
    gender: "Gender",
    email: "",
    // phone: "",
  };

  const resetForm = () => {
    setStates({
      visitors: [],
      pilotlicens: "",
      aircraft: "",
      departureairport: "",
      returnairport: "",
      coaFile: "",
      corFile: "",
      certifiacteFile: "",
      agreement: false,
    });
    setErrors({
      visitors: [],
      pilotlicens: "",
      aircraft: "",
      departureairport: "",
      returnairport: "",
      coaFile: "",
      corFile: "",
      certifiacteFile: "",
      agreement: false,
    });
    setGenderValue("Gender");
    phoneRef.current.value = "";
    document
      .querySelectorAll('input[type="checkbox"]')
      .forEach(function (checkbox) {
        checkbox.checked = false;
      });
    handleAddVisitor();
  };

  const scroller = (stateKey) => {
    const header = document.querySelector("header");
    if (header) {
      const headerHeight = header.offsetHeight;
      const additionalOffset = window.innerWidth * 0.01; // 1vw in pixels
      const totalOffset = headerHeight + additionalOffset;

      const element = document.getElementById(stateKey);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        // Adjust scroll position after scrolling into view
        window.setTimeout(() => {
          const elementTop =
            element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementTop - totalOffset,
            behavior: "smooth",
          });
        }, 300); // Timeout to ensure it runs after scrollIntoView
      }
    }
  };

  const handleSignupForm = async (e) => {
    e.preventDefault();
    let isError = false;
    Object.keys(states)?.forEach((stateKey) => {
      if (stateKey === "visitors") {
        const updatedVisitors = states.visitors.map((visitor) => {
          const object = {};
          Object.keys(visitor).map((key) => {
            if (
              !key.includes("email") &&
              (!visitor[key] || visitor[key].length < 1)
            ) {
              
              object[key] = "This Field is Required";
              scroller(key);
            } else if (key.includes("email") && !validateEmail(visitor[key])) {
              
              object[key] = "Email isn't valid!";
              scroller(key);
            } else {
              object[key] = "";
            }
          });
          return object;
        });
        isError = true;
        setErrors((prev) => ({ ...prev, visitors: updatedVisitors }));
      } else if (
        stateKey !== "visitors" &&
        (!states[stateKey] || states[stateKey]?.length < 1)
      ) {
        if (stateKey !== "jobTitle" && stateKey !== "companyName") {
          if (!isError) {
            // document
            //   .getElementById(stateKey)
            //   .scrollIntoView({ behavior: "smooth" });
            scroller(stateKey);
          }
          isError = true;

          setErrors((prev) => ({
            ...prev,
            [stateKey]: "This Field is Required",
          }));
        }
      } else {
        setErrors((prev) => ({ ...prev, [stateKey]: "" }));
      }
    });

    if (!isError) {
      setIsLoading(true);
      const res = await postForm(
        {
          first_name: states?.firstName,
          last_name: states?.lastName,
          gender: states?.gender,
          email: states?.email,
          company_name: states?.companyName,
          job_title: states?.jobTitle,
          phone: states?.phone,
        },
        "exhibit_2024"
      );
      if (res?.status == 200) {
        setStatus("success");
      } else {
        setStatus("failed");
      }
      setIsLoading(false);

      resetForm();
    }
  };
  const handleTextChange = (e) => {
    if (Object.keys(states).includes(e.target.id)) {
      setStates((prev) => {
        return { ...prev, [e.target.id]: e.target.value };
      });
    } else {
      const visitorIndex = e.target.id.includes("1")
        ? 1
        : e.target.id.includes("2")
        ? 2
        : e.target.id.includes("3")
        ? 3
        : 0;
      const targetedVisitor = states.visitors[visitorIndex];
      const updatedObject = {
        ...targetedVisitor,
        [e.target.id]: e.target.value,
      };

      setStates((prev) => {
        return {
          ...prev,
          visitors: prev.visitors.map((item, index) =>
            visitorIndex === index ? updatedObject : item
          ),
        };
      });
    }
  };

  const handleGender = (value) => {
    setStates({ ...states, gender: value });
  };
  const handlePhoneField = (value) => {
    setStates({ ...states, phone: value });
  };

  const handleCheckChange = (e) => {
    let prevChecks = states?.checkboxes;
    if (e.target.checked) {
      prevChecks.push(e.target.value);
    } else {
      prevChecks = removeValueFromArray(prevChecks, e.target.value);
    }
    setStates({ ...states, checkboxes: prevChecks });
  };

  const handleAddVisitor = () => {
    const renamedVisitor = getRenamedVisitor(states.visitors.length);
    setStates((prev) => {
      return { ...prev, visitors: [...prev.visitors, renamedVisitor] };
    });
    setErrors((prev) => {
      return { ...prev, visitors: [...prev.visitors, renamedVisitor] };
    });
  };

  const handleRemoveVisitor = (index) => {
    const remainingVisitors = states.visitors.filter((_, i) => i !== index);
    setStates((prev) => {
      return { ...prev, visitors: remainingVisitors };
    });
  };

  const getRenamedVisitor = (index) => {
    const renamedVisitor = {};
    Object.keys(newVisitor).forEach((key) => {
      renamedVisitor[`${key}-${index}`] = newVisitor[key];
    });
    return renamedVisitor;
  };

  useEffect(() => {
    if (states.visitors.length === 0) {
      handleAddVisitor();
    }
  }, []);

  return (
    <section id="signup">
      <div className="Container1640 py220">
        <h2 data-aos="fade-up" className="text64 text-[#000000] text-center">
          Fly-In Sign up Form
        </h2>
        <div
          data-aos="fade"
          className="lg:mt-[5.72916666667vw] sm:mt-[40px] mt-[30px] lg:w-[56.9791666667vw] mx-[auto] w-full"
        >
          <form
            onSubmit={handleSignupForm}
            className="signup_Form lg:text24 mtext18 text-[#000000] text-opacity-[0.7] flex flex-wrap lg:gap-x-[1.97916666667vw] lg:gap-y-[2.08333333333vw] gap-[24px]"
          >
            <Visitors
              visitors={states.visitors}
              errors={errors}
              handleTextChange={handleTextChange}
              handleRemove={handleRemoveVisitor}
            />
            {states.visitors.length < 4 && (
              <FieldAddBtn onClick={handleAddVisitor} />
            )}
            <InputField
              id="pilotlicens"
              errors={errors}
              value={states?.pilotlicens}
              placeholder={"Pilot license *"}
              handleChange={handleTextChange}
            />
            <InputField
              id="aircraft"
              errors={errors}
              value={states?.aircraft}
              placeholder={"Aircraft * "}
              handleChange={handleTextChange}
            />
            <InputField
              id="departureairport"
              errors={errors}
              value={states?.departureairport}
              placeholder={"Departure Airport *"}
              handleChange={handleTextChange}
            />
            <InputField
              id="returnairport"
              errors={errors}
              value={states?.returnairport}
              placeholder={"Return Airport *"}
              handleChange={handleTextChange}
            />
            <div className="w-full">
              <span className="text-[#000000]">
                Please attach copies of aircraft documents
              </span>
              <div className="lg:mt-[2.08333333333vw] mt-[24px] w-full flex flex-col lg:gap-y-[1.04166666667vw] gap-[15px]">
                <UploadField
                  label={"CoA"}
                  id="coaFile"
                  errors={errors}
                  value={states?.coaFile}
                  handleFileChange={handleFileChange}
                />
                <UploadField
                  label={"CoR"}
                  id="corFile"
                  errors={errors}
                  value={states?.corFile}
                  handleFileChange={handleFileChange}
                />
                <UploadField
                  label={"Insurance certificate"}
                  id="certifiacteFile"
                  errors={errors}
                  value={states?.certifiacteFile}
                  handleFileChange={handleFileChange}
                />
              </div>
            </div>
            <CheckBoxField
              id={"agreement"}
              value={states.agreement}
              errors={errors}
              handleCheckChange={handleCheckChange}
            />
            <button
              className={`${
                isLoading ? "pointer-events-none" : ""
              } lg:mt-[0.625vw] w-full bg-[#F09021] border-transparent flex justify-center items-center text-white sm:py-[12.5px] sm:px-[28.269px] py-[2.20930232558vw] lg:py-[1.69444444444vh] px-[5.41139534884vw] lg:px-[4.81692708333vw] border100 lg:text21 mtext16 f600 lg:border-[0.02604166666vw] border-[0.5px] relative before:z-[-1] hover:before:opacity-[1] before:opacity-0 before:content-[''] before:border100 before:absolute before:top-0 before:lrf1 before:size-full before:ring-2 before:ring-[#F62D17] before:blur-[6px] hover:border-[#F62D17]  before:transition-all before:duration-500 transition-all duration-500`}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;

const Visitors = ({ visitors, errors, handleTextChange, handleRemove }) => {
  return (
    <div className="transition duration-300 ease-linear">
      {visitors?.map((visitor, i) => {
        return (
          <div key={i} className={i > 0 ? "mt-10" : ""}>
            <div className="flex flex-row justify-between items-center">
              <span className="lg:text26 mtext18 text-[#000000] f500 w-full block lg:px-[1.25vw] px-[12px] mb-[10px] lg:mb-[0.6vw] ">
                Visitor {i + 1}
              </span>
              <span>
                {i > 0 && (
                  <button
                    type="button"
                    title="Remove"
                    onClick={() => handleRemove(i)}
                    className="relative rotate-45 lg:size-[1.45833333333vw] size-[18px]"
                  >
                    <CloseIcon />
                  </button>
                )}
              </span>
            </div>
            <div className="flex flex-wrap lg:gap-x-[0vw] justify-between lg:gap-y-[2.08333333333vw] gap-[24px]">
              <InputField
                id={`firstName-${i}`}
                errors={errors}
                placeholder={"Full name *"}
                handleChange={handleTextChange}
                small
              />
              <InputField
                id={`lastName-${i}`}
                errors={errors}
                placeholder={"Last name *"}
                handleChange={handleTextChange}
                small
              />
              <InputField
                id={`nationality-${i}`}
                errors={errors}
                placeholder={"Nationality * "}
                handleChange={handleTextChange}
              />
              <InputField
                id={`passport-${i}`}
                errors={errors}
                placeholder={"Passport number * "}
                handleChange={handleTextChange}
              />
              {/* <DropDownField
                id={`gender-${i}`}
                value={visitor?.gender}
                errors={errors}
                handleChange={handleGender}
                genderValue={genderValue}
                setGenderValue={setGenderValue}
              /> */}
              <InputField
                id={`email-${i}`}
                errors={errors}
                placeholder={"Email * "}
                handleChange={handleTextChange}
              />
              {/* <PhoneDropDownField
                id={`phone-${i}`}
                errors={errors}
                value={visitor?.phone}
                handlePhoneField={handlePhoneField}
                phoneRef={phoneRef}
              /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
