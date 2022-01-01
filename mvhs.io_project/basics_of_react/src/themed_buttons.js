import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const theme = {
    // allows you to stylize the different themes for buttons
    // note: this is an OBJECT (dictionary)
    light: {
        default: "#f1f1f1",
        text_color: 'A9A9A9',
    },
    dark: {
        default: "#212121",
        text_color: "#d4d9dd",
    },
    spartan: {
        default: "#ffbf00",
        text_color: "#212121",
    }

};


// Initialize a constant named "Button" that styles the button
const Button = styled.button`
  background-color: ${(props) =>
        theme[props.theme]
            .default}; /* This is an arrow function; theme[props.theme] gets the object theme, but .default lets us acess the default color*/
  color: ${(props) =>
        theme[props.theme]
            .text_color};
  padding: 5px 15px; /* add padding 5px of padding vertically and 15px horizontally */
  border-radius: 5px;
  border-color: black;
  border-width: 2px;
  outline: 0; /* remove outline on button */
  box-shadow: 0px 2px 2px gray;
  text-transform: uppercase; /* converts all text to uppercase */
  margin: 10px 10px; /* 10px vertically */
  cursor: pointer; /* cursor is changed to a pointer when you hover over button */
  transition: ease background-color 250ms; /* makes the animation more smooth when you hover over button */
  /*  */
`;

Button.defaultProps = {
    // this specifies the default theme for the const "Button"
    theme: "light"// notice how the string here matches the blue object within the const theme
};

function clickMe() {
    // alert("You clicked me!");
    theme='dark'
};


export default function ThemedButtons() {
    return (
        // Need to wrap the two divs with a fragment (<></>) because you can't render two "siblings" together like that
        <>
            <div>
                {/* onClick={call_some_function} ---> when button clicked, some function is called */}
                <Button theme="light" onClick={clickMe}>
                    {/* // To customize the button, replace <button></button> with YOUR variable; Since my constant in named Button, it would look like <Button></Button> */}
                    Light-theme Button
                </Button>
                <Button theme='dark'>
                    Dark Theme Button
                </Button>
                <Button theme='spartan'>
                    Ugly Theme Button
                </Button>
            </div>
        </>

    );
}