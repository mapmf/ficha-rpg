import React from "react";
import "./styles.css";
import { Summary } from "./Summary";
import { Attribute } from "./Attribute";

const attributes = [
  { key: 1, name: "Força", value: 0 },
  { key: 2, name: "Destreza", value: 0 },
  { key: 3, name: "Constituição", value: 0 },
  { key: 4, name: "Inteligência", value: 0 },
  { key: 5, name: "Sabedoria", value: 0 },
  { key: 6, name: "Carisma", value: 0 }
];

export default function App() {
  return (
    <div className="App">
      <Summary />
      <br />
      <div className="row">
        <div className="col-4">
          <div className="row">
            <div className="col-6">
              {attributes.map(attribute => (
                <Attribute key={attribute.key} attribute={attribute} />
              ))}
            </div>
            <div className="col-6">Pericias</div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6">General Info</div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6">Additional Info</div>
          </div>
        </div>
      </div>
    </div>
  );
}
