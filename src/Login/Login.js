import React from "react";

const login = (props)=>{
	return(
      <div className="login-back">
         <div className="login">
            <h1>ORANGE</h1>
            <form className="login-form">
               <label>Email</label>
               <input type="email" placeholder="seunome@email.com"></input>
               <label>Password</label>
               <input type="password" placeholder="Password"></input>
               <div className="login-check">
                  <input type="checkbox" name="checkbox"></input>
                  <label for="checkbox">Mostrar senha</label>
               </div>
               <a href="google.com" className="login-problem">Problemas para acessar sua conta?</a>
               <button className="btn btn-gradient">Acessar</button>
               <p className="login-ou">ou</p>
               <button className="btn btn-white">Cadastrar</button>
               <div className="login-links">
                  <a href="www.google.com.br">Termos de Uso</a>
                  <a href="www.google.com.br">Política de privacidade</a>
               </div>
            </form>
         </div>
      </div>
   )
};

export default login;