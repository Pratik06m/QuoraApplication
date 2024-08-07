import React from 'react'
import QuoraHeader from './QuoraHeader'
import Filter from './Filter'
import NotificationBox from './NotificationBox'

  
function NotificationPage() {
  return (
    <div className="notificationPage-full">
        <QuoraHeader/>
        <div className="notification_info">
          <Filter/>
          <NotificationBox/>
        </div>
    </div>
  )
}

export default NotificationPage