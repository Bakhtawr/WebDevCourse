import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const PropsCode = `
function Avatar({userDetail}) {
  return (
    <div>
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
    <p>{userDetail.name} , {userDetail.Department}</p>
    </div>
  );
}




export default function PropsComponentExample() {
  return (
    <div>
        <h3>Props</h3>
     <Avatar userDetail = {{ name: 'John Doe', Department: 'Software Engineer' }}/> 
    </div>
  )
}
`

function Avatar({userDetail}) {
  return (
    <div>
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
    <p>{userDetail.name} , {userDetail.Department}</p>
    </div>
  );
}

export default function PropsComponentExample() {
  return (
    <div>
        <h3>Props</h3>
      <p> Props are a mechanism for passing data from a parent component to a child component. They allow you to customize and configure child components, making them dynamic and reusable. Props are read-only, meaning that a child component cannot modify the props it receives from its parent.</p>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}  language="javascript" style={atomOneDark }>  
      {PropsCode}
    </SyntaxHighlighter>
    <Avatar userDetail = {{ name: 'John Doe', Department: 'Software Engineer' }}/> 
    </div>
  )
}
