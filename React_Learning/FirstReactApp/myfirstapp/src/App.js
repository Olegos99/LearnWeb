import { Component } from "react";
import PersonalData from './PersonalData.js';
import './App.css'; // importing css file
import StateComp from './StateComp.js';
import AditionComponent from './AditionComponent.js';
import Ex3 from './LessonComponents/Ex3.js';
import Ex32 from './LessonComponents/Ex32.js';
import Ex33 from './LessonComponents/Ex33.js';
import Ex35 from './LessonComponents/Ex35ContainerforEx3.js';




class App extends Component {
  render (){
    return(
      <div className="App">
        {/* <PersonalData fullname = "Oleg Magarill" adress = "Some street israel"/>
        <PersonalData fullname = "Mistyc Man" adress = "Void"/>
        <PersonalData fullname = "Capitan morgan" adress = "Ship in caribian ocean"/>
        <StateComp></StateComp>
        <AditionComponent></AditionComponent> */}
        <Ex3></Ex3>
        <Ex32></Ex32>
        <Ex35></Ex35>
        {/* <ul>
          <Ex33 Name ="Oleg" Age="22" City="Haifa"></Ex33>
          <Ex33 Name ="Ron" Age="20" City="Telaviv"></Ex33>
          <Ex33 Name ="Dov" Age="27" City="Ashdod"></Ex33>
          <Ex33 Name ="Vered" Age="45" City="Lod"></Ex33>
        </ul> */}
      </div>
    );
  }
}

export default App;
