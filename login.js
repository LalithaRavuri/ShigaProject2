import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

export const Login=()=>{
    return(
        <div className='ui cards body' style={{marginLeft:470,paddingTop:50}}>
        <div >
            <div className="ui centered card" style={{padding:20}}>
                <form className="ui form">
                    <div className="field">
                        <label><h4>Username : </h4></label>
                        <input type='text' placeholder="Username" />
                    </div>
                    <div className="field">
                        <label><h4>Password : </h4></label>
                        <input type='password' placeholder="Email" />
                    </div>
                    <center>
                        <Link to='/shop'><button className='button button2' type='submit'><h4>Login</h4></button><br/><br />
                       
                        </Link>
                        
                    </center>              
                </form>
            </div>
        </div>
        </div>
    );
};
