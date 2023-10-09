import React from 'react';
import './login.css';
export default function Register() {
  return (
    <>
        

    <div className="cnotainer">
    <form method="post" action="index.html">
    <div className="box">
    <h1>Register User</h1>
    
    <input type="text" name="name" value="name" onFocus="field_focus(this, 'name');" onblur="field_blur(this, 'name');" className="email" />
    <input type="text" name="username" value="username" onFocus="field_focus(this, 'username');" onblur="field_blur(this, 'username');" className="email" />
    <input type="email" name="email" value="email" onFocus="field_focus(this, 'email');" onblur="field_blur(this, 'email');" className="email" />
    <input type="text" name="contact" value="contact" onFocus="field_focus(this, 'contact');" onblur="field_blur(this, 'contact');" className="email" />
      
    <input type="password" name="email" value="email" onFocus="field_focus(this, 'email');" onblur="field_blur(this, 'email');" className="email" />
      
    <a href="#"><div className="btn">Sign In</div></a> 
    
    <a href="#"><div id="btn2">Sign Up</div></a> 
      
    </div> 
      
    </form>
    
    <p>Forgot your password? <u style={{color:"#f1c40f"}}>Click Here!</u></p>
</div>
    </>
  );
}
