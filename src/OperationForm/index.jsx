import React, { useState } from 'react'
import './OperationForm.css'

export default props => {

    const [description, setDescription] = useState('');
    const [cashflow, setCashflow] = useState('');
    const [type, setType] = useState('');
    const [value, setValue] = useState('');

    function refresh() {
        setDescription('')
        setCashflow('')
        setType('')
        setValue('')

        props.refreshList()
    }

    function saveOp() {
        const operation = {
            description: description,
            cashflow: cashflow,
            type: type,
            value: value
        }

        props.handleAdd(operation)

        refresh()
    }

    return (
        <div className="OperationForm">
            <input type="text" name="inputDescription" id="inputDescription" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}/>
            <select name="inputCashFlow" id="inputCashFlow" value={cashflow} onChange={e => setCashflow(e.target.value)}>
                <option value="">-- Caixa --</option>
                <option value="padaria">Padaria</option>
                <option value="mercearia">Mercearia</option>
                <option value="pessoal">Pessoal</option>
            </select>
            <input type="number" name="inputValue" id="inputValue" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}/>
            <select name="inputType" id="inputType" value={type} onChange={e => setType(e.target.value)}>
                <option value="">-- Tipo --</option>
                <option value="c">Crédito</option>
                <option value="d">Débito</option>
            </select>
            <button onClick={saveOp}>Gravar</button>
        </div>
    )
}