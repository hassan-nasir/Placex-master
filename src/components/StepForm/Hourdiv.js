import React from "react";
import { Checkbox } from "semantic-ui-react";
import "./formstyles.css";
import Time from "./Time";

export default function Hourdiv(props) {
  const { time, days, setForm } = props;
  // console.log(time);

  function toggle(x, y) {
    x(!y);
  }
  return (
    <div>
      <div className="hour_div">
        <div className="toggle-div">
          <span>{days.name}</span>
          <Checkbox toggle onChange={() => toggle(days.setDay, days.day)} />
        </div>

        {days.day ? <Time time={time} setForm={setForm} /> : null}
      </div>
    </div>
  );
}
