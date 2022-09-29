import React from "react";
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Username:'',
            Email : '',
            validEmail:true,
            emailExist:false
        }
    }

    onEmailChange = (ChangeEvent)=>{
        this.setState({Email : ChangeEvent.target.value})
    }

    onUserNameChange = (ChangeEvent)=>{
        this.setState({Username : ChangeEvent.target.value})
    }

    
    onSubmitRegistration = () =>{
        const {Username,validEmail,Email}=this.state;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.Email))
        {
        fetch("https://robofriends-server.herokuapp.com/register",{
            method : 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: Username,
                email : Email,
                })  
            })
            .then(response => response.json())
            .then(user => {
                if(user !== "Unable to register"){
                      this.props.onRobotsChange(user)
                }
                else{
                    this.setState({emailExist:true});
                    console.log("error")
                }
            
            })
        }
        else{
            this.setState({validEmail:false})
        }

    }


    render(){
  return (
    <div className={`${this.props.isShowAdd ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Register</h1>
            <label>Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" onChange={this.onUserNameChange}/>
            <br></br>
            <label>Email</label>
            <br></br>
            <input type="text" name="email" className="login-box" onChange={this.onEmailChange} />
            <br></br>
            <input type="submit" value="Join" className="login-btn" onClick={this.onSubmitRegistration}/>
          </form>
        </div>
      </div>
    </div>
  );
    }
};

export default Register;
