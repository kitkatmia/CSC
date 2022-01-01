import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const BBBButton = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

// Define our `fg` and `bg` on the theme
const tttheme = {
    fg: "palevioletred",
    bg: "white"
};

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg
});

export default function BB() {
    // function clickMe() {
    //   alert("You clicked me!");
    // }
    return (
    // Need to wrap the two divs with a fragment (<></>) because you can't render two "siblings" together like that
    <>
        <ThemeProvider theme={tttheme}>
            <div>
                <BBBButton>Default Theme</BBBButton>

                <ThemeProvider theme={invertTheme}>
                    <BBBButton>Inverted Theme</BBBButton>
                </ThemeProvider>
            </div>
        </ThemeProvider>
    </>
            );
}