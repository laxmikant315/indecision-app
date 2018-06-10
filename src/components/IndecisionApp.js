import React from "react";

import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from './OptionModal'



export default class IndecisionApp extends React.Component {

   state = {
        options: [],
        selectedOption:undefined
      };


  componentDidMount() {
    try {
      const optionsString = localStorage.getItem("options");
      const options = JSON.parse(optionsString);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevState.options.length != this.state.options.length) {
      localStorage.setItem("options", JSON.stringify(this.state.options));
    }
  }

  handleRemoveAll=()=> {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption=(optionToRemove)=> {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionToRemove !== option;
      })
    }));
  }

  handlePick=()=> {
    const randomNo = Math.floor(Math.random() * this.state.options.length);

    const randomOption = this.state.options[randomNo];

    this.setState(()=>({selectedOption:randomOption}))
   
  }
  handleClearSelectedOption=()=>{

    this.setState(()=>({selectedOption:undefined}))
  }

  handleAddOption=(optionText)=> {
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
        <div className="container container__dark-blue">

        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <div className="widget">
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        </div>
        <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}></OptionModal>
      </div></div>
    );
  }
}
