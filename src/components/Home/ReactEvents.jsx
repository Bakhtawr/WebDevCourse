import React from 'react'
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ReactE = `
const ReactEvents = () => {
    function HandleClick(param)
    {
    alert('Button clicked!' + param);
   }
    return (
      <div>
        <Button variant="contained" onClick = {() => HandleClick('Parameter Example')} >Click</Button>
      </div>
    )
  }
`

const ReactEvents = () => {
    function HandleClick(param)
{
    alert('Button clicked!' + param);
}
  return (
    <div>
      <h1>React Events</h1>
      <p>Just like HTML DOM events, React can perform actions based on user events.</p>
      <p>React events are written in camelCase syntax</p>
      <p>React event handlers are written inside curly braces:</p>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}  language="javascript" style={atomOneDark }>  
      {ReactE}
    </SyntaxHighlighter>
    <Button variant="contained" onClick = {() => HandleClick('Parameter Example')} >Click</Button>
    </div>
  )
}
export default ReactEvents
