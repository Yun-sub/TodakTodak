import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Analysis from "./pages/Analysis";
import Setting from "./pages/Setting";
import Nav from "./Nav";

function App() {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/analysis' element={<Analysis />} />
          <Route path='/settings' element={<Setting />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
