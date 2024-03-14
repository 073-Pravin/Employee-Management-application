import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import MainContainer from "./components/MainContainer";
import { Toaster } from "react-hot-toast";
import {EmployeeProvider} from "./contexts/EmployeeProvider";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <EmployeeProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <LandingPage>
            <Routes>
              <Route exact path="/" element={<MainContainer />}></Route>
            </Routes>
          </LandingPage>
        </EmployeeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
