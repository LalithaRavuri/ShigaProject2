import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

export const Signup=()=>{
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
                        <label><h4>Email : </h4></label>
                        <input type='text' placeholder="Email" />
                    </div>
                    <div className="field">
                        <label><h4>Password : </h4></label>
                        <input type='password' placeholder="Password" />
                    </div>
                    <div className="field">
                        <label><h4>Confirm Password : </h4></label>
                        <input type='password' placeholder="re-enter password" />
                    </div>
                    <center>
                        <Link to="/shop"><button className='button button2' type='submit'><h4>SIGN UP</h4></button><br/><br /></Link>
                        
                        
                    </center>              
                </form>
            </div>
        </div>
        </div>
    );
};

// export default Signup;