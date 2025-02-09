import { BrowserRouter, Routes, Route } from "react-router-dom";

//Layout
import DefaultLayout from "./components/DefaultLayout";

// Pages
import HomePage from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contatti" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
