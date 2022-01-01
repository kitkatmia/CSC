import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";


const theme = {
  // allows you to stylize the different themes for buttons
  // note: this is an OBJECT (dictionary)
  blue: {
    default: "#3949ab",
    hover: "#9fa8da"
  },
  pink: {
    default: "#ff4081",
    hover: "#ff80ab"
  }
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background-color: black;
`;


// Initialize a constant named "Button" that styles the button
const Button = styled.button`
  background-color: ${(props) =>
    theme[props.theme]
      .default}; /* This is an arrow function; theme[props.theme] gets the object theme, but .default lets us acess the default color*/
  color: white;
  padding: 5px 15px; /* add padding 5px of padding vertically and 15px horizontally */
  border-radius: 5px;
  outline: 0; /* remove outline on button */
  box-shadow: 0px 2px 2px gray;
  text-transform: uppercase; /* converts all text to uppercase */
  margin: 10px 0px; /* 10px vertically */
  cursor: pointer; /* cursor is changed to a pointer when you hover over button */
  transition: ease background-color 250ms; /* makes the animation more smooth when you hover over button */
  /*  */

  &:hover {
    /* &:hover allows you to control what happens when you hover over the button */
    background-color: ${(props) =>
    theme[props.theme]
      .hover}; /* same thing here except now we're acessing the hover color */
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  // this specifies the default theme for the const "Button"
  theme: "blue" // notice how the string here matches the blue object within the const theme
};

function clickMe() {
  alert("You clicked me!");
}

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  /* runs only if the active is set */
  ${({ active }) =>
    active &&
    `
    opacity: 1
  `}
`;
// allows you to select different buttons and have the other buttons deselect
const types = ["Cash", "Credit Card", "Bitcoin"];
function ToggleGroup() {
  // the setActive handler will allow you to set a new state
  const [active, setActive] = useState(types[0]); // initialize the active state to be cash
  // the div below acts as a wrapper
  // within it, you run the arrow function over every single one of the types
  return (
    <div>
      {types.map((type) => (
        // when the current state = type we're rendering, button = active and ButtonToggle func is activated
        // when button is clicked, it is set to active and the rest are set to unactive
        <ButtonToggle active={active === type} onClick={() => setActive(type)}>
          {type}
        </ButtonToggle>
      ))}
    </div>
  );
}

export default function App() {
  return (
    // Need to wrap the two divs with a fragment (<></>) because you can't render two "siblings" together like that
    <>
      <Title>HELLO WORLD</Title>
      {/* first div */}
      <div>
        {/* onClick={call_some_function} ---> when button clicked, some function is called */}
        <Button theme="pink" onClick={clickMe}>
          {/* // To customize the button, replace <button></button> with YOUR variable; Since my constant in named Button, it would look like <Button></Button> */}
          Pink Button
        </Button>
      </div>

      {/* second div */}
      <div>
        {/* disabled onClick does what it implies; disables the onClick function */}
        <Button disabled onClick={clickMe}>
          Disabled Button
        </Button>
      </div>

      {/* Link */}
      <a href="https://www.google.com/" target="_blank">
        <div>
          <Button>Link Button</Button>
        </div>
      </a>

      {/* Calling the function toggle group (which gives a set of commands to the cash, credit, and bitcoin buttons) */}
      <ToggleGroup />
    </>

  );
}