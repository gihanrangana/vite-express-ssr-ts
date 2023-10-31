import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// ReactDOM.createRoot(document.getElementById('app')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.hydrateRoot(
  document.getElementById("app") as HTMLElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
