import React, { useEffect } from "react";
import { useState, useRef } from "react";
import {
  AccordionContainer,
  AccordionTitle,
  Button,
  AccordionContent,
} from "./AccordionStyle";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

/* A component which renders informative text in a accordion. */

const Accordion = ({ title, text }) => {
  /* A state for turning the accordion on/off. */

  const [active, setActive] = useState(true);
  const [height, setHeight] = useState("100%");

  const content = useRef(null);

  /* The useEffect updates the accordion when the active-state is changed. */

  useEffect(() => {
    setHeight(active ? `${content.current.scrollHeight}px` : "0px");
  }, [active]);

  /* Turns the accordion on/off depending on the state. */

  const toggleAccordion = () => {
    setActive(!active);
  };

  /* Renders the accordion depending on the state. */

  return (
    <AccordionContainer>
      <Button active={active} onClick={() => toggleAccordion()}>
        <AccordionTitle>{title}</AccordionTitle>
        {active ? (
          <ChevronUpIcon height="16px" />
        ) : (
          <ChevronDownIcon height="16px" />
        )}
      </Button>
      <AccordionContent ref={content} style={{ maxHeight: `${height}` }}>
        {text}
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
