"use client"

import React from "react";

const CourseAlarm = () => {
    return (
        <div className="main-content">
            <div className="container-fluid">
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">진행중인 강의 /</a>&ensp;<a href="#">수강생 알림</a>
                <div className="row">
                    <button type="button" className="btn btn-success col-lg-offset-10 margin-bottom-30">
                        <i className="fa fa-refresh fa-spin"></i> 조회하기
                    </button>
                </div>

                <div id="toastr-demo" className="panel col">
                    <div className="panel-body row">
                        <div className="col-md-3">
                            <strong>강의명</strong>&emsp;&emsp;&emsp;
                            <select className="navbar">
                                <option value="cheese">Cheese(진행중)</option>
                                <option value="tomatoes">Tomatoes</option>
                                <option value="mozarella">Mozzarella</option>
                                <option value="mushrooms">Mushrooms</option>
                                <option value="pepperoni">Pepperoni</option>
                                <option value="onions">Onions</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <strong>학생 상태</strong>&emsp;&emsp;&emsp;
                            <select className="navbar">
                                <option value="cheese">진행중인 학생</option>
                                <option value="tomatoes">수료한 학생</option>
                                <option value="mozarella">수강 실패 학생</option>
                                <option value="mushrooms">Mushrooms</option>
                                <option value="pepperoni">Pepperoni</option>
                                <option value="onions">Onions</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <strong>성적 안내</strong>&emsp;&emsp;&emsp;
                            <select className="navbar">
                                <option value="cheese">과제 제출 학생</option>
                                <option value="tomatoes">과제 미제출 학생</option>
                                <option value="mozarella">금일 출석 학생</option>
                                <option value="mushrooms">금일 미출석 학생</option>
                                <option value="pepperoni">Pepperoni</option>
                                <option value="onions">Onions</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <strong><i className="lnr lnr-magnifier"></i> 검색</strong>
                            <input type="text" className="form-control" placeholder="학생명 입력"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div className="panel panel-scrolling">
                            <div className="panel-heading">
                                <h3 className="panel-title">학생 리스트</h3>
                            </div>
                            <div className="panel-body">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th><input type="checkbox"/></th>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><input type="checkbox"/></td>
                                        <td>1</td>
                                        <td>Steve</td>
                                        <td>Jobs</td>
                                        <td>@steve</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"/></td>
                                        <td>2</td>
                                        <td>Simon</td>
                                        <td>Philips</td>
                                        <td>@simon</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"/></td>
                                        <td>3</td>
                                        <td>Jane</td>
                                        <td>Doe</td>
                                        <td>@jane</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">학생 정보</h3>
                            </div>
                            <div className="panel-body">
                                <p>학생 번호</p>
                                <input type="text" className="form-control" placeholder="text field"/>
                                <br/>
                                <p>학생 이름</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>수업명</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>수강 상태</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>학적 상태</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>금일 출석 여부</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <div className="col-md-6">
                                    <p>상반기 과제 제출</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                </div>
                                <div className="col-md-6">
                                    <p>하반기 과제 제출</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">알림 전송</h3>
                            </div>
                            <div className="panel-body">
                                <div className="col-md-10">
                                    <textarea className="form-control" placeholder="알림 내용을 입력하세요" rows="10" defaultValue=""></textarea>
                                </div>
                                <div className="col-md-2">
                                    <strong>날짜 예약</strong>&emsp;&emsp;&emsp;
                                    <select className="navbar">
                                        <option value="cheese">달력 변경 해야함</option>
                                        <option value="tomatoes">Tomatoes</option>
                                        <option value="mozarella">Mozzarella</option>
                                        <option value="mushrooms">Mushrooms</option>
                                        <option value="pepperoni">Pepperoni</option>
                                        <option value="onions">Onions</option>
                                    </select>
                                    <p>전송 시간</p>
                                    <input type="password" className="form-control" value="asecret"/>

                                    <button type="button" className="btn btn-primary form-control margin-top-30">
                                        <i className="fa fa-refresh fa-spin"></i> 알림 전송
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CourseAlarm;
