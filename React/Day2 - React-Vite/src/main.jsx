// // import { StrictMode } from 'react' 
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'


// console.log("hello Im main.jsx")

// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//     // <App />
//     App() //functional component only one time render
//   // </StrictMode>,
// )


// import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'


console.log("hello Im main.jsx")

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App /> // jsx compoenet vite understand jsx
    // App() //functional component only one time render
  // </StrictMode>,
)