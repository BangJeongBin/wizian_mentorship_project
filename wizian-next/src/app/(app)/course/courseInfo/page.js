"use client"

import React from "react";
import Swal from "sweetalert2";

const CourseInfo = () => {
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
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">진행중인 강의 /</a>&ensp;<a href="#">강의 정보</a>

                <form name="" id="" method="post" onSubmit={handleSubmit}>
                    <div className="row">
                        <button type="submit" className="btn btn-primary col-lg-offset-10 margin-bottom-30">
                            <i className="fa fa-refresh fa-spin"></i> 수정하기
                        </button>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h3 className="panel-title">내 강의 정보</h3>
                                </div>
                                <div className="panel-body">
                                    <p>번호</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br/>
                                    <p>강의명</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                    <p>강의실</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                    <p>수료일</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                    <p>수강인원</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                    <p>개설여부</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                </div>
                            </div>

                            <div className="panel panel-scrolling">
                                <div className="panel-heading">
                                    <h3 className="panel-title">수강학생</h3>
                                </div>
                                <div className="panel-body no-padding">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th><input type="checkbox"/></th>
                                            <th>Order No.</th>
                                            <th>Name</th>
                                            <th>Amount</th>
                                            <th>Date &amp; Time</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><input type="checkbox"/></td>
                                            <td><a href="#">763648</a></td>
                                            <td>Steve</td>
                                            <td>$122</td>
                                            <td>Oct 21, 2016</td>
                                            <td><span className="label label-success">COMPLETED</span></td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox"/></td>
                                            <td><a href="#">763649</a></td>
                                            <td>Amber</td>
                                            <td>$62</td>
                                            <td>Oct 21, 2016</td>
                                            <td><span className="label label-warning">PENDING</span></td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox"/></td>
                                            <td><a href="#">763650</a></td>
                                            <td>Michael</td>
                                            <td>$34</td>
                                            <td>Oct 18, 2016</td>
                                            <td><span className="label label-danger">FAILED</span></td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox"/></td>
                                            <td><a href="#">763651</a></td>
                                            <td>Roger</td>
                                            <td>$186</td>
                                            <td>Oct 17, 2016</td>
                                            <td><span className="label label-success">SUCCESS</span></td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox"/></td>
                                            <td><a href="#">763652</a></td>
                                            <td>Smith</td>
                                            <td>$362</td>
                                            <td>Oct 16, 2016</td>
                                            <td><span className="label label-success">SUCCESS</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="panel-footer">
                                    <div className="row">
                                        <div className="col-md-6"><span className="panel-note"><i
                                            className="fa fa-clock-o"></i> Last 24 hours</span></div>
                                        <div className="col-md-6 text-right"><a href="#" className="btn btn-primary">View
                                            All Purchases</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h3 className="panel-title">강의 시간표</h3>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Steve</td>
                                            <td>Jobs</td>
                                            <td>@steve</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Simon</td>
                                            <td>Philips</td>
                                            <td>@simon</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Jane</td>
                                            <td>Doe</td>
                                            <td>@jane</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div id="panel-scrolling-demo" className="panel">
                                <div className="panel-heading">
                                    <h3 className="panel-title">강의계획서</h3>
                                </div>
                                <div className="panel-body">
                                    <textarea className="form-control"
                                              placeholder="Objectively network visionary methodologies via best-of-breed users.
                                                                Phosfluorescently initiate go forward leadership skills before an expanded array of
                                                                infomediaries. Monotonectally incubate web-enabled communities rather than
                                                                process-centric.
                                                            Objectively network visionary methodologies via best-of-breed users.
                                                                Phosfluorescently initiate go forward leadership skills before an expanded array of
                                                                infomediaries. Monotonectally incubate web-enabled communities rather than
                                                                process-centric.
                                                            Objectively network visionary methodologies via best-of-breed users.
                                                                Phosfluorescently initiate go forward leadership skills before an expanded array of
                                                                infomediaries. Monotonectally incubate web-enabled communities rather than
                                                                process-centric."
                                              rows="20" defaultValue="">

                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default CourseInfo;
