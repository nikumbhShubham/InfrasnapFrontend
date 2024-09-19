
import './App.css'
import ContinueProject from './Components/ContinueProject'
import CreateProject from './Components/CreateProject'
import Dashboard from './Components/Dashboard'
import Homepage from './Components/Homepage'
import Materials from './Components/Materials'
import UploadPhases from './Components/UploadPhases'
import ImageUpload from './Components/UploadImage'
import ProgressTracker from './Components/ProgressTracker'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      {/* <Homepage/>
      <CreateProject/>
      <ContinueProject/>
      <UploadPhases/>
      <Materials/> 
      <Dashboard/>
      <ImageUpload/>
      <ProgressTracker/> */}


<Router>
      <div>
        <Routes>
          {/* Define the routes for your components */}
          <Route path="/" element={<Homepage />} />
          <Route path="/createProject" element={<CreateProject />} />
          <Route path="/continueProject" element={<ContinueProject />} />
          <Route path="/materials" element={<UploadPhases />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/uploadphases" element={<Materials />} />
          <Route path="/uploadimage" element={<ImageUpload />} />

        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
