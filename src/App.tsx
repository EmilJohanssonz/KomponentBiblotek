import { useState } from "react";
import "./App.css";
import LoginPage from "./komponenter/login/loginGardienGlas";
import Footer from "./komponenter/currentYear/currentYear";
// import Button from "./komponenter/button/button";
// import Card from "./komponenter/Card/Card";
// import Modal from "./komponenter/modal/modal";
// import RadioGroup from "./komponenter/button/radiobutton";
// import Checkbox from "./komponenter/button/checkbox";
// import Navbar from "./komponenter/Nav/navbar";
// import DarkModeSwitch from "./komponenter/dark/dark";
// import ContactForm from "./komponenter/contact/contactform";
// import Snackbar from "./komponenter/snackbar/snackbar";
// import Slider from "./komponenter/slider/sliders";
// import Alert from "./komponenter/alert/alert";
// import ToolTip from "./komponenter/tool/tool";
// import Accordion from "./komponenter/Accordion/Accordion";
// import ProgressBar from "./komponenter/slider/progressbar";
// import TodoList from "./komponenter/list/todoList";
// import InputDemo from "./komponenter/controlledComp/controlledList";
// import Footer from "./komponenter/currentYear/currentYear";
// import AnimalList from "./komponenter/list/addList";
// import DropdownEz from "./komponenter/dropdown/dropdown";
// import MultiSelectDropdown from "./komponenter/dropdown/dropdownMulti";
// import SearchableDropdown from "./komponenter/dropdown/dropdownSearch";
// import HamburgerMenu from "./komponenter/Nav/hamburage";
import HamburgerMenu2 from "./komponenter/Nav/hamburgare2";
import LoginPageMinmal from "./komponenter/login/loginMinimal";
import LoginPageAnimate from "./komponenter/login/loginAnimate";
import LoginPageSplit from "./komponenter/login/loginSplit";
import GlowingCard from "./komponenter/Card/glowingCard";
import Hero from "./komponenter/imgComp/heroImg";
import ImageSlider from "./komponenter/imgComp/sliderImg";
import ImageSliderHover from "./komponenter/imgComp/sliderImgHover";
import ImageSlider3D from "./komponenter/imgComp/3dSlider";

function App() {
  // const [selected, setSelected] = useState("option1");
  // const [checked, setChecked] = useState(false);

  // function handleSelection(option: string): void {
  //   throw new Error("Function not implemented.");

  //   const handleSelectSearch = (option: string) => {
  //     console.log("Valt:", option);
  //   };
  // }

  return (
    <>
      <HamburgerMenu2 />
      <main className="pt-20">
        <ImageSlider3D />
      </main>
      <Footer company="EmilDev" />
    </>
  );
}

export default App;
