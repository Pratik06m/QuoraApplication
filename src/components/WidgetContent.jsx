import React from 'react'
import "./css/WidgetContent.css"
function WidgetContent() {
  return (
    <div className='widget__contents'>
        <div className="widget__content">
            <img src="https://e7.pngegg.com/pngimages/392/566/png-clipart-mobile-app-development-web-development-android-mobile-application-web-design-text-thumbnail.png" alt="Mobile App Development" />
            <div className="widget_contentTitle">
                <h5>Mobile App Programmer</h5>
                <p>The Best Mobile App Development Company </p>
            </div>
        </div>
        <div className="widget__content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82T6CALKWwcph-rVYz8pmQVRZVD65R-roFw&s" alt="Software Developement" />
            <div className="widget_contentTitle">
                <h5>Software Developer</h5>
                <p>The Best Software Development Company </p>
            </div>
        </div>
        <div className="widget__content">
            <img src="https://w7.pngwing.com/pngs/148/477/png-transparent-web-development-web-design-web-application-development-software-development-web-design-thumbnail.png" alt="Web App Development" />
            <div className="widget_contentTitle">
                <h5>Web Developer</h5>
                <p>The Best Web Development Company </p>
            </div>
        </div>
    </div>
  )
}

export default WidgetContent