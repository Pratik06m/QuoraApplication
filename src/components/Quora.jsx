// import React from 'react'
// import QuoraHeader from './QuoraHeader'

import Feed from './Feed'
import QuoraHeader from './QuoraHeader'
import Sidebar from './Sidebar'
import Widget from './Widget'
import './css/quora.css'

function Quora() {
  return (
    <div className='Quora'>
         <QuoraHeader/>
         <div className="quora-contents">
          <div className="quora-content">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
         </div>
    </div>
  )
}

export default Quora