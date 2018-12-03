

// final

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

ReactDOM.render(
  <Main />,                                         // Rendering the Main component in Main.js
  document.getElementById('app')                    // Also:        document.querySelector('#app')  ->  index.html would be   <div #app></div> ???
                                                    // document.getElementById is searching index.html for 'app' (not referring to the app.js file), which is the wrapper for the entire component tree  ->  <div id="app"></div>  ->  Initializes the the React component tree in the DOM
                                                    // app could be in a CSS file to add styling
);



// 1

// console.log("Hello Webpack!")
