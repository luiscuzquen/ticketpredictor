import React, {Component} from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import {Link} from "react-router-dom";

class App extends Component {
  render(){
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
            <Link to="Camelback" value="Camelback">Camelback</Link>
            <Link to="Broadway" value="Broadway">Broadway></Link>
            <Link to="Ina" value="Ina">Ina</Link>
            <Link to="Bell" value="Bell">Bell</Link>
            <Link to="Chandler" value="Chandler">Chandler</Link>
            <Link to="Mesa" value="Mesa">Mesa</Link>
            <Link to="Scottsdale" value="Scottsdale">Scottsdale</Link>
            <Link to="PrescottValley" value="Prescott Valley">Prescott Valley</Link>
            <Link to="Goodyear" value="Goodyear">Goodyear</Link>
            <Link to="/">Back</Link>
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
