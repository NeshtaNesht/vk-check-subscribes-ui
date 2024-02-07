import { Layout } from "antd";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Group, MainPage } from "./pages";
import { GROUP_PAGE, MAIN_PAGE } from "./AppUrls";
import { AuthContextProvider } from "./context";

function App() {
  return (
    <Layout>
      <AuthContextProvider>
        <Routes>
          <Route path={MAIN_PAGE} element={<MainPage />} />
          <Route path={GROUP_PAGE} element={<Group />} />
        </Routes>
      </AuthContextProvider>
    </Layout>
  );
}

export default App;
