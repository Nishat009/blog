import React from 'react';
// import Header from '../../Shared/Header/Header';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const Dashboard = () => {
    return (
        <section>
            <div style={containerStyle}>
          {/* <Header></Header> */}
                <div className="col-md-8">
                   
                    <Sidebar></Sidebar>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;