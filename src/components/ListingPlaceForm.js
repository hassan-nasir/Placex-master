/* eslint-disable default-case */
import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import BuisnessDetails from "./StepForm/buisnessDetails";
import BuisnessHours from "./StepForm/BuisnessHours";

const defaultData = {
  name: "",
  address: "",
  city: "",
  phNumber: "",
  website: "",
  times: [
    { monday: [{ startTime: "" }, { endTime: "" }, { dayname: "monday" }] },
    { tuesday: [{ startTime: "" }, { endTime: "" }, { dayname: "tuesday" }] },
    {
      wednesday: [{ startTime: "" }, { endTime: "" }, { dayname: "wednesday" }],
    },
    { thursday: [{ startTime: "" }, { endTime: "" }, { dayname: "thursday" }] },
    { friday: [{ startTime: "" }, { endTime: "" }, { dayname: "friday" }] },
    { saturday: [{ startTime: "" }, { endTime: "" }, { dayname: "saturday" }] },
    { sunday: [{ startTime: "" }, { endTime: "" }, { dayname: "sunday" }] },
  ],
};
const steps = [
  { id: "buisness" },
  { id: "hours" },
  { id: "amenities" },
  { id: "photos" },
  { id: "review" },
  { id: "submit" },
];
export const ListingPlaceForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "buisness":
      return <BuisnessDetails {...props} />;
    case "hours":
      return <BuisnessHours {...props} />;
  }
  console.log(step);
  return <div></div>;
};
