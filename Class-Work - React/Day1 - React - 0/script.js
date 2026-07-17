// console.log(React)
const root = document.querySelector('#root')
const h1 = React.createElement('h1' , {} ,"Hello This Is H1 TG")
const p = React.createElement('p' , {} ,"Hello This Is p")

let reactDom = ReactDOM.createRoot(root)
reactDom.render(h1)
console.log(h1)