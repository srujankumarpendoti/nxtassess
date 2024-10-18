import Login from "./routes/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Assessment from "./routes/Assessment";
import Results from "./routes/Results";
import NotFound from "./routes/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

//12-10-2024 2hr 6.5hr 2hr
