import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CarsExample,{CarCode}  from './CarsExample';

export const ReactBasic = () => {
  const ButtonComponent = `function MyButton(){ 
   return(
    <button>I'm a button</button>   
   )
  }` 
  const AppComponent = `export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  }`

  
  return (
    <div>
      <h1>React</h1>
      <p>React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.</p>
      <p>React also Used by Instragram and Netflix</p>
       <p>Simple Create a Component Button</p>
       <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}  language="javascript" style={atomOneDark }>
      {ButtonComponent}
    </SyntaxHighlighter>
    <p>Call MyButton Component in MyApp</p>
    <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}  language="javascript" style={atomOneDark }>
    {AppComponent}
    </SyntaxHighlighter>
    <p>Component Name Starts with Capital letter</p>
    <h3>What is JSX in React</h3>
    <p>
    JSX (JavaScript XML) is a syntax extension for JavaScript commonly used with React. It allows you to write HTML elements and components in a syntax that looks similar to XML or HTML, but it gets transformed into JavaScript code.
    </p>
    <h3>Rendering List Using Map Example</h3>
    <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}  language="javascript" style={atomOneDark }>
          {CarCode}   
      </SyntaxHighlighter>
    <CarsExample />
    </div>
  )
}

