import React from 'react';
import IconsImports from '../assets/js/Imports.js';
import Calendar from './Calendar.jsx';
import Sidebar from '../components/Sidebar.jsx';

function Dashboard() {
    return (
        <section className="home" id="contentSection">
            <div className="row mt-5">
                <div className="col-lg-8 col-md-12">
                    <div className="card welcome-card">
                        <div className="card-body welcome-card-body">
                            <div className="welcome-text">
                                <h3><strong>Welcome back, </strong></h3>
                                <p>Manage your task efficiently and stay organized.</p>
                            </div>
                            <div className="welcome-image">
                                <img src={IconsImports.welcomeicon} alt="Welcome GIF" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-12">
                    <div className="card assigned-cook-card">
                        <div className="card-body assigned-cook-body d-flex align-items-center">
                            <img src={IconsImports.riceicon} alt="Cook Image" className="cook-img" />
                            <div className="content">
                                <div className="card-title">
                                    <h5><strong>Assigned Cook for Today</strong></h5>
                                </div>
                                <div className="card-date">
                                    <span id="currentDate">September 17 2024</span>
                                </div>
                                <div className="user-info d-flex align-items-center justify-content-center">
                                    <span id="username" className="username">John Doe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row task-cards">
                <div className="col">
                    <div className="card task-card pending-task-card">
                        <div className="card-body">
                            <img src={IconsImports.pendingicon} alt="Pending"  style={{width: "50px"}}/>
                            <h2 className="card-title mt-2">20</h2>
                            <p className="card-text">Pending Tasks</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card task-card progress-task-card">
                        <div className="card-body">
                            <img src={IconsImports.progressicon} alt="In Progress" style={{width: "50px"}}/>
                            <h2 className="card-title mt-2">20</h2>
                            <p className="card-text">In Progress Tasks</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card task-card complete-task-card">
                        <div className="card-body">
                            <img src={IconsImports.completeicon} alt="Completed" style={{width: "50px"}}/>
                            <h2 className="card-title mt-2">20</h2>
                            <p className="card-text">Completed Tasks</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card task-card due-task-card">
                        <div className="card-body">
                            <img src={IconsImports.dueicon} alt="Past Due" style={{width: "50px"}}/>
                            <h2 className="card-title mt-2">20</h2>
                            <p className="card-text">Past Due Tasks</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card announcement-card">
                        <div className="card-body card-announcement">
                            <img src={IconsImports.announcementicon} alt="Announcement" className="overlay-img" />
                            <h2 className="card-title1">ANNOUNCEMENT</h2>
                            <div className="announcementCarousel" id="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item">
                                        <div className="content announcement-content">
                                            <img src={IconsImports.meetingicon} alt="Announcement Image"/>
                                            <h2 className="title" style={{marginBottom: "0!important"}}>Announcement</h2>
                                            <p className="date" style={{margin: "5px 0", fontSize: "14px"}}>September 23, 2024</p>
                                            <p className="description" style={{margin: "0 15px"}}>Sample content description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#announcementCarousel" className="carousel-control-prev" role="button" data-slide="prev" style={{color: "black"}}>
                            <span className="sr-only"></span>
                        </a>
                        <a href="#announcementCarousel" className="carousel-control-next" role="button" data-slide="next" style={{color: "black"}}>
                            <span className="sr-only"></span>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="card calendar-card">
                        <div className="card-body calendar-body">
                            <Calendar />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card finished-task-card">
                        <div className="card-header2 d-flex align-items-center justify-content-center">
                            <h2 className="card-title2">Finished Tasks
                                <img src={IconsImports.logoicon} alt="Logo" className="overlay-img2" />
                            </h2>
                        </div>
                        <div className="card-body finished-task-body d-flex align-items-center justify-content-center">
                            <canvas id="taskBarGraph"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
