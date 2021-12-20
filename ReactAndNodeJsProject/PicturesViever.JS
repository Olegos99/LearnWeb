class PicWiver extends React.Component{
    constructor(props){
        super(props);
        this.state = {PicId : 0,
           open: false,
           Display: "none",
           modalDisplay: "none"
          };

        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
        this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
        this.HandleCloseButton = this.HandleCloseButton.bind(this);
        this.handleSpanClick = this.handleSpanClick.bind(this);        
    }

    //make image biger on click
    //also close it big version on click
    handleImageClick () {
        this.setState(prevState => ({
          open: !prevState.open
        }));

        this.setState({
          modalDisplay:"block" 
      });
      clearInterval(this.timerID);// need to call only if photo is opened
    };

    HandleCloseButton()
    {
      this.setState(prevState => ({
        open: !prevState.open
      }));
      this.setState({
        modalDisplay:"none" 
    });
    this.handleNextButtonClick ();
    };

    handleNextButtonClick () {
        this.SetNextImage();
        this.OnclickUpdate();
    };

    handlePreviousButtonClick () {
      this.SetPreviousImage();
      this.OnclickUpdate();
    };

  OnclickUpdate()
  {
    clearInterval(this.timerID);
    this.changeImageWithInterval();
  }

  changeImageWithInterval()
  {
    this.timerID = setInterval(
      () => this.SetNextImage(),
      5000
    );
  }  
    
    componentDidMount() {
      this.changeImageWithInterval();
      this.setState({
        Display:"block" 
    });
    //this.SetNewIDsToAllSpans();
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    handleSpanClick(n)
    {
      console.log(n);
      var num = parseInt(n);
      this.SetParticularImage(num);
    };

    SetParticularImage(n)
    {
        this.setState({
          Display:"none" 
      });
        this.setState({
          PicId: n
      });
      setTimeout(() => {  this.setState({Display:"block" }); }, 15);
      this.OnclickUpdate();
    };
  
      SetNextImage() {
        this.setState({
          Display:"none" 
      });
        if(this.state.PicId < this.props.NumberOfPhotos -1)
        {
          this.setState(prevState => ({
            PicId: prevState.PicId +1
          }));
        }
        else{
          this.setState({
            PicId: 0
        });
        }
        setTimeout(() => {  this.setState({Display:"block" }); }, 15);
      }

      SetPreviousImage() 
      {
        this.setState({
          Display:"none" 
      });
        if(this.state.PicId > 0)
        {
          this.setState(prevState => ({
            PicId: prevState.PicId - 1
          }));
        }
        else{
          this.setState({
            PicId: this.props.NumberOfPhotos -1
        });
        }
        setTimeout(() => {  this.setState({Display:"block" }); }, 15);
      }

      SetNewIDsToAllSpans()
      {
        let components = document.getElementsByClassName("dot");
        //console.log("found "+ components.length + " components");
        for(let i = 0; i < components.length; i++)
        {
            components[i].setAttribute("id", i);
        }
      };

        render() {
          return (
            <div>
              <nav className = "ImageViewerNav">
                {/* <button type="button"  onClick={this.handlePreviousButtonClick}>P</button> */}
                  <div className = "PicViewerBackground" >
                    <div className = "ImageViewer">
                    <div className="numbertext">{this.state.PicId+1 + " / " + this.props.photo.length}</div>
                      <img src="/Icons/arrow-left-circle.SVG" className="left-nav" onClick={this.handlePreviousButtonClick}/>
                        <img src={this.props.photo[this.state.PicId].photo}  id = "PicViewer" className="mySlides fade" style={{ display : this.state.Display }} onClick = {this.handleImageClick}/>
                      <img src="/Icons/arrow-right-circle.SVG" className="right-nav" onClick={this.handleNextButtonClick}/>
                      <nav className="DotsContainer"> 
                        {this.props.photo.map((element,i) => (<span key={i}
                        data-id={element.id}
                        className ={this.state.PicId === element.id ? "dot active":"dot"}
                        onClick={() => this.handleSpanClick(element.id)}></span>))}
                        {/* {this.props.photo.map(element => (<span id="0" key={element.photo} className ={this.state.PicId === this.span.id ? "dot active":"dot"} onClick={() => this.handleSpanClick(this.id)}></span>))} */}
                      </nav>
                    </div>
                      <div id="myModal" className="modal" style ={{display: this.state.modalDisplay}}>
                        <span className="close" onClick = {this.HandleCloseButton}>&times;</span>
                        <img className="modal-content" id="img01" src={this.props.photo[this.state.PicId].photo}/>
                        <div id="caption">{this.props.text[this.state.PicId].text}</div>
                      </div>
                  </div>
                {/* <button type="button"  onClick={this.handleNextButtonClick}>N</button> */}
              </nav>
              <h3 className = "Mydescription"><b>{this.props.text[this.state.PicId].text}</b></h3>
            </div>
          );
        }
}