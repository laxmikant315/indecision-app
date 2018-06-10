import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();
    const optionText = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(optionText);
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  };
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
