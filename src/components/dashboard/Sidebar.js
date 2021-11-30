import React from 'react'

const Sidebar = () => {
    return (
        <div className="Sidebar"> 
            <div className="Sidebar__Routes">
                <div className="Sidebar__Routes__Logo">
                    Logo
                </div>
                <div className="Sidebar__Routes__Text">
                    Recommendation
                </div> 
            </div>
            <div className="Sidebar__Routes">
                <div className="Sidebar__Routes__Logo">
                    Logo
                </div>
                <div className="Sidebar__Routes__Text">
                    Edit a photo
                </div> 
            </div>
            <div className="Sidebar__Cloud">
                My cloud
            </div>
            <div className="Sidebar__Routes">
                <div className="Sidebar__Routes__Logo">
                    Logo
                </div>
                <div className="Sidebar__Routes__Text">
                    My projects
                </div> 
            </div>
            <div className="Sidebar__Routes">
                <div className="Sidebar__Routes__Logo">
                    Logo
                </div>
                <div className="Sidebar__Routes__Text">
                    Uploads
                </div> 
            </div>
            <div className="Sidebar__Routes">
                <div className="Sidebar__Routes__Logo">
                    Logo
                </div>
                <div className="Sidebar__Routes__Text">
                    Trash
                </div> 
            </div>

        </div>


    )
}

export default Sidebar
