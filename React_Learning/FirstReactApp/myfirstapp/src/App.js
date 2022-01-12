import { Component } from "react";
import PersonalData from './PersonalData.js';
import './App.css'; // importing css file
import StateComp from './StateComp.js';
import AditionComponent from './AditionComponent.js';




class App extends Component {
  render (){
    return(
      <div>
        <PersonalData fullname = "Oleg Magarill" adress = "Some street israel"/>
        <PersonalData fullname = "Mistyc Man" adress = "Void"/>
        <PersonalData fullname = "Capitan morgan" adress = "Ship in caribian ocean"/>
        <StateComp></StateComp>
        <AditionComponent></AditionComponent>

      </div>
    );
  }
}

export default App;
