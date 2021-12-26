// git init : initialized the git repository
// git add -A : adds all files in the current directory
// git config --global user.email "my-email"
// git config --global user.name "my-name"
// git commit -m "message for the update"
// git push -u origin main

'use strict';

const user= {
    firstName: 'Stranger',
    lastName: ''
  };


function FirstNameUpdate()
{
    var x = document.getElementById("fname").value;
    user.firstName = x;
    UpdateGreetingMessage();
}

function LastNameUpdate()
{
    var y = document.getElementById("lname").value;
    user.lastName = y;
    UpdateGreetingMessage()
}

const inputfname = document.getElementById("fname");
const inputlname = document.getElementById("lname");

inputfname.addEventListener('change', FirstNameUpdate);
inputlname.addEventListener('change', LastNameUpdate);

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function App() {
  return (
    <div>
      
      <Clock />
      <Clock />
      <PicWiver
          photo={PhotosArray}
          text={PhotosArray}
          NumberOfPhotos={PhotosArray.length}
    />
    <br/>    <br/>      <PicWiver
          photo={PhotosArray}
          text={PhotosArray}
          NumberOfPhotos={PhotosArray.length}
    />
    <br/>    <br/>
    <SortArray
    ArrayToAnimate = {[3,9,-2,1,5,1,8,-5]}
    ArrayLenght = {8}
    />
    </div>

  );
}


const PhotosArray = [
  {
    id: 0,
    photo: '/PICs/Capture.PNG',
    text: "projectText",
    title: "11"
  },
  {
    id: 1,
    photo: '/PICs/FighterIm.PNG',
    text: "lolo",
    title: "22"
  },
  {
    id: 2,
    photo: '/PICs/RougeIm.PNG',
    text: "1234",
    title: "33"
  },
  {
    id: 3,
    photo: '/PICs/WizIm.PNG',
    text: "last",
    title: "44"
  } 
]

ReactDOM.render(
  <App />,
  document.getElementById('MyComponents')
);

  function UpdateGreetingMessage()
  { 
    // console.log(formatName(user));
    ReactDOM.render(
    <h1>Hello, {formatName(user)}!</h1>, //why element doesnt work???
    document.getElementById('root')
    );
   }

UpdateGreetingMessage();
