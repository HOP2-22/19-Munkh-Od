import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import { BlogPage } from "./pages/BlogPage";
import { Layout } from "./layout/layout";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<BlogPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
