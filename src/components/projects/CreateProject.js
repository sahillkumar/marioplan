import React, { Component } from 'react'

class CreateProject extends Component {

    state={
        title:'',
        content:''
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
            title:'',
            content:''
        })
    }

    render() {
        const {title,content} = this.state
        return (
            <div className="container col-6 offset-3">
                <h2 className="display-3 my-5 text-center">Add New Project </h2>
                <form>
                    <div className="form-group">
                        <input 
                        type="text" 
                        id="title"
                        className="form-control"
                        placeholder="title"
                        autoComplete="off"
                        value={title}
                        onChange={this.handleChange}
                        />
                        <textarea 
                        type="text" 
                        id="content"
                        className="form-control"
                        placeholder="content"
                        autoComplete="off"
                        value={content}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className="text-center">
                    <div className=" btn btn-secondary form-control mt-3" type="submit" onClick={this.handleSubmit}>Add Project</div>

                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject
