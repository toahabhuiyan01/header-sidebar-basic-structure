import React from 'react'
import Content from '../containers/Content'
import Header from '../containers/Header/Header'
import SideBar from '../containers/SideBar'

function Layout() {
    return (
        <div>
            <div style={{display: "flex"}}>
                <Header />
            </div>
            <div style={{display: "flex", marginTop: "10vh"}}>
                <div style={{width: "10%", height: "90vh"}}>
                    <SideBar />
                </div>
                <div style={{width: "90%", height: "90vh",  backgroundColor: "ghostwhite"}}>
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default Layout
