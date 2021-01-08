import React, { Component } from 'react'

class SignUp extends Component {

    state={
        firstname:'',
        lastname:'',
        email:'',
        password:''
    }

    handleChange = ({target:{value,id}}) =>{
        this.setState({
            [id]:value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state);
        this.setState({
            firstname:'',
            lastname:'',
            email:'',
            password:''
        })
    }

    render() {
        const { firstname,lastname,email,password} = this.state
        return (
            <div className="container col-6 offset-3">
                <h2 className="display-3 my-5 text-center">Sign Up </h2>
                <form>
                    <div className="form-group">
                        <input 
                        type="text" 
                        id="firstname"
                        className="form-control"
                        placeholder="FirstName"
                        autoComplete="off"
                        value={firstname}
                        onChange={this.handleChange}
                        />
                        <input 
                        type="text" 
                        id="lastname"
                        className="form-control"
                        placeholder="LastName"
                        autoComplete="off"
                        value={lastname}
                        onChange={this.handleChange}
                        />
                        <input 
                        type="email" 
                        id="email"
                        className="form-control"
                        placeholder="abc@xyz.com"
                        autoComplete="off"
                        value={email}
                        onChange={this.handleChange}
                        />
                        <input 
                        type="password" 
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        autoComplete="off"
                        value={password}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="text-center">
                    <div className=" btn btn-secondary form-control mt-3" type="submit" onClick={this.handleSubmit}>Sign Up</div>

                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
