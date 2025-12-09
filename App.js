 import React from "react";
 import ReactDOM from "react-dom/client";

 //React.createElement => ReactElement - JS Object => HTMLElement(render)
 
 const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Namaste React"
 );

 console.log(heading); 

 //JSX is transpiled before it reaches the JS by Parcel -> Babel
 //JSX => Babel transpiles it to React.createElement => ReactElement- JSObject => HTMLElement(render)

 const jsxHeading1=(<h1 className="head" tabIndex="5">Namaste React using JSX</h1>);

 const jsxHeading = <h1 id="heading">Rendering JSX</h1>
 console.log(jsxHeading);
 const root= ReactDOM.createRoot(document.getElementById("root"));
 root.render(jsxHeading1);
