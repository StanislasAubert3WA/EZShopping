import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { updateUser } from "../store/userSlice";

const UserForm = () => {
    const user = useSelector((state) => state.user.user[0]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const localUser = JSON.parse(localStorage.getItem("currentUser"))
    const [updatedUser, setUpdatedUser] = useState(
        localUser ? localUser : {
            firstname: "",
            lastname: "",
            email: "",
        }
    );

    const handleSubmit = event => {
      event.preventDefault();
        dispatch(updateUser(updatedUser));
        console.log(localUser);
      // 👇️ redirect to /contacts
      navigate('/');
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">Votre prénom:</label>
                    <input onChange={(e) => updatedUser.firstname = e.target.value} type="text" name="firstName" required/>
                </div>
                <div>
                    <label htmlFor="lastName">Votre nom</label>
                    <input onChange={(e) => updatedUser.lastname = e.target.value} type="text" name="lastName" required/>
                </div>
                <div>
                    <label htmlFor="email">Votre adresse email</label>
                    <input onChange={(e) => updatedUser.email = e.target.value} type="email" size="40" required/>
                </div>
                <div>
                    <button type="submit">sauvegarder utilisateur</button>
                </div>
            </form>
        </div>
    );
  };
  
  export default UserForm;