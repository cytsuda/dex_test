import React, { Component }  from "react";
import { Redirect } from 'react-router-dom'
import "./Login.css";
const Parse = require("parse");

class Login extends Component {
   constructor(props) {
      super(props);
      
      this.state = {
         logged: false,
         email:"",
         password:"",
         show: false
      };

      this.handleRegister = this.handleRegister.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
   }

   //  Hnadle checkbox value
   handleChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
         [name]: value,
      });
   }

   // Registrer new user
   handleRegister = async (event) => {
      event.preventDefault();

      // Parser New User Object
      var user = new Parse.User();
      user.set("username", this.state.email);
      user.set("password", this.state.password);

      try {
         // Try to sign up
         await user.signUp();
         this.setState({logged:true});
      } catch (error) {
         // Error
         console.log("Error: " + error.code + " " + error.message);
      }
      
   }
 
   handleLogin= async (event) => {
      event.preventDefault();
      
      // Login a user
      try{
         // Try to login
         const user = await Parse.User.logIn(this.state.email, this.state.password);
         console.log(user);
         this.setState({logged:true});
      } catch(error){
         console.log("Error: " + error.code + " "+ error.message);
      }
   }
   handleRedirect(){
      // Redirect if exist a current User
      if(Parse.User.current()){
         return <Redirect to="/food/"/>
      }
   }
   render(){
      return(
         <div className="login-back">
            {this.handleRedirect()}
            
            <div className="login">
               <h1>ORANGE</h1>
               <form className="login-form">
                  <label>Email</label>
                  <input type="email"
                     name="email"
                     placeholder="seunome@email.com"
                     value={this.state.email}
                     onChange={this.handleChange} 
                     required
                  />

                  <label>Password</label>
                  <input
                     type={this.state.show ? "text" : "password"}
                     placeholder="Password"
                     name="password"
                     value={this.state.password}
                     onChange={this.handleChange}
                     required
                  />

                  <div className="login-check">
                     <input 
                        type="checkbox" 
                        name="show"
                        value={this.state.show}
                        onChange={this.handleChange}
                        />
                     <label>Mostrar senha</label>
                  </div>

                  <a href="/" className="login-problem">Problemas para acessar sua conta?</a>
                  
                  <button 
                     className="btn btn-gradient"
                     onClick={this.handleLogin}
                     >
                     Acessar
                  </button>

                  <p className="login-ou">ou</p>

                  <button 
                     className="btn btn-white"
                     onClick={this.handleRegister}
                     >
                     Cadastrar
                  </button>
                 
                  <div className="login-links">
                     <a href="/">Termos de Uso</a>
                     <a href="/">Política de privacidade</a>
                  </div>

               </form>
            </div>
         </div>
      )
   }
};

export default Login;