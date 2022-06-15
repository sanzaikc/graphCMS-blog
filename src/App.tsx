import { Route, Routes } from "react-router";

import AppLayout from "./layouts/AppLayout";
import Articles from "./pages/Articles";
import TheArticle from "./pages/TheArticle";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Articles />} />
        <Route path=":slug" element={<TheArticle />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
