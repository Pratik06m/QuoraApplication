import React from 'react'
import HomeIcon from "@mui/icons-material/Home"
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined"
import { AssignmentTurnedInOutlined, NotificationsOutlined, PeopleAltOutlined, Search } from '@mui/icons-material'
import { Avatar, Button } from '@mui/material'
import "./css/QuoraHeader.css"

function QuoraHeader() {
    return (
      <div className="qHeader">
       <div className="qHeader-content">
        <div className="qHeader-logo">
            <img className='imgclass' src="https://logo-download.com/wp-content/data/images/svg/Quora-logo.svg" alt="image"></img>
        </div>
            <div className="qHeader-icons">
            <div className="qHeader-icon">
                <HomeIcon/>
            </div>
            <div className="qHeader-icon">
                <FeaturedPlayListOutlinedIcon/>
            </div>
            <div className="qHeader-icon">
                <AssignmentTurnedInOutlined />
            </div>
            <div className="qHeader-icon">
                <PeopleAltOutlined />
            </div>
            <div className="qHeader-icon">
                <NotificationsOutlined />
            </div>
            </div>
            <div className="qHeader-input">
                <Search />
                <input type='text' placeholder='Search'/>
            </div>
            <div className="qHeader-Rem">
                <Avatar />
            </div>
            <Button>Add Question</Button>
       </div>
       </div>
    )
  }
  
  export default QuoraHeader