import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import MainContainer from "./components/MainContainer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LandingPage>
          <Routes>
            <Route exact path="/" element={<MainContainer/>}></Route>
          </Routes>
        </LandingPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
