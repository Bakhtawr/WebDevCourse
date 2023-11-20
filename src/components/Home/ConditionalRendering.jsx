
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CRendering = 
`const TernaryConditionalRendering = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, user!</p>
      ) : (
        <p>Please log in to view this content.</p>
      )}
    </div>
  );
};`

const HasDate = 
`const LogicalAndConditionalRendering = ({ hasData, data }) => {
  return (
    <div>
      {hasData && <p>Data: {data}</p>}
    </div>
  );
};
`

const IElse = 
`const IfElseConditionalRendering = ({ isMorning }) => {
  if (isMorning) {
    return <p>Good morning!</p>;
  } else {
    return <p>Good evening!</p>;
  }
};
`

const Example =
`function Item({name, itemPacked})
{
  if (itemPacked)
  {
    return <li style={{background : 'green' , color : 'white', padding : 10}}>{name}, Ready to deliever</li>
  }
  else
  {
    return <li style={{background : 'Red' , color : 'white', padding : 10}}>{name}, Your Order Cancelled</li>
  }
}

export default function ConditionalRendering() {
  return (
    <div>
<h3>Conditional Rendering With Props</h3>
      <ul>
       <li><Item name="Assam" itemPacked={true}/></li>
       <li><Item name="John" itemPacked={false}/></li>
       <li><Item name="Jim" itemPacked={true}/></li>
       <li><Item name="William" itemPacked={true}/></li>
      </ul>
      </div>
  )
}
`

function Item({name, itemPacked})
{
  if (itemPacked)
  {
    return <li style={{background : 'green' , color : 'white', padding : 10}}>{name}, Ready to deliever</li>
  }
  else
  {
    return <li style={{background : 'Red' , color : 'white', padding : 10}}>{name}, Your Order Cancelled</li>
  }
}

export default function ConditionalRendering() {
  return (
    <div>
      <h1>Simple Conditional Rendering</h1>
      <h3>OR condition</h3>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}  language="javascript" style={atomOneDark }>  
      {CRendering}
      </SyntaxHighlighter>
      <h3>AND Condition</h3>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}  language="javascript" style={atomOneDark }>  
      {HasDate}
      </SyntaxHighlighter>
      <h3>IF ELSE Condition</h3>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}  language="javascript" style={atomOneDark }>  
      {IElse}
      </SyntaxHighlighter>
      <h3>Conditional Rendering With Props</h3>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}  language="javascript" style={atomOneDark }>  
      {Example}
      </SyntaxHighlighter>
      <ul>
       <li><Item name="Assam" itemPacked={true}/></li>
       <li><Item name="John" itemPacked={false}/></li>
       <li><Item name="Jim" itemPacked={true}/></li>
       <li><Item name="William" itemPacked={true}/></li>
      </ul>
    



    </div>
  )
}
