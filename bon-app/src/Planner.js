import React from "react";

const Planner = () => {
  return (
    <div className="container">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12 m6">
              <textarea id="mondayLunch" class="materialize-textarea" />
              <label for="mondayLunch">Monday Lunch</label>
            </div>
            <div class="input-field col s12 m6">
              <textarea id="mondayDiner" class="materialize-textarea" />
              <label for="mondayDiner">Monday Diner</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12 m6">
              <textarea id="tuesdayLunch" class="materialize-textarea" />
              <label for="tuesdayLunch">Tuesday Lunch</label>
            </div>
            <div class="input-field col s12 m6">
              <textarea id="tuesdayDiner" class="materialize-textarea" />
              <label for="tuesdayDiner">Tuesday Diner</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Planner;
