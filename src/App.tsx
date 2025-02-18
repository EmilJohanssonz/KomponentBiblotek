import { useState } from "react";
import "./App.css";
import Button from "./komponenter/button/button";
import Card from "./komponenter/Card/Card";
import Modal from "./komponenter/modal/modal";
import RadioGroup from "./komponenter/button/radiobutton";
import Checkbox from "./komponenter/button/checkbox";
import Navbar from "./komponenter/Nav/navbar";
import DarkModeSwitch from "./komponenter/dark/dark";
import ContactForm from "./komponenter/contact/contactform";
import Snackbar from "./komponenter/snackbar/snackbar";
import Slider from "./komponenter/slider/sliders";
import Alert from "./komponenter/alert/alert";
import ToolTip from "./komponenter/tool/tool";
import Accordion from "./komponenter/Accordion/Accordion";
import ProgressBar from "./komponenter/slider/progressbar";
import TodoList from "./komponenter/list/todoList";
import InputDemo from "./komponenter/controlledComp/controlledList";
import Footer from "./komponenter/currentYear/currentYear";
import AnimalList from "./komponenter/list/addList";
import DropdownEz from "./komponenter/dropdown/dropdown";
import MultiSelectDropdown from "./komponenter/dropdown/dropdownMulti";
import SearchableDropdown from "./komponenter/dropdown/dropdownSearch";

function App() {
  const [selected, setSelected] = useState("option1");
  const [checked, setChecked] = useState(false);

  function handleSelection(option: string): void {
    throw new Error("Function not implemented.");

    const handleSelectSearch = (option: string) => {
      console.log("Valt:", option);
    };
  }

  function handleSelectSearch(option: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <Navbar />
        <DarkModeSwitch />
        <Button variant="contained" color="primary">
          Klicka här
        </Button>
        <Button variant="outlined" color="secondary">
          Avbryt
        </Button>
        <Card title="Mitt kort">
          <p>Detta är innehållet i kortet.</p>
        </Card>
        <Modal title="Viktig info">
          <p>Detta är en anpassad modal!</p>
        </Modal>
        <RadioGroup
          name="example"
          options={[
            { label: "Alternativ 1", value: "option1" },
            { label: "Alternativ 2", value: "option2" },
          ]}
          selectedValue={selected}
          onChange={setSelected}
        />
        <Checkbox
          label="Godkänn villkor"
          checked={checked}
          onChange={setChecked}
        />
        <ContactForm />
        <Snackbar />
        <Slider />
        <Alert message="This is a success alert!" type="success" />
        <ToolTip text="Hej">
          <span>Hover over me</span>
        </ToolTip>
        <Accordion />
        <div className="mt-5"></div>
        <ProgressBar progress={70} />
        <TodoList />
        <InputDemo />
        <AnimalList />
        <DropdownEz
          options={["Apple", "Banana", "Cherry"]}
          onSelect={handleSelection}
        />
        <MultiSelectDropdown options={["React", "Vite", "Typescript", "Javascript", "Tailwind", "Scss", "Css"]} />
        <SearchableDropdown
          options={["Red", "Green", "Blue", "Yellow", "Pink", "Lime", "Purple", "Crimson"]}
          onSelect={handleSelectSearch}
        />
        
        <Footer company="EmilDev" />
      </div>
    </>
  );
}

export default App;
