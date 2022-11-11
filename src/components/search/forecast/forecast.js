import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEKS_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ForeCast = () => {

  const daysInaWeek = new Date().getDay();
  const forecastsDays = WEEKS_DAYS.slice(daysInaWeek, WEEKS_DAYS.length).concat(WEEKS_DAYS.slice(0, daysInaWeek));
  return <div>Forest</div>;
};

export default ForeCast;
