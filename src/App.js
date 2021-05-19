import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
class App extends Component {
  hideToggle() {
    var selectorId = document.querySelector(".mdl-layout");
    selectorId.MaterialLayout.toggleDrawer();
  }

  render() {
    return (
      <div style={{ height: "300px", position: "auto" }}>
        <Layout fixedHeader>
          <Header
            title={
              <span>
                <span style={{ color: "#ddd" }}>Quote Sheet</span>
              </span>
            }
          />
          <Drawer>
            <Navigation>
              <a href="#/" onClick={() => this.hideToggle()}>
                <img
                  id="App-logo-small"
                  src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="lost"
                />
              </a>
              <a href="#/Camelback" onClick={() => this.hideToggle()}>
                Camelback
              </a>
              <a href="#/Broadway" onClick={() => this.hideToggle()}>
                Broadway
              </a>
              <a href="#/Ina" onClick={() => this.hideToggle()}>
                Ina
              </a>
              <a href="#/Bell" onClick={() => this.hideToggle()}>
                Bell
              </a>
              <a href="#/Chandler" onClick={() => this.hideToggle()}>
                Chandler
              </a>
              <a href="#/Mesa" onClick={() => this.hideToggle()}>
                Mesa
              </a>
              <a href="#/Scottsdale" onClick={() => this.hideToggle()}>
                Scottsdale
              </a>
              <a href="#/PrescottValley" onClick={() => this.hideToggle()}>
                Prescott Valley
              </a>
              <a href="#/Goodyear" onClick={() => this.hideToggle()}>
                Goodyear
              </a>
              <a href="#/Reno" onClick={() => this.hideToggle()}>
                Reno
              </a>
              <a href="#/Riverdale" onClick={() => this.hideToggle()}>
                Riverdale
              </a>
              <a href="#/Draper" onClick={() => this.hideToggle()}>
                Draper
              </a>
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
