import React from 'react'


const Event = ({ dispatch, event }) => {
    const id = event.id
    const handleClickDeleteButton = () => {
        const result = window.confirm(`イベント(id=${id})を本当に削除してもいいですか？`)
        if (result) dispatch({
            type: 'DELETE_EVENT',
            id: id,
        })
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type="button" className="btn-danger btn" onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}

export default Event
