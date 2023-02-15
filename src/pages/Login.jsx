import React from "react";

function Login(){
    return(
        <div>
            <form action="submit">
                <div>
                    <input type="text" name="username" placeholder="Enter Username"/>
                    <label htmlFor="username">Nom d'utilisateur</label>
                </div>
                <div>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                    <label htmlFor="psw">Mot de passe</label>
                </div>
                <div>
                    <button type="submit">connexion</button>
                </div>
            </form>
        </div>
    )
}

export default Login;