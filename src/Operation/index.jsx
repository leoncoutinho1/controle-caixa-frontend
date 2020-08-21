import React, { Component } from 'react'
import axios from 'axios'
import OperationList from '../OperationList'
import OperationForm from '../OperationForm'

const url = process.env.REACT_APP_API_URL

export default class Operation extends Component {

    constructor(props) {
        super(props)
        this.refresh()
    }

    state = {
        list: []
    }

    refresh = () => {
        axios.get(`${url}?sort=+createdAt&limit=5`)
            .then(res => this.setState({
                list: res.data
            }))
        console.log(this.state)
    }

    handleAdd = (operation) => {
        axios.post(url, operation)
            .then(res => console.log(res.status))
            .catch(err => console.log(err))
        this.refresh()
    }
 
    handleChange = () => {}

    handleRemove = () => {}

    render() {
        return (
            <>
                <OperationForm
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleRemove={this.handleRemove} />
                <OperationList
                    list={this.state.list} />
            </>
            
        )
    }
}