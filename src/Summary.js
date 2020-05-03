import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const logo = {
  paddingBottom: "21px",
  paddingTop: "28px"
};
export function Summary() {
  return (
    <div className="row">
      <div className="col-3">
        <div className="row">
          <div className="col-12" style={logo}>
            <h2>Dungeos & Dragons</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label htmlFor="character_name">Name</label>
            <br />
            <input id="character_name" className="form-control" />
          </div>
        </div>
      </div>
      <div className="col-3">
        <label htmlFor="character_class">Class and Level</label>
        <br />
        <div className="row">
          <div className="col-8">
            <input id="character_class" className="form-control" />
          </div>
          <div className="col-4">
            <input
              id="character_level"
              type="number"
              className="form-control"
            />
          </div>
        </div>
        <br />
        <label htmlFor="character_race">Race</label>
        <br />
        <div className="row">
          <div className="col-12">
            <input id="character_race" className="form-control" />
          </div>
        </div>
      </div>
      <div className="col-3">
        <label htmlFor="character_antecedents">Antecedents</label>
        <br />
        <div className="row">
          <div className="col-12">
            <input id="character_antecedents" className="form-control" />
          </div>
        </div>
        <br />
        <label htmlFor="character_alignment">Alignment</label>
        <br />
        <div className="row">
          <div className="col-12">
            <input id="character_alignment" className="form-control" />
          </div>
        </div>
      </div>
      <div className="col-2">
        <label htmlFor="player_name">Player Name</label>
        <br />
        <div className="row">
          <div className="col-12">
            <input id="player_name" className="form-control" />
          </div>
        </div>
        <br />
        <label htmlFor="xp">XP Points</label>
        <br />
        <div className="row">
          <div className="col-12">
            <input id="xp" className="form-control" type="number" />
          </div>
        </div>
      </div>
    </div>
  );
}
