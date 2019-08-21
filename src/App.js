import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main"

function App() {
  return (
    <div style={{ height: "300px", position: "auto" }}>
      <Layout fixedHeader>
        <Header
          title={
            <span>
              <span style={{ color: "#ddd" }}>LZBFGA / </span>
              <strong>Ticket Predictor</strong>
            </span>
          }
        />
        <Drawer title="Store">
          <Navigation>
            <a href="Camelback">Camelback</a>
            <a href="Broadway">Broadway</a>
            <a href="Ina">Ina</a>
            <a href="Bell">Bell</a>
            <a href="Chandler">Chandler</a>
            <a href="Mesa">Mesa</a>
            <a href="Scottsdale">Scottsdale</a>
            <a href="PrescottValley">Prescott Valley</a>
            <a href="Goodyear">Goodyear</a>
            <a href='/'>Back</a>
          </Navigation>
        </Drawer>
        <Content>
          <div>
            <Main />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
