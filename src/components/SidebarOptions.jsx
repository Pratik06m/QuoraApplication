import React from 'react'
import './css/SidebarOptions.css'
import { Add } from '@mui/icons-material'

function SidebarOptions() {
  return (
    <div className='sidebarOptions'>
        <div className="sidebarOption">
            <Add/>
            <p className="text">Discover Space</p>
        </div>
        <div className="sidebarOption">
            <img src="https://images.news18.com/ibnlive/uploads/2023/04/shutterstock_1509720656-1-16817264893x2.jpg?impolicy=website&width=640&height=480" alt="History" />
            <p>History</p>
        </div>
        <div className="sidebarOption">
            <img src="https://img.lovepik.com/photo/50057/1958.jpg_wh860.jpg" alt="Business" />
            <p>Business</p>
        </div>
        <div className="sidebarOption">
            <img src="https://assets.entrepreneur.com/content/3x2/2000/20160105180846-brain-psychological-psychology-thinking-network-smart-education-creative-pointing.jpeg" alt="Psychology" />
            <p>Psychology</p>
        </div>
        <div className="sidebarOption">
            <img src="https://www.helpguide.org/wp-content/uploads/2023/02/Cooking-at-Home.jpeg" alt="Cooking" />
            <p>Cooking</p>
        </div>
        <div className="sidebarOption">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2022/09/11/music-logo-vector-template-design-Graphics-38239116-1.jpg" alt="Music" />
            <p>Music</p>
        </div>
        <div className="sidebarOption">
            <img src="https://www.training.com.au/wp-content/uploads/science-stem-feature.png" alt="Science" />
            <p>Science</p>
        </div>
        <div className="sidebarOption">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7iUsEGI0wCr7TmORjS5PnqRdb4iHGn6skAg&s" alt="Health" />
            <p>Health</p>
        </div>
        <div className="sidebarOption">
            <img src="https://translate.video/static/images/content/39.png" alt="Movies" />
            <p>Movies</p>
        </div>
        <div className="sidebarOption">
            <img src="https://media.licdn.com/dms/image/D4D12AQG0e5BrFcLguw/article-cover_image-shrink_720_1280/0/1696049288795?e=2147483647&v=beta&t=CVJ6gx9yS5Nw8uFrc9haT-DXro0Em7OMjuStBwilCiE" alt="Tech" />
            <p>Technology</p>
        </div>
        <div className="sidebarOption">
            <img src="https://t4.ftcdn.net/jpg/03/68/82/97/360_F_368829743_FYSUUgYwPEKYrQvK7I4i09PP2XqqFcKL.jpg" alt="Education" />
            <p>Education</p>
        </div>
    
    </div>
  )
}

export default SidebarOptions