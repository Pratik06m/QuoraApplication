// import React from 'react'
import './css/FilterOptions.css'

function FilterOptions() {
    return (
        <div>
            <div className="filterOptions">
                <h5 className="text">Filters</h5>
            </div>
            <div className='filterOptions'>

                <div className="filterOption">
                    <p>All Notifications</p>
                </div>
                <div className="filterOption">
                    <p>Stories</p>
                </div>
                <div className="filterOption">
                    <p>Questions</p>
                </div>
                <div className="filterOption">
                    <p>Spaces</p>
                </div>
                <div className="filterOption">
                    <p>People Updates</p>
                </div>
                <div className="filterOption">
                    <p>Comments and Mentions</p>
                </div>
                <div className="filterOption">
                    <p>Upvotes</p>
                </div>
                <div className="filterOption">
                    <p>Your Content</p>
                </div>
                <div className="filterOption">
                    <p>Your Profile</p>
                </div>
                <div className="filterOption">
                    <p>Announcements</p>
                </div>
                <div className="filterOption">
                    <p>Earnings</p>
                </div>
                <div className="filterOption">
                    <p>Subscriptions</p>
                </div>

            </div>
        </div>
    )
}

export default FilterOptions