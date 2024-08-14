"use client";
import InputField from "./form/InputField";
import React, { useRef, useState } from "react";
import PhoneDropDownField from "./form/PhoneDropDownField";
import DropDownField from "./form/DropDownField";
import FieldAddBtn from "./form/FieldAddBtn";
import UploadField from "./form/UploadField";
import CheckBoxField from "./form/CheckBoxField";
import Visitor from "./Visitor";
import postForm from "@/form/postForm";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [visitors, setVisitors] = useState([]);

  const [states, setStates] = useState({
    firstName: "",
    lastName: "",
    nationality: "",
    passport: "",
    gender: "",
    email: "",
    phone: "",
    pilotlicens: "",
    aircraft: "",
    departureairport: "",
    returnairport: "",
    coaFile: "",
    corFile: "",
    certifiacteFile: "",
    agreement: false
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    nationality: "",
    passport: "",
    gender: "",
    email: "",
    phone: "",
    pilotlicens: "",
    aircraft: "",
    departureairport: "",
    returnairport: "",
    coaFile: "",
    corFile: "",
    certifiacteFile: "",
    agreement: false
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

  const resetForm = () => {
    setStates({
      firstName: "",
      lastName: "",
      nationality: "",
      passport: "",
      gender: "",
      email: "",
      phone: "",
      pilotlicens: "",
      aircraft: "",
      departureairport: "",
      returnairport: "",
      coaFile: "",
      corFile: "",
      certifiacteFile: "",
      agreement: false
    });
    setErrors({
      firstName: "",
      lastName: "",
      nationality: "",
      passport: "",
      gender: "",
      email: "",
      phone: "",
      pilotlicens: "",
      aircraft: "",
      departureairport: "",
      returnairport: "",
      coaFile: "",
      corFile: "",
      certifiacteFile: "",
      agreement: false
    });
    setGenderValue("Gender");
    phoneRef.current.value = "";
    document
      .querySelectorAll('input[type="checkbox"]')
      .forEach(function (checkbox) {
        checkbox.checked = false;
      });
    setVisitors([]);
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
            behavior: "smooth"
          });
        }, 300); // Timeout to ensure it runs after scrollIntoView
      }
    }
  };

  const handleSignupForm = async (e) => {
    e.preventDefault();
    let isError = false;
    Object.keys(states)?.forEach((stateKey) => {
      if (!states[stateKey] || states[stateKey]?.length < 1) {
        if (stateKey != "jobTitle" && stateKey != "companyName") {
          if (!isError) {
            // document
            //   .getElementById(stateKey)
            //   .scrollIntoView({ behavior: "smooth" });
            scroller(stateKey);
          }
          isError = true;

          setErrors((prev) => ({
            ...prev,
            [stateKey]: "This Field is Required"
          }));
        }
      } else if (stateKey == "email" && !validateEmail(states[stateKey])) {
        setErrors((prev) => ({ ...prev, [stateKey]: "Email isn't valid!" }));
        isError = true;
      } else {
        setErrors((prev) => ({ ...prev, [stateKey]: "" }));
      }
    });

    if (!isError) {
      setIsLoading(true);

      const vistorsForPost = [
        {
          first_name: states.firstName,
          last_name: states.lastName,
          nationality: states.nationality,
          passport_number: states.passport,
          gender: states.gender.toLocaleLowerCase(),
          type: "visitors"
        }
      ];
      visitors?.forEach((item) => {
        vistorsForPost.push({
          first_name: item.firstName,
          last_name: item.lastName,
          nationality: item.nationality,
          passport_number: item.passport,
          gender: item.gender.toLocaleLowerCase(),
          type: "visitors"
        });
      });

      const res = await postForm(
        {
          visitors: vistorsForPost,
          email: states?.email,
          phone: states?.phone,
          pilot_license: states?.pilotlicens,
          aircraft: states?.aircraft,
          departure_airport: states?.departureairport,
          return_airport: states?.returnairport,
          coa: states?.coaFile,
          cor: states?.corFile,
          insurance_certificate: states?.corFile,
          accepted_terms_and_conditions: states?.agreement
        },
        "fly_in_sign_up_form"
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
    setStates((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  const handleVisitorTextChange = (e) => {
    const value = e.target.value;
    const index = +e.target.dataset.index; // Convert the index to a number
    const id = e.target.id;

    // Create a copy of the visitors array
    const prevVisitorStates = [...visitors];

    // Create a copy of the visitor object to avoid mutating state directly
    prevVisitorStates[index] = { ...prevVisitorStates[index], [id]: value };

    // Update the state with the new visitors array
    setVisitors(prevVisitorStates);
  };
  const handleGender = (value) => {
    setStates({ ...states, gender: value });
  };
  const handleVisitorGender = (value, index) => {
    // Create a copy of the visitors array
    const prevVisitorStates = [...visitors];

    // Create a copy of the visitor object to avoid mutating state directly
    prevVisitorStates[index] = { ...prevVisitorStates[index], gender: value };

    // Update the state with the new visitors array
    setVisitors(prevVisitorStates);
  };
  const handlePhoneField = (value) => {
    setStates({ ...states, phone: value });
  };

  const handleCheckChange = (e) => {
    console.log(e.target.checked);
    setStates({ ...states, agreement: e.target.checked });
  };
  const handleNumberOfVisitors = () => {
    setVisitors([
      ...visitors,
      {
        firstName: "",
        lastName: "",
        nationality: "",
        passport: "",
        gender: ""
      }
    ]);
  };

  const handleRemoveVisitor = (index) => {
    const selectedElement = document.querySelectorAll(".animateVisitor")[index];
    selectedElement?.classList.remove("animateVisitor");
    selectedElement?.classList.add("animateReverse");

    setTimeout(() => {
      setVisitors((prevVisitors) => {
        const updatedVisitors = prevVisitors.filter((_, i) => i !== index);
        return updatedVisitors;
      });
    }, 700);
  };

  const renderedVisitors = Array.from(
    { length: visitors?.length },
    (_, index) => (
      <Visitor
        key={index}
        index={index}
        handleTextChange={handleVisitorTextChange}
        handleGender={handleVisitorGender}
        states={visitors[index]}
        errors={errors}
        handleRemoveVisitor={handleRemoveVisitor}
      />
    )
  );

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
            <div>
              <span className="lg:text26 mtext18 text-[#000000] f500 w-full block lg:px-[1.25vw] px-[12px] mb-[10px] lg:mb-[0.6vw] ">
                Visitor 1
              </span>
              <div className="flex flex-wrap lg:gap-x-[0vw] justify-between lg:gap-y-[2.08333333333vw] gap-[24px]">
                <InputField
                  id="firstName"
                  errors={errors}
                  value={states?.firstName}
                  placeholder={"Full name *"}
                  handleChange={handleTextChange}
                  small
                />
                <InputField
                  id="lastName"
                  errors={errors}
                  value={states?.lastName}
                  placeholder={"Last name *"}
                  handleChange={handleTextChange}
                  small
                />
                <InputField
                  id="nationality"
                  errors={errors}
                  value={states?.nationality}
                  placeholder={"Nationality * "}
                  handleChange={handleTextChange}
                />
                <InputField
                  id="passport"
                  errors={errors}
                  value={states?.passport}
                  placeholder={"Passport number * "}
                  handleChange={handleTextChange}
                />
                <DropDownField
                  id="gender"
                  value={states?.gender}
                  errors={errors}
                  handleChange={handleGender}
                  genderValue={genderValue}
                  setGenderValue={setGenderValue}
                />
                <InputField
                  id="email"
                  errors={errors}
                  value={states?.email}
                  placeholder={"Email * "}
                  handleChange={handleTextChange}
                />
                <PhoneDropDownField
                  id="phone"
                  errors={errors}
                  value={states?.phone}
                  handlePhoneField={handlePhoneField}
                  phoneRef={phoneRef}
                />
              </div>
            </div>
            {renderedVisitors}
            {visitors?.length == 3 || (
              <FieldAddBtn handleClick={handleNumberOfVisitors} />
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

            {status && (
              <span
                className={`  lg:text24 mtext20 w-full block  error ${
                  status == "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status == "success"
                  ? "Your form has been successfully submitted!"
                  : "Something went wrong try again"}
              </span>
            )}

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
