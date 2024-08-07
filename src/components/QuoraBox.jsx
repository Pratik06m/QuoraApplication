import React from 'react'
import { Edit, LiveHelp, RateReview } from '@mui/icons-material'
import './css/QuoraBox.css'
import { Avatar, Input } from "@mui/material"
import Modal from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import {  ExpandMore, PeopleAltOutlined, } from '@mui/icons-material'


function QuoraBox() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const Close = (<CloseIcon/>);

  return (
    <div className="quoraBox">
      <div className="quoraBox__info" 
      onClick={() => setIsModalOpen(true)} 
      >
        <Avatar />
        <div className='qurabox_input'>
          <h5>What do you want to ask or share ?</h5>
        </div>

      </div>
      <div className="quoraBox__quora"
      onClick={() => setIsModalOpen(true)} 
      >
        <button>
          <LiveHelp/>
          Ask
        </button>

        <button className='middle'>
        <RateReview/>
          Answer
        </button>

        <button>
          <Edit/>
          Post
        </button>

        <Modal
          open={isModalOpen}
          CloseIcon={Close}
          onClose={() => setIsModalOpen(false)}
          center
          closeOnEsc
          closeOnOverlayClick="false"
          styles={{
            overlay: {
              height: "auto",
            }
          }}
        >
          <div className='modal__title'>
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className='modal__info'>
            <Avatar className='avatar' />
            <div className="modal__scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>

          <div className="modal__Field">
            <Input type='text' placeholder="Start your question with 'What', 'How', 'Why', etc. " />
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <input type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                style={{
                  margin: "5px 0",
                  border: "1px solid lightgray",
                  padding: "10px",
                  outline: "2px solid #000"
                }}
                placeholder='Optional: Input a link that gives context' />
              {
                inputUrl !== "" && <img style={{
                  height: "40vh",
                  objectFit: "contain"
                }} src={inputUrl} alt="Image" />
              }

            </div>
          </div>
          <div className='modal__buttons'>
            <button className='cancel' onClick={() => setIsModalOpen(false)} >
              Cancel
            </button>
            <button type='submit' className='add'  >
              Submit
            </button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default QuoraBox