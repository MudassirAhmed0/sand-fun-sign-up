import DropDownField from "@/components/common/DropDownField";
import InputField from "@/components/common/InputField";
import PhoneDropDownField from "@/components/common/PhoneDropDownField";
import React, { useRef, useState } from "react";
import CheckBoxFields from "./CheckBoxFields";
import postForm from "@/form/postForm";

const checkboxesData = {
  label: "Registering As:",
  checkboxes: [{ value: "Visitor" }, { value: "Confrence Attendee" }]
};
const PreRegisterPopup = ({ activePreRegister, setActivePreRegister }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [states, setStates] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    companyName: "",
    checkboxes: []
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    companyName: "",
    checkboxes: []
  });
  const [genderValue, setGenderValue] = useState("Gender");
  const phoneRef = useRef(null);

  const validateEmail = (email) => {
    // Regular expression for validating an email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email against the regular expression
    return emailRegex.test(email);
  };
  const resetForm = () => {
    setStates({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      phone: "",
      companyName: "",
      checkboxes: []
    });
    setErrors({
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      phone: "",
      companyName: "",
      checkboxes: []
    });
    setGenderValue("Gender");
    phoneRef.current.value = "";
    document
      .querySelectorAll('input[type="checkbox"]')
      .forEach(function (checkbox) {
        checkbox.checked = false;
      });
  };
  const handlePreForm = async (e) => {
    e.preventDefault();
    let isError = false;
    // Object.keys(states)?.forEach((stateKey) => {
    //   if (!states[stateKey]) {
    //     isError = true;
    //     setErrors((prev) => ({
    //       ...prev,
    //       [stateKey]: "This Field is Required"
    //     }));
    //   } else if (stateKey == "email" && !validateEmail(states[stateKey])) {
    //     setErrors((prev) => ({ ...prev, [stateKey]: "Email isn't valid!" }));
    //     isError = true;
    //   } else {
    //     setErrors((prev) => ({ ...prev, [stateKey]: "" }));
    //   }
    // });

    Object.keys(states)?.forEach((stateKey) => {
      if (!states[stateKey] || states[stateKey]?.length < 1) {
        if (stateKey != "jobTitle" && stateKey != "companyName") {
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
      let statesForPost = {
        first_name: states?.firstName,
        last_name: states?.lastName,
        gender: states?.gender,
        email: states?.email,
        company_name: states?.companyName,
        phone: states?.phone,
        registering_as: states?.checkboxes
      };
      states?.checkboxes.forEach((checkbox, index) => {
        if (checkbox == "Visitor") {
          statesForPost["receiver_" + (index + 1)] = "Visitors@nexus.LLC";
        } else if (checkbox == "Confrence Attendee") {
          statesForPost["receiver_" + (index + 1)] = "Conference@nexus.llc";
        }
      });
      const res = await postForm(statesForPost, "pre_register");
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
  const handleGender = (value) => {
    setStates({ ...states, gender: value });
  };
  const handlePhoneField = (value) => {
    setStates({ ...states, phone: value });
  };
  function removeValueFromArray(arr, value) {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  const handleCheckChange = (e) => {
    let prevChecks = states?.checkboxes;
    if (e.target.checked) {
      prevChecks.push(e.target.value);
    } else {
      prevChecks = removeValueFromArray(prevChecks, e.target.value);
    }
    setStates({ ...states, checkboxes: prevChecks });
  };
  return (
    <div
      className={` ${
        activePreRegister
          ? "ltr:translate-x-0 rtl:translate-x-0 "
          : "ltr:translate-x-[100vw] rtl:translate-x-[-100vw] "
      } fixed atlwh_Full h-[100vh] flex justify-center items-center z-[999] transition-all duration-500`}
    >
      <span
        onClick={() => {
          setActivePreRegister(false);
        }}
        className="atlwh_Full bg-[#1c1c1c59]"
      ></span>
      <div className="lg:w-[57.5vw] lg:max-h-[95.8333333333vh] sm:max-h-[738px] max-h-[534px] overflow-auto sm:w-[80%] w-[89.769%] bg-[#1A1C1F] border40 lg:py-[11.1111111111vh] sm:py-[80px] py-[60px] relative z-[2]">
        <img
          onClick={() => {
            setActivePreRegister(false);
          }}
          src="/images/icons/close-popup.svg"
          alt="close"
          className="cursor-pointer absolute lg:top-[1.25vw] lrf2 lg:mx-[1.25vw] mx-[5%] sm:top-[10%] top-[5%] lg:size-[2.08333333333vw] sm:size-[30px] size-[20px]"
        />
        <form
          onSubmit={handlePreForm}
          className="preForm mx-auto lg:w-[92%] w-[84.459%] flex flex-wrap justify-center lg:gap-y-[3.7037037037vh] lg:gap-x-[0] justify-between gap-[24px]"
        >
          <InputField
            id="firstName"
            errors={errors}
            value={states?.firstName}
            placeholder={"First name"}
            handleChange={handleTextChange}
          />
          <InputField
            id="lastName"
            errors={errors}
            value={states?.lastName}
            placeholder={"Last name"}
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
            value={states?.email}
            errors={errors}
            placeholder={"Email address"}
            big
            handleChange={handleTextChange}
          />
          <InputField
            id="companyName"
            value={states?.companyName}
            errors={errors}
            placeholder={"Company Name (Optional)"}
            big
            handleChange={handleTextChange}
          />
          <PhoneDropDownField
            id="phone"
            errors={errors}
            value={states?.phone}
            handlePhoneField={handlePhoneField}
            phoneRef={phoneRef}
          />
          <CheckBoxFields
            label={checkboxesData?.label}
            checkboxes={checkboxesData?.checkboxes}
            id={"checkboxes"}
            handleCheckChange={handleCheckChange}
            errors={errors}
          />
          {status && (
            <span
              className={`  lg:text24 mtext20 w-full block  error ${
                status == "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status == "success"
                ? "You have been Successfully Registered"
                : "Something went wrong try again"}
            </span>
          )}
          <button
            className={` mx-auto ${
              isLoading ? "pointer-events-none" : ""
            }  bg-[#FFFFFF80] border-transparent flex justify-center items-center text-white sm:py-[12.5px] sm:px-[28.269px] py-[2.20930232558vw] lg:py-[1.69444444444vh] px-[5.41139534884vw] lg:px-[4.81692708333vw] border100 lg:text21 mtext16 f600 lg:border-[0.02604166666vw] border-[0.5px] relative before:z-[-1] hover:before:opacity-[1] before:opacity-0 before:content-[''] before:border100 before:absolute before:top-0 before:lrf1 before:size-full before:ring-2 before:ring-[#F62D17] before:blur-[6px] hover:border-[#F62D17]  before:transition-all before:duration-500 transition-all duration-500`}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PreRegisterPopup;
