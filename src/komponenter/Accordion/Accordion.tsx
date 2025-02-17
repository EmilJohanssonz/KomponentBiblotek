import { useState } from "react";


interface AccordionProps {
title: string;
content: React.ReactNode;
}

const AccordionIthem: React.FC<AccordionProps> = ({title, content}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b">
      <button onClick={toggleAccordion} className="w-full text-left py-2 px-4 bg-gray-200 hover:bg-gray-300 focus:outline-none">
        {title}
      </button>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
};

const Accordion: React.FC = () => {
  return (
    <div className="space-y-4">
      <AccordionIthem title="Item 1" content="Content for item 1" />
      <AccordionIthem title="Item 2" content="Content for item 2" />
      <AccordionIthem title="Item 3" content="Content for item 3" />
    </div>
  );
};

export default Accordion
