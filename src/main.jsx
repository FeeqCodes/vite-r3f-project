// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'


// import React from 'react'

import ReactDOM from 'react-dom/client'
import { Suspense, useState } from 'react'
import './index.css'
import Overlay from './../layout/Overlay'
import { FadeIn, LeftMiddle } from './../layout/styles'
import Dollar from './App.jsx'




function App() {
  const [speed, set] = useState(1)
  return (
    <>
      <Suspense fallback={null}>
        <Dollar speed={speed} />
        <FadeIn />
      </Suspense>
      <Overlay />
      <LeftMiddle>
        <input type="range" min="0" max="10" value={speed} step="1" onChange={(e) => set(e.target.value)} />
      </LeftMiddle>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
