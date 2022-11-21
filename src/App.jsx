import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";

import Layout from "./layouts";
import RequireAuth from "./components/requireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />

        {/* Protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
