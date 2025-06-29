let myData = "";

export const actions = {
  default: async ({ request }) => {
    // This function runs when the form is submitted
    const formData = await request.formData();
    const value = formData.get("exercise");

    if (typeof value === "string") {
      myData = value;
    } else {
      myData = "";
    }

    return {
      success: true,
      value: myData,
    };
  },
};
