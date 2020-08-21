import React from 'react'
import './OperationForm.css'

export default props => {
    function saveOp() {
        const operation = {
            description: document.getElementById('inputDescription').value,
            cashflow: document.getElementById('inputCashFlow').value,
            type: document.getElementById('inputType').value,
            value: document.getElementById('inputValue').value
        }

        props.handleAdd(operation)
    }

    return (
        <div className="OperationForm">
            <input type="text" name="inputDescription" id="inputDescription" placeholder="Descrição"/>
            <select name="inputCashFlow" id="inputCashFlow">
                <option value="">-- Caixa --</option>
                <option value="padaria">Padaria</option>
                <option value="mercearia">Mercearia</option>
                <option value="pessoal">Pessoal</option>
            </select>
            <input type="number" name="inputValue" id="inputValue" placeholder="Valor"/>
            <select name="inputType" id="inputType">
                <option value="">-- Tipo --</option>
                <option value="c">Crédito</option>
                <option value="d">Débito</option>
            </select>
            <button onClick={saveOp}>Gravar</button>
        </div>
    )
}