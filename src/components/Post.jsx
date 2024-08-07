import React, { useState } from 'react'
import './css/Post.css'
import { Avatar } from '@mui/material'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@mui/icons-material'
import {Modal} from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import CloseIcon from "@mui/icons-material/Close"
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function Post({UserName, TimeStamp, TestQuestion, imageUrl}) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const Close =(<CloseIcon/>)
  return (
    <div className='post'>
        <div className="post__info">
            <Avatar/>
            <h4>{UserName}</h4>
            <small>{TimeStamp}</small>
        </div>
        <div className="post__body">
            <div className="post__question">
            <p>{TestQuestion}</p>
            <button onClick={()=> setIsModalOpen(true)} className='post__btnAnswer'>Answer</button>
            <Modal 
             open ={isModalOpen}
             CloseIcon = {Close} 
             onClose={()=> setIsModalOpen(false)}
             closeOnEsc
             center
             closeOnOverlayClick="false"
             styles={{
                overlay:{
                    height:"auto",
                }
             }}>
                <div className="modal__question">
                    <h1>This is test Question.</h1>
                    <p>asked by <span className='name'>Username</span>on <span className='name'>timestamp</span></p>
                </div>
                <div className="modal_answer">
                    <ReactQuill placeholder='Enter Your Answer'/>
                </div> 
                <div className="modal__button">
                <button className="cancel" onClick={()=> setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className='add'>Add Question</button>     
                </div>
             </Modal>
            </div>
            <div className="post_img">
                <img src={imageUrl} alt="Ram" />
            </div>
        </div>
        <div className="post__footer">
            <div className="post__footerAction">
                <ArrowUpwardOutlined/>
                <ArrowDownwardOutlined/>
            </div>
            <RepeatOneOutlined/>
            <ChatBubbleOutlined/>
            <div className="post__footerLeft">
                <ShareOutlined/>
                <MoreHorizOutlined/>
            </div>
        </div>

        <p style={{
            color:"rgba(0,0,0,0.5)",
            fontSize:"12px",
            fontWeight:"bold",
            margin:"10px 0",


        }}>1 Answer</p>
        <div style={{
            margin: "5px 0px 0px 0px",
            padding: "5px 0px 0px 20px",
            borderTop:"1px solid lightgray",
        }} className="post__answer">
            
            <div style={{
                display:"flex",
                flexDirection:"column",
                width:"100%",
                padding:"10px 5px",
                borderTop:"1px solid lightgray",
            }} className="post-answer-container">
                
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    marginBottom:"10px",
                    fontSize:"12px",
                    fontWeight:600,
                    color:"#888",
                }} className="post-answered">
                    <Avatar/>
                    <div style={{
                        margin:"0px 10px"
                    }} className="post-info">
                        <p>Username</p>
                        <span>Time Stamp</span>
                    </div>
                </div>
                <div className="post-answer">This is test answer</div>
            </div>
        </div>
    </div>
  )
}

export default Post