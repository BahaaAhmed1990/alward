import { Navigate, Route, Routes } from "react-router-dom";
import Vr from "./ui/pages/vr/Vr";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={'/twin-house'} />}></Route>
        <Route path="/twin-house" element={<Vr />}></Route>
        <Route path="/town-house" element={<Vr />}></Route>
      </Routes>
    </>
  );
}

export default App;
