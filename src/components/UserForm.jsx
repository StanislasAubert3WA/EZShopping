import { useDispatch, useSelector } from "react-redux";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';

const UserForm = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = event => {
      event.preventDefault();
  
      // 👇️ redirect to /contacts
      navigate('/');
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">Votre prénom:</label>
                    <input type="text" name="firstName" required/>
                </div>
                <div>
                    <label htmlFor="lastName">Votre nom</label>
                    <input type="text" name="lastName" required/>
                </div>
                <div>
                    <label htmlFor="email">Votre adresse email</label>
                    <input type="email" size="40" required/>
                </div>
                <div>
                    <button type="submit">sauvegarder utilisateur</button>
                </div>
            </form>
        </div>
    );
  };
  
  export default UserForm;