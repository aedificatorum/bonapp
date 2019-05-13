import React from "react";

const Planner = () => {
  const [value, setValue] = React.useState(
    localStorage.getItem('myValueInLocalStorage') || ''
  );

  React.useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]);

  const onChange = event => setValue(event.target.value);

  return (
    <div className="container">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12 m6">
              <textarea id="mondayLunch" class="materialize-textarea" value={value} onChange={onChange}/>
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
