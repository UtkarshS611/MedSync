import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home"
import DashboardLayout from "./Components/Dashboard/DashboardLayout";
import { Chat } from "./Components/Dashboard/Pages/Chat/Chat";
import { Symptoms } from "./Components/Dashboard/Pages/Symptoms/Symptoms";
import { Medications } from "./Components/Dashboard/Pages/Medications/Medications";
import { Records } from "./Components/Dashboard/Pages/Records/Records";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="chat" element={<Chat />} />
          <Route path="symptoms" element={<Symptoms />} />
          <Route path="medications" element={<Medications />} />
          <Route path="records" element={<Records />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
