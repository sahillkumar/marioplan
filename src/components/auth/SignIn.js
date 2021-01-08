import React, { Component } from 'react'

class SignIn extends Component {

    state={
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
            email:'',
            password:''
        })
    }

    render() {
        const {email,password} = this.state
        return (
            <div className="container col-6 offset-3">
                <h2 className="display-3 my-5 text-center">Sign In </h2>
                <form>
                    <div className="form-group">
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
                    <div className=" btn btn-secondary form-control mt-3" type="submit" onClick={this.handleSubmit}>Sign In</div>

                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
