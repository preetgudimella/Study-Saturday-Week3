
/*

ReactDOM
    - https://reactjs.org/docs/rendering-elements.html
    - Rndering elements
        - Elements are the smallest building blocks of React apps
        - An element describes what you want to see on the screen
            const element = <h1>Hello, world</h1>
        - Unlike browser DOM elements, React elements are plain objects, and are cheap to create
        - React DOM takes care of updating the DOM to match the React elements
        - Elements are what components are “made of”
    - Rendering an element into the DOM
        - A <div> somewhere in the HTML file
            <div id="root"></div>
        - This is a “root” DOM node because everything inside it will be managed by React DOM
        - Applications built w/ just React usually have a SINGLE root DOM node
        - If integrating React into an existing app, it's okay to have any # of isolated root DOM nodes
        - To render a React element into a root DOM node, pass both??? to ReactDOM.render():
            const element = <h1>Hello, world</h1>;
            ReactDOM.render(
              element,
              document.getElementById('root')
            );
        - Updating the Rendered Element
            - React elements are immutable
                - Once you create an element, you can’t change its children or attributes
                - An element is like a single frame in a movie: it represents the UI at a certain point in time
        - React Only Updates What’s Necessary
          - React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state

1) Imported React
2) Imported ReactDOM
3) Use ReactDOM to render a heading that says 'Hello React!' ???
4) Created a components folder in the browser folder
5) Created a Main.js file

*/



// final

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';

ReactDOM.render(
  <Main />,                                         // Rendering the Main component in Main.js
  document.getElementById('app')                    // ??? app?
);



// 1

// console.log("Hello Webpack!")