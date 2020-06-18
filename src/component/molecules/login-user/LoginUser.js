import React from 'react';
import Button from '../../atoms/buttons/Button';
import './loginUser.scss'
class LoginUser extends React.Component{
constructor(props){
    super(props)
}

render(){
    return(
        <div className="login-wapper">
             <div>Already a Member</div>
            <Button label="Sign in"/>
        </div>
        
    )
}
}
export default LoginUser;