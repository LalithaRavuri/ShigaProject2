import React from "react";

export const Home = () =>{
    return(
        <div className='ui cards body' style={{marginLeft:470,paddingTop:50}}>
            <p><h4>Don't have an account?...
                <a href="signup">Signup</a></h4>
            </p>
            <br />
            <br />
            <p><h4>Already have an account?...
                <a href="login">Login</a></h4>
            </p>
        </div>
    );
};