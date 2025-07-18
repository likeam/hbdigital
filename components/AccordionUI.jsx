"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import AllUsers from "./AllUsers";
import SpecificUser from "./SpecificUser";

const AccordionUI = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <section className=" w-[40rem]">
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            All Users
          </AccordionHeader>
          <AccordionBody>
            <AllUsers />
          </AccordionBody>
        </Accordion>
      </section>
      <section>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Search for Specific User
          </AccordionHeader>
          <AccordionBody>
            <SpecificUser />
          </AccordionBody>
        </Accordion>
      </section>
    </>
  );
};

export default AccordionUI;
