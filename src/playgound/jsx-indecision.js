


console.log("App is running");

let app ={
  title:'Indecision App',
  description:'Put your life in the hands of a computer.',
  options:['one','two']
}
const removeAll=()=>{
  app.options=[];
  render();
};

const onMakeDecision=()=>{
  const randomNo = Math.floor(Math.random() * app.options.length);

  const randomOption = app.options[randomNo]
  alert(randomOption);
}
const onFormSubmit=(e)=>{
  e.preventDefault();
  const option= e.target.elements.option;
 
 if(app.options.find(x=>x===option.value.trim()))
 {
   alert('already exists');
   return;
 }

  if(option.value)
  {
    app.options.push(option.value.trim());
  }
  option.value=""
  option.focus();
  render();
  console.log();
}
const render=()=>{
 

  const ele = (
    <div>
    <h1>{app.title}</h1>
 
    <p>{app.options.length>0?'Here are your options.':'No options'}</p>
    <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
    <button onClick={removeAll}>Remove All</button>
    <ol>
    {app.options.map(option=>{
      return <li key={option}>{option}</li>
    })}</ol>
      
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button >Add Option</button>
     
      </form>
  
     
    </div>
   );
   const appRoot = document.getElementById("app");

   ReactDOM.render(ele,appRoot );
}

render();
