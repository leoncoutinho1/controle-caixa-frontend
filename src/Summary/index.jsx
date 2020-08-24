import React, { Component } from 'react'
import axios from 'axios'
import OperationList from '../OperationList'
import './Summary.css'

const url = process.env.REACT_APP_API_URL

export default class Summary extends Component {

    constructor(props) {
        super(props)
        this.refresh()
    }

    state = {
        flow: 'padaria',
        list: []
    }

    setCashFlow = (e) => {
        this.setState({
            ...this.state,
            flow: e.target.value
        }, () => this.refresh())
    }
    refresh = () => {
        if (this.state.flow === '*') {
            axios.get(`${url}?sort=-createdAt&limit=50`)
            .then(res => this.setState({
                ...this.state,
                list: res.data
            }))
        } else {
            axios.get(`${url}?sort=-createdAt&limit=50&cashflow=${this.state.flow}`)
            .then(res => this.setState({
                ...this.state,
                list: res.data
            }))
        }
        
    }
 
    handleChange = () => {}

    handleRemove = () => {}

    render() {
        return (
            <div className="SummaryForm">
                <select name="inputCashFlow" id="inputCashFlow" value={this.state.flow} onChange={e => this.setCashFlow(e)}>
                    <option value="">-- Caixa --</option>
                    <option value="padaria">Padaria</option>
                    <option value="mercearia">Mercearia</option>
                    <option value="pessoal">Pessoal</option>
                    <option value="unido">Geral-Unido</option>
                    <option value="*">Todos</option>
                </select>
                <OperationList
                    list={this.state.list} />
            </div>
            
        )
    }
}