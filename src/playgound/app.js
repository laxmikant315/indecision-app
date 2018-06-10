class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleRemoveAll = this.handleRemoveAll.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: []
      };
     
    }
  
    componentDidMount() {
      try {
        const optionsString = localStorage.getItem("options");
        const options= JSON.parse(optionsString);
     if(options)
     {
      
      this.setState(() =>  ({ options }));
     }
      } catch (e) {
        
      }
      
       
    }
    componentDidUpdate(prevProp, prevState) {
      if (prevState.options.length != this.state.options.length) {
        localStorage.setItem("options", JSON.stringify(this.state.options));
      }
    }
  
    handleRemoveAll() {
      this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
      this.setState(prevState => ({
        options: prevState.options.filter(option => {
          return optionToRemove !== option;
        })
      }));
    }
  
    handlePick() {
      const randomNo = Math.floor(Math.random() * this.state.options.length);
  
      const randomOption = this.state.options[randomNo];
      alert(randomOption);
    }
  
    handleAddOption(optionText) {
      if (!optionText) {
        return "Enter valid value to add item.";
      } else if (this.state.options.indexOf(optionText) > -1) {
        return "This item is already exists.";
      }
      this.setState(prevState => ({
        options: prevState.options.concat(optionText)
      }));
    }
  
    render() {
      const title = "Indecision App";
      const subtitle = "Put your life on Computer's hands.";
  
      return (
        <div>
          <Header title={title} subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleRemoveAll={this.handleRemoveAll}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
      );
    }
  }
  
  const Header = props => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h1>{props.subtitle}</h1>
      </div>
    );
  };
  
  const Action = props => {
    return (
      <div>
        <button disabled={!props.hasOptions} onClick={props.handlePick}>
          What I shoud do?
        </button>
      </div>
    );
  };
  
  const Options = props => {
    return (
      <div>
        <button onClick={props.handleRemoveAll}>Remove All</button>
      {props.options.length===0 && <p></p>}
        {props.options.map(option => {
          return (
            <Option
              key={option}
              option={option}
              handleDeleteOption={props.handleDeleteOption}
            />
          );
        })}
      </div>
    );
  };
  
  const Option = props => {
    return (
      <div>
        <p>{props.option}</p>
        <button
          onClick={e => {
            props.handleDeleteOption(props.option);
          }}
        >
          Remove
        </button>
      </div>
    );
  };
  
  class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
  
    handleAddOption(e) {
      e.preventDefault();
      const optionText = e.target.elements.option.value.trim();
  
      const error = this.props.handleAddOption(optionText);
      this.setState(() => ({ error }));
  
      if(!error)
      {
        e.target.elements.option.value='';
      }
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
          {this.state.error && (
            <p style={{ color: "red" }}> {this.state.error} </p>
          )}
        </div>
      );
    }
  }
  
  ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
  