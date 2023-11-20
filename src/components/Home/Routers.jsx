import { Grid } from '@mui/material'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Example = `
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import { Link} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
`;


export default function Routers() {
  return (
    <Grid container style={{paddingLeft: 30, marginBottom: 30}}>
      <Grid xs={12}>
      <h1>Router Reacts</h1>
      <p>Create React App doesn't include page routing.</p>
      <p>React Router is a popular library for handling routing in React applications. It enables the navigation among views of a React application, allowing users to interact with different parts of the user interface based on the URL.</p>
      <p>To add React Router in your application, run this in the terminal from the root directory of the application:</p>
      <code style={{background:'black', color: 'white', padding: 10 }}>npm i -D react-router-dom </code>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}  language="javascript" style={atomOneDark }>  
      {Example}
    </SyntaxHighlighter>
      </Grid>     
    </Grid>
  )
}