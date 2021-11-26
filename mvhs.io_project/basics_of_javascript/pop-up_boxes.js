// confirm, prompt, and alert DO NOT work in VS code; you need to run them in a browser. 
// To do this, open an html file and write this into it:
// <!DOCTYPE html> 
    // <html> 
    //     <head> 
    //         <title>Give it a title</title> 
    //     </head> 
    //     <body> 
    //         <script> Your js file </script> 
    //     </body> 
    // </html>

confirm("Hi!") // Confirm boxes will return "true" if ok is selected, and return "false" if cancel is selected.
prompt('How old are you?'); //  Prompt boxes will return whatever is in the text box. They also have an optional second parameter, which is the pre-filled text.
alert("Hello"); // Alert boxes will not return anything; they simply tell the viewer something and they have to click ok.