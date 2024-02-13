
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import routeList from './routes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routeList &&
          routeList?.map((routeItem, routeIndex) => {
            //console.log("routeItem----------", routeItem);
            return (
              <Route path={routeItem.path} element={routeItem.element} key={routeIndex} />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
