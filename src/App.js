import React, {Component} from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";

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
          <a href="\Quote-Sheet\Camelback">Camelback</a>
            <a href="\Quote-Sheet\Broadway">Broadway</a>
            <a href="\Quote-Sheet\Ina">Ina</a>
            <a href="\Quote-Sheet\Bell">Bell</a>
            <a href="\Quote-Sheet\Chandler">Chandler</a>
            <a href="\Quote-Sheet\Mesa">Mesa</a>
            <a href="\Quote-Sheet\Scottsdale">Scottsdale</a>
            <a href="\Quote-Sheet\PrescottValley">Prescott Valley</a>
            <a href="\Quote-Sheet\Goodyear">Goodyear</a>
            <a href="\Quote-Sheet\">Back</a>
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
