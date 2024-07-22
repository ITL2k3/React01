// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={ viteLogo } className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={ reactLogo } className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={ () => setCount((count) => count + 1) }>
//           count is { count }
//         </button>
//         <p>

//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

import * as React from 'react'

const list = [
  {
    title: 'React',
    url: 'https://react.js.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectId: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan abramov',
    num_comments: 2,
    points: 5,
    objectId: 1
  },

]

function Item(item) {
  return (
    <>
      <span>
        <a href={ item.url }>{ item.title }</a>

      </span>
      <p>{ item.author }</p>
      <p>{ item.num_comments }</p>
    </>
  )
}

function List() {
  return (
    <ul>
      { list.map((item) => {
        return (
          <li key={ item.objectId }>
            {Item(item)}
          </li>
        )
      }) }
    </ul>

  )

}
function Search() {
  return (
    <>
      <label htmlFor="inp">this is the label</label>
      <input type="text" id="inp" />
    </>
  )
}

function App() {
  return (
    <div>

      <h1>hello world</h1>

      <List />
      <Search />

    </div>
  )
}

export default App
