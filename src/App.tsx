import { Route, Routes } from "react-router";

import AppLayout from "./layouts/AppLayout";
import Articles from "./pages/Articles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Articles />} />
      </Route>
    </Routes>
  );
}

export default App;
