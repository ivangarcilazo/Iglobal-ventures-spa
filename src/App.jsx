import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/common/Layout/Layout"
import ProviderAuth from "./components/common/Provider/ProviderAuth"
import Home from "./pages/Home/Home"
import Agenda from "./pages/Agenda/Agenda"
import LogRegUser from "./pages/LogRegUser/LogRegUser"

function App() {

  return (
    <ProviderAuth>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>} 
          />
           <Route path="/users/:action" element={
            <Layout>
              <LogRegUser />
            </Layout>} 
          />
           <Route path="/agenda" element={
            <Layout>
              <Agenda />
            </Layout>} 
          />
          <Route path="*"  element={
            <Layout>
              <Home />
            </Layout>} 
          />
        </Routes>
      </Router>
    </ProviderAuth>
  )
}

export default App
