import React ,{ useState } from 'react';
import Hero from './Hero';
import NavBar from './NavBar';
import Container from './Container';
import Footer from './Footer';
import { login } from '../controllers/user_controller';
import { useHistory } from 'react-router-dom';
import loginImage from '../resources/images/loginIntro.jpg';

function LoginPage (){

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [Address, setAddress] = useState("");
const [City, setCity] = useState("");
const [Zip,setZip]= useState("");
const history = useHistory();

  function handleLogin(e) {
      e.preventDefault();

     if(login(username,password,Address,City,Zip)) {
       history.goBack();
     } else {
       alert("username , password ,Address ,City or Zip is incorrect");
     }
  }

  
  return(
      <>
       <NavBar />
       <Hero img={loginImage} title="Login" subtitle="only admin can login here"/>
      <Container>
        <form className="blog-login my-5 py-5 max-auto">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlfor="inputEmail4">Username</label>
              <input type="text" className="form-control" id="inputEmail4" value={username} onChange={(e) => setUsername(e.target.value)} />
           </div>
            <div className="form-group col-md-6">
              <label htmlfor="inputPassword4">Password</label>
              <input type="password" className="form-control" id="inputPassword4" value={password} onChange={(e) => setPassword(e.target.value)}/>
           </div>
           </div>
            <div className="form-group">
              <label htmlfor="inputAddress">Address</label>
              <input type="text" className="form-control" id="inputAddress" value={Address} onChange={(e) => setAddress(e.target.value)}/>
           </div>
             <div className="form-row">
              <div className="form-group col-md-6">
               <label htmlfor="inputCity">City</label>
               <input type="text" className="form-control" id="inputCity" value={City} onChangeCapture={(e) => setCity(e.target.value)}/>
          </div>
          <div className="form-group col-md-2">
            <label htmlfor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" value={Zip} onChangeCapture={(e) => setZip(e.target.value)}/>
          </div>
         </div>
         <div className="form-group">
           <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlfor="gridCheck">
              I'm not a robort
             </label>
           </div>
         </div>
         <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
       </form>
      </Container>
      <Footer/>
      </>
    );
}

export default LoginPage;