import React from "react";
import { Button } from "semantic-ui-react";
import "./formstyles.css";

export default function Time({ time, setForm }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexGrow: "1",
        margin: "1px 0",
      }}
    >
      <input defaultValue="07:45" onChange={setForm} type="time" />
      <input name="mondayEndTime" type="time" />
      <Button primary>Select All</Button>
    </div>
  );
}
