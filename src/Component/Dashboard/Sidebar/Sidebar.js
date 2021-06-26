import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {faPlusSquare,  faThLarge } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
    
                    <div>
                    <li>
                        <Link to="/addBlogs" className="text-white">
                            <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Blog</span>
                        </Link>
                    </li>
                   
                    <li>
                        <Link to="/blogManage" className="text-white" >
                          <FontAwesomeIcon icon={faThLarge} /> <span>Manage Blog</span>
                        </Link>
                    </li>
                    </div>
                
            </ul>
        </div>
    
    );
};

export default Sidebar;