import "./App.css";
import MyRoutes from "./components/MyRoutes";
import Navbar from "./components/NavBar/NavBar";
import Home from "./components/screens/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
    </div>
  );
}

export default App;
