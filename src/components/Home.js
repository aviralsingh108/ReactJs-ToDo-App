import React, {Component} from "react";
import styling from './Home.css';

function Hobby(props){
	return (
  	<li 
    onClick = {()=>{props.hobbyClicked(props.hobbyName)}}>
    {props.hobbyName}
    </li>
  )
}

class Home extends React.Component{
		constructor(props){
    	super(props);
      this.state = {
      	hobbies : ['dance', 'sing', 'play'],
        newHobbyInput: '',
        wasHobbyDeleted: false

      }
    }
    changeHobby(event){
    	this.setState({
      	newHobbyInput: event.target.value
      });
    } 
    addHobby(event){
    	const oldHobbies = this.state.hobbies;
      this.setState({
      	hobbies: oldHobbies.concat(this.state.newHobbyInput)
      })
    }
    removeHobby(hobby){
    	const oldHobby = this.state.hobbies
      const position = oldHobby.indexOf(hobby)
      this.setState({
      	hobbies: oldHobby.filter((el,index)=> index!=position ),
        wasHobbyDeleted: true
      });
    }
		render(){
    	let listElements = this.state.hobbies.map((el,index)=>{
          return <Hobby 
          key={index}
          hobbyName = {el}
          hobbyClicked = {this.removeHobby.bind(this)}
          />
      })
      let hobbyDeletedParagraph = '';
      
      if (this.state.wasHobbyDeleted)
      hobbyDeletedParagraph = <p>Hobby Was Deleted!</p>;
      
      const hobbyCounterStyle = {
      	color: this.state.hobbies.length > 3 ? 'red': ''
      };
      
      const hobbyCounterClass = this.state.hobbies.length > 3 ? 'hobbyCounter': ''
      
    	return(
      	<div>
           <p>My Hobbies</p>
           <button onClick={this.addHobby.bind(this)}>New Hobby</button>
           <input type="text" value={this.state.newHobbyInput}
             onChange={this.changeHobby.bind(this)}
           ></input>
           {hobbyDeletedParagraph}
           <p  className={hobbyCounterClass}>Hobbies: {this.state.hobbies.length}</p>
           <ul>{listElements}</ul>
      	</div>
      );
    	
    }
}

export default Home