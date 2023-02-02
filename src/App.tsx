import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocationsAdmin from "./views/Admin/Locations";
import List from "./views/Locations";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<h1>Bienvenido</h1>} />
            <Route path="/locations" element={<List />} />
            <Route path="/admin" element={<LocationsAdmin />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App
