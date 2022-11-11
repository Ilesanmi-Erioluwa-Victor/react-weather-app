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

const ForeCast = ({data}) => {
  const daysInaWeek = new Date().getDay();
  const forecastsDays = WEEKS_DAYS.slice(daysInaWeek, WEEKS_DAYS.length).concat(
    WEEKS_DAYS.slice(0, daysInaWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
    {data.list.slice(0, 7).map((item, index)=>(
      <AccordionItem key={index}>
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="daily-item">
              <img src={} className="icon-small"/>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
      </AccordionItem>
    ))}
      </Accordion>
    </>
  );
};

export default ForeCast;
