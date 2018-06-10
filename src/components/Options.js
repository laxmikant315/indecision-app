import React from 'react'
import Option from './Option'

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

  export default Options;