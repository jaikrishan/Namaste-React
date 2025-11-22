// const heading = document.createElement("h1");
// heading.innerHTML = "This is normal heading";
// heading.style.color="red";

// const root = document.getElementById('root');
// root.appendChild(heading);

import React from 'react';
import ReactDom from 'react-dom/client';

const heading = React.createElement("h1",{},"This is react heading");
const root1 = ReactDom.createRoot(document.getElementById("root"));
root1.render(heading);

