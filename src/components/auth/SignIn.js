import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../redux/actions/authActions'

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
        // console.log(this.state);
        this.props.signIn(this.state)
        this.setState({
            email:'',
            password:''
        })
    }

    render() {
        const {email,password,err} = this.state
        const { authErr } = this.props
        return (
            <div className="container col-6 offset-3">
                <h2 className="display-3 my-5 text-center">Log In </h2>
                {
                    authErr ? (
                        <div className="bg-danger text-center text-white">
                            {authErr}
                        </div>
                    ) : null
                }
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
                        <div className=" btn btn-secondary form-control mt-3" type="submit" onClick={this.handleSubmit}>Log In</div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        authErr:state.auth.authErr
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
