import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "what is react?",
    content: "A front end javascript framework"
  },
  {
    title: "why use react?",
    content: "It is a favorite among engineers"
  },
  {
    title: "How to use react?",
    content: "By creating components"
  }
]

const options = [
  {
    label: "red",
    value: "red"
  },
  {
    label: "blue",
    value: "blue"
  },
  {
    label: "green",
    value: "green"
  }
];

export default () => {

  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="container">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle</button>
      { showDropdown ?
        <Dropdown
          onSelectedChange={setSelected}
          selected={selected}
          options={options}
        /> : null} */}
        <Translate />
    </div>
  );
}