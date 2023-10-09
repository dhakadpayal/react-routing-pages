import React from 'react';
import './profile.css'
export default function Profile() {
  return (
    <>
    <div className="navbar-top">
    <div className="title">
        <h1>Profile Page</h1>
    </div>


    <ul>
        <li>
            <a href="#message">
                <span className="icon-count">29</span>
                <i className="fa fa-envelope fa-2x"></i>
            </a>
        </li>
        <li>
            <a href="#notification">
                <span className="icon-count">59</span>
                <i className="fa fa-bell fa-2x"></i>
            </a>
        </li>
        <li>
            <a href="#sign-out">
                <i className="fa fa-sign-out-alt fa-2x"></i>
            </a>
        </li>
    </ul>
 
</div>

<div className="sidenav">
    <div className="profile">
        <img src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png" alt="" width="100" height="100"/>

        <div className="name">
            ImDezCode
        </div>
        <div className="job">
            Web Developer
        </div>
    </div>

    <div className="sidenav-url">
        <div className="url">
            <a href="#profile" className="active">Profile</a>
            <hr align="center"/>
        </div>
        <div className="url">
            <a href="#settings">Settings</a>
            <hr align="center"/>
        </div>
    </div>
</div>

<div className="main">
    <h2>IDENTITY</h2>
    <div className="card">
        <div className="card-body">
            <i className="fa fa-pen fa-xs edit"></i>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td>payal</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>payal@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>:</td>
                        <td>Neemuch</td>
                    </tr>
                    <tr>
                        <td>Hobbies</td>
                        <td>:</td>
                        <td>Diving, Reading Book</td>
                    </tr>
                    <tr>
                        <td>Job</td>
                        <td>:</td>
                        <td>Web Developer</td>
                    </tr>
                    <tr>
                        <td>Skill</td>
                        <td>:</td>
                        <td> HTML, CSS,Javascript,Reactjs,Nodejs</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    
</div>
    </>
  );
}
