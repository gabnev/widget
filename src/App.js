/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

  const [selected, setSelected] = useState(options[0])

  return (
    <div className="container">

      <Header />

      <Route path="/" >
        <Accordion items={items} />
      </Route>

      <Route path="/list" >
        <Search />
      </Route>

      <Route path="/dropdown" >
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/translate" >
        <Translate />
      </Route>

    </div>
  );
}