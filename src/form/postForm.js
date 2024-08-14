import axiosRequest from "@/lib/axiosRequest";

const postForm = async (states, endpoint) => {
  try {
    const formData = new FormData();

    // Append simple key-value pairs
    Object.keys(states).forEach((stateKey) => {
      // Handle array data for visitors
      if (Array.isArray(states[stateKey])) {
        states[stateKey].forEach((visitor, index) => {
          Object.keys(visitor).forEach((key) => {
            formData.append(`visitors[${index}][${key}]`, visitor[key]);
          });
        });
      } else {
        formData.append(stateKey, states[stateKey]);
      }
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/!/forms/${endpoint}`,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      data: formData,
      timeout: 15000
    };

    const data = await axiosRequest(config);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default postForm;
