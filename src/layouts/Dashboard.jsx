import React from 'react';
import IconsImports  from '../assets/js/Imports.js';
import Calendar from './Calendar.jsx';

function Dashboard() {

    return(
        <section className="home" id="contentSection">
            <div className="row mt-5">
                <div className="col-8">
                    <div className="card" style={{ backgroundColor: "white", height: "170px", display: "flex", alignItems: "center" }}>
                        <div className="card-body" style={{display: "flex", justifyContent: "space-between", width: "100%", padding: "0", overflow: "hidden", borderBottomRightRadius: "1rem"}}>
                            <div style={{padding: "60px 0 50px 30px"}}>
                                <h3>Welcome back, </h3>
                                <p>Manage your task efficiently and stay organized.</p>
                            </div>
                            <div>
                                <img src={IconsImports.welcomeicon} alt="Welcome GIF" style={{height: "190px", width: "350px", borderTopRightRadius: "1rem"}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{backgroundColor: "white", height: "170px"}}>
                        <div className="card-body d-flex align-items-center;" style={{padding: "0"}}>
                            <img src={IconsImports.riceicon} alt="Cook Image" style={{width: "150px", height: "150px", margin: "10px", borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem"}}/>
                            <div className="content" style={{flexGrow: "1", textAlign: "center", margin: "45px 30px 30px 0"}}>
                                <div className="card-title" style={{margin: "10px 0 0 0"}}>
                                    <h5><strong>Assigned Cook for Today</strong></h5>
                                </div>
                                <div className="card-date">
                                    <span id="currentDate"></span>
                                </div>
                                <div className="user-info d-flex align-items-center justify-content-center" style={{textAlign: "center", width: "100%"}}>
                                    <span id="username" style={{fontSize: "16px", fontWeight: "700", color: "lightcoral"}}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card" style={{ backgroundColor: "lightyellow"}}>
                        <div className="card-body">
                            <img src={IconsImports.pendingicon} alt="done" style={{width: "50px"}}/>
                            <h2 className="card-title mt-2"></h2>
                            <p className="card-text">Pending Tasks</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ backgroundColor: "lightcyan"}}>
                        <div className="card-body">
                            <img src={IconsImports.progressicon} alt="done" style={{width: "50px"}}/>
                            <h2 className="card-title mt-2"></h2>
                            <p className="card-text">In Progress Tasks</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ backgroundColor: "honeydew"}}>
                        <div className="card-body">
                            <img src={IconsImports.completeicon} alt="done" style={{width: "50px"}}/>
                            <h2 className="card-title mt-2"></h2>
                            <p className="card-text">Completed Tasks</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{ backgroundColor: "mistyrose"}}>
                        <div className="card-body">
                            <img src={IconsImports.dueicon} alt="done" style={{width: "50px"}}/>
                            <h2 className="card-title mt-2"></h2>
                            <p className="card-text">Past Due Tasks</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card" style={{borderRadius: "2rem"}}>
                        <div className="card-body" style={{position: "relative", height: "450px"}}>
                            <img src={IconsImports.announcementicon} alt="done" className='overlay-img'></img>
                            <h2 className="card-title1">ANNOUNCEMENT</h2>
                            <div className="announcementCarousel" id="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item">
                                        <div className="content" style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"}}>
                                            <img src="" alt="Announcement Image" style={{width: "150px", marginBottom: "10px"}}/>
                                            <h2 className="title" style={{marginBottom: "0!important"}}>Announcement</h2>
                                            <p className="date" style={{margin: "5px 0", fontSize: "14px"}}></p>
                                            <p className="description" style={{margin: "0 15px"}}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#announcementCarousel" className="carousel-control-prev" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a href="#announcementCarousel" className="carousel-control-next" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{backgroundColor: "white"}}>
                        <div className="card-body" style={{height: "450px", overflow: "auto"}}>
                            <Calendar />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{backgroundColor: "white", height: "450px", position: "relative"}}>
                        <div className="card-header2 d-flex align-items-center justify-content-center" style={{position: "relative", padding: "20px"}}>
                            <h2 className="card-title2" style={{margin: "0", display: "flex", alignItems: "center"}}>Finished Tasks
                                <img src={IconsImports.logoicon} alt="done" className="overlay-img2" style={{marginLeft: "10px"}}/>
                            </h2>
                        </div>
                        <div className="card-body d-flex align-items center justify-content-center" style={{height: "100%"}}>
                            <canvas id="taskBarGraph" style={{maxWidth: "100%", maxHeight: "100%"}}></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Dashboard