import { Route, Routes } from "react-router";

import AppLayout from "./layouts/AppLayout";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Articles />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
