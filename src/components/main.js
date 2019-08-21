import React from "react";
import Landing from "./landingPage";
import { Switch, Route} from 'react-router-dom'
//import Camelback from './01Camelback';
//import Broadway from './03Broadway';
//import Ina from './04Ina';
//import Bell from './05Bell';
//import Chandler from './06Chandler';
import Mesa from './Stores/07Mesa';
//import Scottsdale from './08Scottsdale';
//import PrescottValley from './09PrescottValley';
//import Goodyear from './10Goodyear';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    {/* <Route path='/' component={Camelback}/>
    <Route path='/' component={Broadway}/>
    <Route path='/' component={Ina}/>
    <Route path='/' component={Bell}/>
    <Route path='/' component={Chandler}/> */}
    <Route path='/' component={Mesa}/>
    {/* <Route path='/' component={Scottsdale}/>
    <Route path='/' component={PrescottValley}/>
    <Route path='/' component={Goodyear}/> */}
  </Switch> )

export default Main;