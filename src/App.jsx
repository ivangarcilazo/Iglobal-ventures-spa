import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/common/Layout/Layout"

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <div className="w-full bg-white h-screen">asd</div>
            </Layout>} 
          />
        </Routes>
      </Router>
  )
}

export default App
