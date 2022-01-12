import React, { Component } from "react";
import './Home.css'

function Hobby(props){
  return(
    <li  
      onClick={() => {
        props.hobbyClicked(props.hobbyName);
      }}
    >{props.hobbyName}</li>
  )
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: ["reading", "drawing", "singing"],
      newHobby: "",
      hobbyDeleted: false,
    };
  }
  deleteHobby(hobby) {
    let oldHobby = this.state.hobbies;
    let position = oldHobby.indexOf(hobby);
    this.setState({
      hobbies: oldHobby.filter((el, index) => index !== position),
      hobbyDeleted: true,
    });
  }
  addHobby() {
    let oldHobby = this.state.hobbies;
    if (this.state.newHobby) {
      this.setState({
        hobbies: oldHobby.concat(this.state.newHobby),
        hobbyDeleted: false
      });
    }
  }
  changeHobby(event) {
    this.setState({
      newHobby: event.target.value,
    });
  }
  render() {
    let hobbyList = this.state.hobbies.map((el, index) => {
      return (
        <Hobby 
          key = {index}
          hobbyName = {el}
          hobbyClicked = {this.deleteHobby.bind(this)}
        />
      );
    });

    let deletedHobbyPara = "";
    if (this.state.hobbyDeleted === true) {
      deletedHobbyPara = <p>Hobby was deleted!</p>;
    }
    const hobbyCounterClass =
      this.state.hobbies.length > 3 ? "hobbyCounter" : "";
    return (
      <div>
        <h3>My Hobbies</h3>
        <button onClick={this.addHobby.bind(this)}>Add Hobby</button>
        <input type="text" 
        value={this.state.newHobby}
        onChange={this.changeHobby.bind(this)}></input>
        {deletedHobbyPara}
        <p className={hobbyCounterClass}>
          Hobbies: {this.state.hobbies.length}
        </p>
        <ul>{hobbyList}</ul>
      </div>
    );
  }
}

export default Home;









// import React, { Component } from "react";
// import styling from "./Home.css";

// function Hobby(props) {
//   return (
//     <li
//       onClick={() => {
//         props.hobbyClicked(props.hobbyName);
//       }}
//     >
//       {props.hobbyName}
//     </li>
//   );
// }

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hobbies: ["dance", "sing", "play"],
//       newHobbyInput: "",
//       wasHobbyDeleted: false,
//     };
//   }
//   changeHobby(event) {
//     this.setState({
//       newHobbyInput: event.target.value,
//     });
//   }
//   addHobby(event) {
//     const oldHobbies = this.state.hobbies;
//     this.setState({
//       hobbies: oldHobbies.concat(this.state.newHobbyInput),
//     });
//   }
//   removeHobby(hobby) {
//     const oldHobby = this.state.hobbies;
//     const position = oldHobby.indexOf(hobby);
//     this.setState({
//       hobbies: oldHobby.filter((el, index) => index != position),
//       wasHobbyDeleted: true,
//     });
//   }
//   render() {
//     let listElements = this.state.hobbies.map((el, index) => {
//       return (
//         <Hobby
//           key={index} 
//           hobbyName={el}
//           hobbyClicked={this.removeHobby.bind(this)}
//         />
//       );
//     });
//     let hobbyDeletedParagraph = "";

//     if (this.state.wasHobbyDeleted)
//       hobbyDeletedParagraph = <p>Hobby Was Deleted!</p>;

//     const hobbyCounterStyle = {
//       color: this.state.hobbies.length > 3 ? "red" : "",
//     };

//     const hobbyCounterClass =
//       this.state.hobbies.length > 3 ? "hobbyCounter" : "";

//     return (
//       <div>
//         <p>My Hobbies</p>
//         <button onClick={this.addHobby.bind(this)}>New Hobby</button>
//         <input
//           type="text"
//           value={this.state.newHobbyInput}
//           onChange={this.changeHobby.bind(this)}
//         ></input>
//         {hobbyDeletedParagraph}
//         <p className={hobbyCounterClass}>
//           Hobbies: {this.state.hobbies.length}
//         </p>
//         <ul>{listElements}</ul>
//       </div>
//     );
//   }
// }

// export default Home;
