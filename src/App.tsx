import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Container } from "./styles/styles";
import { Layout } from "./styles/styles";


function App() {
  return (
    <>
    <Layout>
      <Header />
      <SideBar />
      <Container>
        <Outlet />
      </Container>
    </Layout>
    </>
  )
}

export default App;
