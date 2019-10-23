import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";

class App extends Component {
  render() {
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
          <Drawer>
            <Navigation>
              <a href="Quote-Sheet/#/Camelback" value="Camelback">
                Camelback
              </a>
              <a href="Quote-Sheet/#/Broadway" value="Broadway">
                Broadway
              </a>
              <a href="Quote-Sheet/#/Ina" value="Ina">
                Ina
              </a>
              <a href="Quote-Sheet/#/Bell" value="Bell">
                Bell
              </a>
              <a href="Quote-Sheet/#/Chandler" value="Chandler">
                Chandler
              </a>
              <a href="Quote-Sheet/#/Mesa" value="Mesa">
                Mesa
              </a>
              <a href="Quote-Sheet/#/Scottsdale" value="Scottsdale">
                Scottsdale
              </a>
              <a href="/Quote-Sheet/#/PrescottValley" value="Prescott Valley">
                Prescott Valley
              </a>
              <a href="Quote-Sheet/#/Goodyear" value="Goodyear">
                Goodyear
              </a>
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
}

export default App;
