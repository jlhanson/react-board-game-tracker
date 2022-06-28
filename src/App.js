import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import BoardgamePage from './pages/BoardgamePage'

function App() {
  return (
    <>
      <Router>
        <NavigationBar username="gimikz" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boardgames" element={<BoardgamePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
