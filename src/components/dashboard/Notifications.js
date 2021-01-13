import moment from 'moment'
import React from 'react'

function Notifications({notifications}) {
    return (
        <div className="p-2 mt-5 bg-white">
            <h3 className="text-center mb-3">Notifications</h3>
                <ul className="list-group list-group-flush">
                    { notifications && notifications.map(notif =>(
                        
                            <li className="list-group-item"  key={notif.id}>
                                <p><strong className="text-capitalize">{notif.user}</strong> {notif.content}</p>
                                <p className="text-muted">{moment(notif.time.toDate()).fromNow()}</p>
                            </li>
                        ))
                    }
              </ul>
        </div>
    )
}

export default Notifications
