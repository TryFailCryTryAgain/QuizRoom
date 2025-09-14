import { BrowserRouter as MainRouter } from 'react-router-dom'
import AppRoutes from './router/router'
import './style/main.css';

function App() {

  return (
    <>
      <MainRouter>
        <div id="container">
          <AppRoutes />
        </div>
      </MainRouter>
    </>
  )
}

export default App
