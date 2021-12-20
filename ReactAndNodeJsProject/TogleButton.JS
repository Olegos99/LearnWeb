class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      isToggleOn: true
      };
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    handleInputChange(event) {

      const isToggleOn = {
          [event.target.name]: event.target.value
      };
  
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));

      this.props.onChange(isToggleOn);
  }
  
    render() {
      return (
        // <button onClick={this.handleInputChange} >
        <button onClick={this.handleInputChange} onChange={this.handleInputChange} disabled ={this.props.Disabled}>
          {this.state.isToggleOn ? this.props.TogleONText : this.props.TogleOFFText}
        </button>
      );
    }
  }
  
