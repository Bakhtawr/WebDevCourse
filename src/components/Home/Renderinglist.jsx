import { filter } from '@chakra-ui/react';
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ListExample = 
`export default function Renderinglist() {
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];
  return (
    <div>
       {people.map(p =>( 
          <li style={{padding: 5, marginLeft : 20}}>{p.name}, {p.profession}</li>
       ))}
    </div>
  )
}
`

const Filtershow =
`export default function Renderinglist() {
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];
      // This is  how we filter data 
      const chemistpro = people.filter(p => p.profession === 'chemist');
      return (
        <div>
        <h3>Filtering arrays of items </h3>
        <h4>Chemist Professor</h4>
        {chemistpro.map(p => (
         <li style={{padding: 5, marginLeft : 20}}>{p.name}, {p.profession}</li>
        ))}
        </div>
      )
    }
`

export default function Renderinglist() {
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];
      
      // This is  how we filter data 
      const chemistpro = people.filter(p => p.profession === 'chemist');

  return (
    <div>
      <h1>Rendering List</h1>
      <p>Rendering a list of items in React involves mapping over an array of data and creating a React component for each item. Here's a simple example:</p>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}  language="javascript" style={atomOneDark }>  
      {ListExample}
    </SyntaxHighlighter>
       {people.map(p =>( 
          <li style={{padding: 5, marginLeft : 20}}>{p.name}, {p.profession}</li>
       ))}

       <h3>Filtering arrays of items </h3>
       <h4>Chemist Professor</h4>
       <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}  language="javascript" style={atomOneDark }>  
      {Filtershow}
    </SyntaxHighlighter>
       {chemistpro.map(p => (
        <li style={{padding: 5, marginLeft : 20}}>{p.name}, {p.profession}</li>
       ))}

    </div>
  )
}
