class SortArray extends React.Component{
    constructor(props){
        super(props);
        this.state = {
              Animating : false,
              MadeFirstStep: false,
              I:0,
              J:0,
              MyArray:this.props.ArrayToAnimate,
              MyArrayLenght:this.props.ArrayLenght,
              StringToShow:"",
              AnimationStepDuration:2000,
              Finished: false,
              timeouts: [],
              AnimationTimout: null
            };



        this.handleArrayElementClick = this.handleArrayElementClick.bind(this);     
        this.ToggleAnimation = this.ToggleAnimation.bind(this);
        this.AnimationTick = this.AnimationTick.bind(this);
        this.NextAnimationStep = this.NextAnimationStep.bind(this);
        this.swap = this.swap.bind(this);
        this.SetNewIDsToAllComponents = this.SetNewIDsToAllComponents.bind(this);
        this.StopAnimation = this.StopAnimation.bind(this);
        this.finished = this.finished.bind(this);
        this.Restart = this.Restart.bind(this);
        this.ToggleAnimationHandler = this.ToggleAnimationHandler.bind(this);     
        this.getRandomIntInclusive = this.getRandomIntInclusive.bind(this);     
        
    }



    componentDidMount() {
      localStorage.setItem("array", JSON.stringify(this.props.ArrayToAnimate));

      this.Restart();
        //this.state.MyBackupArray = this.state.MyArray;
      }
  
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      handleArrayElementClick(e)
      {
        if(!this.state.Finished || !this.state.MadeFirstStep)
        {
          var newValue = 0;
          newValue = parseInt(prompt("Set New value?", newValue));
          var arr = this.state.MyArray;
          if(isNaN(parseInt(newValue)))
          {
            newValue = 0;
          }
          arr[e.target.id] = parseInt(newValue);

          this.setState({
            MyArray: arr
          });
        }
      };

      SetDefaulIds()
      {
        let components = document.getElementsByClassName("ArrayElement");
        for(let i = 0; i < components.length; i++)
        {
            components[i].setAttribute("id", i);
        }
      };

      SetNewIDsToAllComponents()
      {
        let components = document.getElementsByClassName("ArrayElement");
        //console.log("found "+ components.length + " components");
        for(let i = 0; i < components.length; i++)
        {
            components[i].setAttribute("id", i);
            if(i == this.state.J)
            {
              components[i].setAttribute("id", "CurrentElement");  
            }
            if(i == this.state.J+1)
            {
              components[i].setAttribute("id", "ElementToCompare");
            }
        }
      };

      finished()
      {
        this.setState({Finished:true});
        // this.setState({StringToShow: "Finished"});
        setTimeout(() => {   this.setState({StringToShow: "Finished"}); }, this.state.AnimationStepDuration);
        setTimeout(() => {   this.SetDefaulIds(); }, this.state.AnimationStepDuration);
      };

      Restart()
      {
        for (var a=[],i=0;i<this.getRandomIntInclusive(4, 12);++i) a[i]=this.getRandomIntInclusive(-10, 12);

        a = this.shuffle(a);

        this.setState({MyArrayLenght: a.length});
        console.log("New array lenght is: " + this.state.MyArrayLenght);

        //var storedNames = JSON.parse(localStorage.getItem("array"));
        this.setState({MadeFirstStep: false}); 
        this.setState({StringToShow: ""});
        this.setState({MyArray: a});
        this.setState({I: 0});
        this.setState({J: 0});
        this.setState({Finished: false});
        this.StopAnimation();
        setTimeout(() => {   this.SetDefaulIds(); }, 5);
      };

      shuffle(array) {
        var tmp, current, top = array.length;
        if(top) while(--top) {
          current = Math.floor(Math.random() * (top + 1));

          // var smthng = this.getRandomIntInclusive(-10, 11);
          // current = parseInt(smthng);

          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
        return array;
      }

      getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      };

    ToggleAnimationHandler()
    {
      if(!this.state.Finished)
      {
          this.setState({Animating: !this.state.Animating});
          this.state.timeouts.push(setTimeout(() => {   this.ToggleAnimation(); }, 10));        
      }
    };

    ToggleAnimation()
    {
      console.log("Is currently animating: " + this.state.Animating);

      if(this.state.Animating)
      {
        this.AnimationTick();
      }
      else
      {
        clearInterval(this.timerID);
      }
    };

    StopAnimation()
    {
      this.setState({Animating: false});
      clearInterval(this.timerID);
    };


    handleNextStepButtonClick()
    {
          // for (var i = 0; i < this.state.timeouts.length; i++) {
          //   console.log(this.state.timeouts[i] + "is cleaned");
          //   clearTimeout(this.state.timeouts[i]);
          // }
          // clearTimeout(this.state.AnimationTimout);
          // this.setState({AnimationTimout:null});
          this.setState(prevState => ({AnimationTimout: clearTimeout(prevState.AnimationTimout)}));
          console.log("AnimationTimout after cleaning: " + this.state.AnimationTimout);
        //quick reset of the timer array you just cleared
        // this.setState({timeouts: []});
        this.setState({AnimationStepDuration: 10}); // 10 is minimum time to this.setState({SOMETHING}) to work
        clearInterval(this.timerID);
        if(this.state.Animating)
        {
          this.StopAnimation();
        }
        this.NextAnimationStep();
    }

    AnimationTick()
    {
      this.timerID = setInterval(
        () => this.NextAnimationStep(),
        this.state.AnimationStepDuration
      );
    }; 

// somehow if start animating first time whait until elements are outlined 
// and press next step an after continue animation there is BUG!!!
    NextAnimationStep() 
    {
      if(!this.state.MadeFirstStep)
      {
        this.setState({MadeFirstStep: true}); 
      }
      
        // if(this.state.J < this.state.MyArrayLenght-this.state.I-1)
        // {
        //   // this.SetNewIDsToAllComponents();
        //   // this.setState({StringToShow: "Is " + this.state.MyArray[this.state.J] + " > " + this.state.MyArray[this.state.J+1] + "?"})

        //   // if (this.state.MyArray[this.state.J] > this.state.MyArray[this.state.J+1])
        //   // {
        //   //   setTimeout(() => {  this.swap(this.state.MyArray,this.state.J,this.state.J+1); }, 1000);        
        //   // }
        //   // else
        //   // {
        //   //   setTimeout(() => {   this.setState({StringToShow: "NO"}); }, 1000);
        //   //   this.continueOrStartNewIteration();
        //   // }
        // }
        // else{
        //   console.log("NewIterationStarted");
        //   this.setState({J: 0}); 
        //   this.setState({I: this.state.I+1});
        // }

        let t1 = this.state.I + 1;
        let t2 = this.state.J + 1;
        console.log("Iteration: " + t1 + " SubIteration: " + t2);

        //buble sort logic
        this.SetNewIDsToAllComponents();
        this.setState({StringToShow: "Is " + this.state.MyArray[this.state.J] + " > " + this.state.MyArray[this.state.J+1] + "?"})

        if (this.state.MyArray[this.state.J] > this.state.MyArray[this.state.J+1])
        {
          // this.state.timeouts.push(setTimeout(() => {  this.swap(this.state.MyArray,this.state.J,this.state.J+1); }, this.state.AnimationStepDuration/2));
          this.setState({AnimationTimout:setTimeout(() => {  this.swap(this.state.MyArray,this.state.J,this.state.J+1); }, this.state.AnimationStepDuration/2)});
          console.log("AnimationTimout: " + this.state.AnimationTimout);
          //setTimeout(() => {  this.swap(this.state.MyArray,this.state.J,this.state.J+1); }, this.state.AnimationStepDuration/2);        
        }
        else
        {
          this.setState({AnimationTimout:setTimeout(() => {  
            this.setState(prevState => ({StringToShow: prevState.StringToShow + " -> NO"}));
            }, this.state.AnimationStepDuration/2)});
            console.log("AnimationTimout: " + this.state.AnimationTimout);
          // this.state.timeouts.push(setTimeout(() => {  
          // this.setState(prevState => ({StringToShow: prevState.StringToShow + " -> NO"}));
          // }, this.state.AnimationStepDuration/2));
          this.continueOrStartNewIteration();
        }
       //buble sort logic
      //  console.log("this.state.timeouts: " + this.state.timeouts.length);
        //make final chek
        if(this.state.I >= this.state.MyArrayLenght-1)
        {
            clearInterval(this.timerID);
            this.finished();
        }
    };

    continueOrStartNewIteration()
    {
      if(this.state.J < this.state.MyArrayLenght-this.state.I-2)
      {
        this.setState({J: this.state.J+1})
        console.log("Continuing");
      }
      else{
        this.setState({J: 0}); 
        this.setState({I: this.state.I+1})
        console.log("NewIterrationFromContinue or restart");
      }
    }

 swap(arr, xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;

    // this.setState({StringToShow: "Swaped"})

    this.setState(prevState => ({StringToShow: prevState.StringToShow + " -> Swaped"}));

    this.setState({
        MyArray: arr
    });

    this.continueOrStartNewIteration();
};
 
// // An optimized version of Bubble Sort
//  bubbleSort( arr, n)
// {
// var i, j;
// for (i = 0; i < n-1; i++)
// {
//     let delayres = await delay(1000);
//     for (j = 0; j < n-i-1; j++)
//     {
//         delayres = await delay(1000);
//         // need to outline current element
//         if (arr[j] > arr[j+1])
//         {
//             // need to outline two selected for swaping array elements
//             delayres = await delay(1000);
//         swap(arr,j,j+1);
//         }
//     }
 
// }
// }

    render() {
        return (
          <div>
            <button onClick={() => {this.Restart()}}>Restart</button>
            <br/><br/>
            <nav>
            {/* <Toggle onChange={() => {this.ToggleAnimation()}}
            TogleONText = "Start Sorting"
            TogleOFFText = "Pause Sorting"
            /> */}
            <button onClick = {() => {this.ToggleAnimationHandler()}} disabled ={this.state.Finished}> 
            {this.state.Animating ? "Stop sorting" : this.state.MadeFirstStep ? "Continue sorting":"Starts sorting"} </button>
            <Toggle onChange={() => {this.handleNextStepButtonClick()}}
            TogleONText = "Next Step"
            TogleOFFText = "Next Step"
            Disabled = {this.state.Finished}
            /> 
            </nav>  
            <br/>   <br/>      
            <nav id= "ArrayReprezentation">
                {this.state.MyArray.map((element,i) => (
                    <div key={i} 
                    className ={"ArrayElement"} 
                    id = "0"
                    style ={{height: (element == 0 ? 25 : Math.abs(element)*50) , 
                    width: 50,
                    backgroundColor: (element > 0 ? "black" : "blue")}}
                    onClick = {(e) => {this.handleArrayElementClick(e)}}>{element}</div>
                ))}
            </nav>
            <h4>{this.state.StringToShow}</h4>
          </div>
        );
      }
}