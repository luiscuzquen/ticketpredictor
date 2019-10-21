import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";

function App() {
  return (
    <div style={{ height: "300px", position: "auto" }}>
      <Layout fixedHeader>
        <Header
          title={
            <span>
              <span style={{ color: "#ddd" }}>LZBFGA / Quote Sheet</span>
            </span>
          }
        />
        <Drawer title="Store">
          <Navigation>
            <a href="Camelback" value="Camelback">Camelback</a>
            <a href="Broadway" value="Broadway">Broadway</a>
            <a href="Ina" value="Ina">Ina</a>
            <a href="Bell" value="Bell">Bell</a>
            <a href="Chandler" value="Chandler">Chandler</a>
            <a href="Mesa" value="Mesa">Mesa</a>
            <a href="Scottsdale" value="Scottsdale">Scottsdale</a>
            <a href="PrescottValley" value="Prescott Valley">Prescott Valley</a>
            <a href="Goodyear" value="Goodyear">Goodyear</a>
            <a href="/">Back</a>
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
