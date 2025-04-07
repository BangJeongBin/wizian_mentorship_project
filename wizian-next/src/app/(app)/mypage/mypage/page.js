"use client"

import React from "react";
import Swal from "sweetalert2";

const MyPage = () => {
    // sweetAlert
    const handleSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            title: '변경사항을 적용하시겠습니까?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '예',
            cancelButtonText: '아니오',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '변경 완료되었습니다!',
                    icon: 'success',
                    confirmButtonText: '확인'
                });
            }
        });
    };


    return (
        <div className="main-content">
            <div className="container-fluid">
                <div className="panel panel-profile">
                    <div className="clearfix">

                        {/* LEFT COLUMN */}
                        <div className="profile-left">

                            {/* PROFILE HEADER */}
                            <div className="profile-header">
                                <div className="overlay"></div>
                                <div className="profile-main">
                                    <img src="/assets/img/user-medium.png" className="img-circle" alt="Avatar"/>
                                    <h3 className="name">홍길동</h3>
                                </div>
                                <div className="profile-stat">
                                    <div className="row">
                                        <div className="col-md-4 stat-item">
                                            1 <span>강사 번호</span>
                                        </div>
                                        <div className="col-md-4 stat-item">
                                            1 <span>현재 진행하는 강의</span>
                                        </div>
                                        <div className="col-md-4 stat-item">
                                            45 <span>총 강의 수</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END PROFILE HEADER */}

                            {/* PROFILE DETAIL */}
                            <div className="profile-detail">
                                <div className="profile-info">
                                    <h4 className="heading">개인정보</h4>
                                    <ul className="list-unstyled list-justify">
                                        <li>ID
                                            <input type="text" className="form-control" value="asecret"/>
                                        </li><br/>
                                        <li>Password
                                            <input type="text" className="form-control" value="asecret"/>
                                        </li><br/>
                                        <li>Name
                                            <input type="text" className="form-control" value="asecret"/>
                                        </li><br/>
                                        <li>Gender
                                            <input type="text" className="form-control" value="asecret"/>
                                        </li><br/>
                                    </ul>
                                </div>
                            </div>
                            {/* END PROFILE DETAIL */}

                        </div>
                        {/* END LEFT COLUMN */}

                        {/* RIGHT COLUMN */}
                        <div className="profile-right">
                            <h4 className="heading">정보 수정</h4>

                            {/* 정보수정 */}
                            <form name="" id="" method="post" onSubmit={handleSubmit}>
                            <div className="awards">
                                <div className="row">
                                    <div className="col-md-4">
                                        <p>생년월일</p>
                                        <input type="text" className="form-control" placeholder="text field"/>
                                        <br/>
                                    </div>
                                    <div className="col-md-4">
                                        <p>연락처</p>
                                        <input type="password" className="form-control" value="asecret"/>
                                        <br/>
                                    </div>
                                    <div className="col-md-4">
                                        <p>우편번호</p>
                                        <input type="password" className="form-control" value="asecret"/>
                                        <br/>
                                    </div>

                                    <div className="col-md-4">
                                        <p>주소</p>
                                        <input type="text" className="form-control" placeholder="text field"/>
                                        <br/>
                                    </div>
                                    <div className="col-md-4">
                                        <p>상세주소</p>
                                        <input type="password" className="form-control" value="asecret"/>
                                        <br/>
                                    </div>
                                    <div className="col-md-4">
                                        <p>이메일</p>
                                        <input type="password" className="form-control" value="asecret"/>
                                        <br/>
                                    </div>
                                </div>
                                
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">프로필 수정</button>
                                </div>
                            </div>
                            </form>
                            {/* END 정보수정 */}


                            {/* TABBED CONTENT */}
                            <div className="custom-tabs-line tabs-line-bottom left-aligned">
                                <ul className="nav" role="tablist">
                                    <li className="active">
                                        <a href="#tab-bottom-left1" role="tab" data-toggle="tab">Recent Activity</a>
                                    </li>
                                    <li>
                                        <a href="#tab-bottom-left2" role="tab" data-toggle="tab">수강 학생
                                            <span className="badge">7</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content panel-scrolling">
                                <div className="tab-pane fade in active" id="tab-bottom-left1">
                                    <ul className="list-unstyled activity-timeline">
                                        <li>
                                            <i className="fa fa-comment activity-icon"></i>
                                            <p>Commented on post <a href="#">Prototyping</a> <span
                                                className="timestamp">2 minutes ago</span></p>
                                        </li>
                                        <li>
                                            <i className="fa fa-cloud-upload activity-icon"></i>
                                            <p>Uploaded new file <a href="#">Proposal.docx</a> to project <a href="#">New
                                                Year Campaign</a> <span className="timestamp">7 hours ago</span></p>
                                        </li>
                                        <li>
                                            <i className="fa fa-plus activity-icon"></i>
                                            <p>Added <a href="#">Martin</a> and <a href="#">3 others colleagues</a> to
                                                project repository <span className="timestamp">Yesterday</span></p>
                                        </li>
                                        <li>
                                            <i className="fa fa-check activity-icon"></i>
                                            <p>Finished 80% of all <a href="#">assigned tasks</a> <span
                                                className="timestamp">1 day ago</span></p>
                                        </li>
                                    </ul>
                                    <div className="margin-top-30 text-center"><a href="#" className="btn btn-default">See
                                        all activity</a></div>
                                </div>
                                <div className="tab-pane fade" id="tab-bottom-left2">
                                    <div className="table-responsive">
                                        <table className="table project-table">
                                            <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Progress</th>
                                                <th>Leader</th>
                                                <th>Status</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><a href="#">Spot Media</a></td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar"
                                                             aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                             style={{width: '60%'}}>
                                                            <span>60% Complete</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="/assets/img/user2.png" alt="Avatar" className="avatar img-circle"/>
                                                    <a href="#">Michael</a>
                                                </td>
                                                <td>
                                                    <span className="label label-success">ACTIVE</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">E-Commerce Site</a></td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar"
                                                             aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"
                                                             style={{width: '33 %'}}>
                                                            <span>33% Complete</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="/assets/img/user1.png" alt="Avatar" className="avatar img-circle"/>
                                                    <a href="#">Antonius</a>
                                                </td>
                                                <td>
                                                    <span className="label label-warning">PENDING</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">Project 123GO</a></td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar"
                                                             aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"
                                                             style={{width: '68 %'}}>
                                                            <span>68% Complete</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="/assets/img/user1.png" alt="Avatar" className="avatar img-circle"/>
                                                    <a href="#">Antonius</a>
                                                </td>
                                                <td>
                                                    <span className="label label-success">ACTIVE</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">Wordpress Theme</a></td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar" role="progressbar"
                                                             aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                                             style={{width: '75 %'}}>
                                                            <span>75%</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="/assets/img/user2.png" alt="Avatar" className="avatar img-circle"/>
                                                    <a href="#">Michael</a>
                                                </td>
                                                <td>
                                                    <span className="label label-success">ACTIVE</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">Project 123GO</a></td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-success"
                                                             role="progressbar" aria-valuenow="100" aria-valuemin="0"
                                                             aria-valuemax="100" style={{width: '100 %'}}>
                                                            <span>100%</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="/assets/img/user1.png" alt="Avatar" className="avatar img-circle"/>
                                                    <a href="#">Antonius</a>
                                                </td>
                                                <td>
                                                    <span className="label label-default">CLOSED</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><a href="#">Redesign Landing Page</a></td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-success"
                                                             role="progressbar" aria-valuenow="100" aria-valuemin="0"
                                                             aria-valuemax="100" style={{width: '100 %'}}>
                                                            <span>100%</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <img src="/assets/img/user5.png" alt="Avatar" className="avatar img-circle"/>
                                                    <a href="#">Jason</a>
                                                </td>
                                                <td>
                                                    <span className="label label-default">CLOSED</span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* END TABBED CONTENT */}

                        </div>
                        {/* END RIGHT COLUMN */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPage;
