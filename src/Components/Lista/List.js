import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import Item from "./Items";
import "./List.css"
const Parse = require("parse");

class List extends Component {
   constructor(props) {
      super(props);
      this.state = {
         list: [],
         isLoading: false,
         isEmpty: false
      };
   }
   
   componentDidMount = () => {
      this.setState({isEmpty:false});
      this.loadData();
  }

   componentDidUpdate = preState => {
      if(preState.match.params.id !== this.props.match.params.id){
         this.loadData();
      }
   }
   // Load data control what need to be load
   loadData = () => {
      if(this.props.match.params.id==="food"){
         Parse.Cloud.run("getAllFoods").then((found)=>{
            const auxList = []
            found.map( 
               (item) => {
                  var object = {
                     key:item.id,
                     name:item.get("name"),
                     link:item.get("link")
                  };
                  auxList.push(object);
                  return null;
               }
            )
            this.setState({list:auxList});
         });
      } else if(this.props.match.params.id==="places"){
         Parse.Cloud.run("getAllPlaces").then((found)=>{
            const auxList = []
            found.map( 
               (item) => {
                  var object = {
                     key:item.id,
                     name:item.get("name"),
                     link:item.get("link")
                  };
                  auxList.push(object);
                  return null;
               }
            )
            this.setState({list:auxList});
         });
      } else if(this.props.match.params.id==="people"){
         Parse.Cloud.run("getAllPeople").then((found)=>{
            const auxList = []
            found.map( 
               (item) => {
                  var object = {
                     key:item.id,
                     name:item.get("name"),
                     link:item.get("link")
                  };
                  auxList.push(object);
                  return null;
               }
            )
            this.setState({list:auxList});
         });
      } else {
         this.setState({isEmpty:true});
      }
   }
   redirectFood(){
      if(this.state.isEmpty){
         this.setState({isEmpty:false});
         return <Redirect to="/food"/>
      }
   }

   render(){
      const list = this.state.list;
      return(
         <div className="list">
         {this.redirectFood()}
         <h3 className="list-title">List of { this.props.match.params.id}</h3>
            <hr></hr>
            <ul className="list-list">
               {
                  list.map((item, index) => 
                  (<Item key={index} name={item.name} bg={item.link} />))
               }
            </ul>
         </div>
      );
   }
}

export default List;

