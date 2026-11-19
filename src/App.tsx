import { Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/feed" replace />} />
        <Route path="/feed" element={<div>Feed Page</div>} />
        <Route path="/digest" element={<div>Digest Page</div>} />
        <Route path="/discover" element={<div>Discover Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
