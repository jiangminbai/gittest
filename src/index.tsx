import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import LandingPage from './tpl/landing-page/LandingPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/**
 * css custom
 *   1.one-off customize
 *     a.sx prop *
 *     b.class name
 *       i.plain css - StyledEngineProvider
 *       ii.global css
 *       iii.styled css *
 *     c.state classes
 *   2.reusable component
 *   3.global theme overrides *
 *   4.global css override
 *     a.GlobalStyles
 *     b.CssBaseline
 * Dark mode
 *   1.default
 *   2.custom palette
 * Color
 * customizing the theme
 * creating themed components
 *   1.create the component slots
 *   2.create the component
 *   3.style the slot with ownerState
 *   4.support theme default props 
 * themed components - components key
 *   1.defaultProps
 *   2.styleOverrides
 *   3.create new component variant - variant key
 *   4.theme variables
 * tokens
 */
