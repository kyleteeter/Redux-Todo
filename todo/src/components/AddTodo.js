import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'
 class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todo: ''
        }
    }
    inputHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
     formSubmitHandler = e => {
        e.preventDefault()
        this.props.addTodo(this.state.todo)
        this.setState({todo:''})
     }
     render() {
        return (
                 <form onSubmit={this.formSubmitHandler}>
                    <input type='text' name='todo' value={this.state.todo} onChange={this.inputHandler} />
                    <button type="submit">Add Todo </button>
                </form>
         )
    }
 }
 export default connect(() => ({}), { addTodo })(AddTodo)