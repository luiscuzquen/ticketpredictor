import React from "react";
import Landing from "./landingPage";
import { Switch, Route } from "react-router-dom";
import '../App.css'
import Camelback from './Stores/01Camelback';
import Broadway from './Stores/03Broadway';
import Ina from './Stores/04Ina';
import Bell from './Stores/05Bell';
import Chandler from './Stores/06Chandler';
import Mesa from "./Stores/07Mesa";
import Scottsdale from './Stores/08Scottsdale';
import PrescottValley from './Stores/09PrescottValley';
import Goodyear from './Stores/10Goodyear';

const Main = () => (
  <Switch>
    <Route exact ="/" component={Landing} />
    <Route path='/Camelback' component={Camelback}/>
    <Route path='/Broadway' component={Broadway}/>
    <Route path='/Ina' component={Ina}/>
    <Route path='/Bell' component={Bell}/>
    <Route path='/Chandler' component={Chandler}/>
    <Route path="/Mesa" component={Mesa} />
    <Route path='/Scottsdale' component={Scottsdale}/>
    <Route path='/Prescottvalley' component={PrescottValley}/>
    <Route path='/Goodyear' component={Goodyear}/>
  </Switch>
);

export default Main;
