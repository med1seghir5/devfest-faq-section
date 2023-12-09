import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

const Collapse = ({ isOpen, onToggle, title, content }) => {
  return (
    <div
      className={`collapse border rounded-none max-w-[450px] ${
        isOpen ? "open" : ""
      }`}
    >
      <input type="checkbox" checked={isOpen} onChange={onToggle} />

      <div className="collapse-title text-xl font-medium flex w-full space-x-10 items-center flex-row">
        <label className="w-full justify-start">
          <p>{title}</p>
        </label>
        <span className="w-fit flex ps-5 justify-end text-end items-end">
          {isOpen ? (
            <Minus size={20} key={title} color="red" />
          ) : (
            <Plus size={20} key={title} color="green" className="rounded-sm" />
          )}
        </span>
      </div>

      <div className="collapse-content duration-500 ease-in-out w-[400px]">
        {isOpen && <p className="font-light">{content}</p>}
      </div>
    </div>
  );
};

const FAQAccordions = () => {
  const [openedAccordion, setOpenedAccordion] = useState("");
  const accordions = [
    {
      title: "What is the meaning of hackathon?",
      content:
        "A hackathon is a coding event where computer programmers and other interested people collaborate to create new software or hardware projects",
    },
    {
      title: "What is the schedule for Devfest?",
      content: "DevFest 2023 will be held in 26, 27 and 28 December.",
    },
    {
      title: "Who organize this Devfest event?",
      content:
        "GDG Batna organizes DevFest with the hard work and dedication of all its members. Devest is made possible by the contributions of all its members.",
    },
  ];

  const handleOpen = (title) => {
    setOpenedAccordion(title === openedAccordion ? "" : title);
  };

  return (
    <ul className="space-y-3 pt-5 flex flex-col max-w-[500px]">
      {accordions.map((accordion) => (
        <Collapse
          key={accordion.title}
          isOpen={accordion.title === openedAccordion}
          onToggle={() => handleOpen(accordion.title)}
          title={accordion.title}
          content={accordion.content}
        ></Collapse>
      ))}
    </ul>
  );
};

export default FAQAccordions;
