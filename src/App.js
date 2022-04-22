import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';


const items = [{
  title: "What is react?",
  content: "React is a JS library"
},
{
  title: "Why use react?",
  content: "React is a favorite JS library among engineers."
},
{
  title: "How do you use react?",
  content: "By creating components."
},
];

const options = [
  {
    label: "Red",
    value: "red"
  },
  {
    label: "Green",
    value: "green"
  },
  {
    label: "Shade of Blue",
    value: "blue"
  },
]

const App = () => {

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path={"/"}>
        <Accordion items={items} />
      </Route>

      <Route path={"/list"}>
        <Search />
      </Route>

      <Route path={"/dropdown"}>
        <Dropdown
          label="Select a Color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options} />
      </Route>

      <Route path={"/translate"}>
        <Translate />
      </Route>

    </div >
  );
}

export default App;