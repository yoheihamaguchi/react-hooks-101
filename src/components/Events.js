import React from 'react';
import Event from './Event'
import AppContext from '../contexts/AppContext'
import { useContext } from 'react';

const Events = () => {
    const { state } = useContext(AppContext)
    return (
        <>
            <h4>イベント一覧</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>タイトル</th>
                        <th>ボディー</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {state.map((event, index) => (<Event key={index} event={event}></Event>))}
                </tbody>
            </table>
        </>
    )
}

export default Events;