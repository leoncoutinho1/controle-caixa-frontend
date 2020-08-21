import React from 'react'
import './OperationList.css'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(operation => (
            <tr key={operation._id} className={operation.type}>
                <td>{operation.description}</td>
                <td>{operation.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}</td>
                <td>{operation.cashflow}</td>
                <td>{operation.createdAt.replace('T', ' - ').replace('Z', '').substr(0, 21)}</td>
            </tr>         
        ))
    }

    return (
        <div className='OperationList'>
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Caixa</th>
                        <th>Data/Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}