import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import TopMenu from "./components/TopMenu";
import Home from "./components/Home"
import Add from './components/Add'
import Edit from './components/Edit'

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <TopMenu />
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/add" element={
          <Add />
        } />
        <Route path="/edit/:id" element={
          <Edit />
        } />
      </Routes>
    </div>
  );
}

export default App;
