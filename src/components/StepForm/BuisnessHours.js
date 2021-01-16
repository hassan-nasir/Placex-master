import React, { useState } from "react";
import { Button, Checkbox, Container, Header } from "semantic-ui-react";
import "./formstyles.css";

import Hours from "./Hours";

export default function BuisnessHours({ formData, setForm, navigation }) {
  const { name, address } = formData;
  // formData.times[0].monday.map((time) => console.log(time));
  // let times = formData.times.map((days) => days);
  // console.log(times);

  // Styling
  const style = {
    display: "flex",
    justifyContent: "space-between",
  };
  //Function for Toggling State on the toggle
  const [isToggle, setToggle] = useState(true);
  function toggled() {
    setToggle(!isToggle);
  }

  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center" }}>Buisness Hours</h1>
        <Container style={{ width: "70%" }}>
          <div style={style}>
            <Header as="h3">Always Open</Header>
            <Checkbox
              toggle
              defaultChecked={isToggle}
              onChange={toggled}
              checked={isToggle}
            />
          </div>
          <div style={style}>
            <Header as="h3">Open Specific Hours</Header>
            <Checkbox toggle checked={!isToggle} onChange={toggled} />
          </div>
        </Container>
        {!isToggle ? <Hours time={formData} /> : null}

        <Container style={{ width: "70%" }}>
          <Button secondary onClick={navigation.previous}>
            Back
          </Button>
          <Button floated="right" positive onClick={navigation.next}>
            Next
          </Button>
        </Container>
      </Container>
    </>
  );
}
