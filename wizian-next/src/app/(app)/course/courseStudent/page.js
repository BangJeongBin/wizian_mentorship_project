"use client"

import React from "react";

const CourseStudent = () => {
    return (
        <div className="main-content">
            <div className="container-fluid">
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">진행중인 강의 /</a>&ensp;<a href="#">수강학생</a>
                <div className="row">
                    <button type="button" className="btn btn-success col-lg-offset-10 margin-bottom-30">
                        <i className="fa fa-refresh fa-spin"></i> 조회하기
                    </button>
                </div>

                <div id="toastr-demo" className="panel col">
                    <div className="panel-body row">
                        <div className="col-md-3">
                            <strong>강의 종류</strong>&emsp;&emsp;&emsp;
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
                            <strong>진행 상태</strong>&emsp;&emsp;&emsp;
                            <select className="navbar">
                                <option value="cheese">진행중인 학생</option>
                                <option value="tomatoes">수료한 학생</option>
                                <option value="mozarella">Mozzarella</option>
                                <option value="mushrooms">Mushrooms</option>
                                <option value="pepperoni">Pepperoni</option>
                                <option value="onions">Onions</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <strong>성별</strong>&emsp;&emsp;&emsp;
                            <select className="navbar">
                                <option value="cheese">Cheese</option>
                                <option value="tomatoes">Tomatoes</option>
                                <option value="mozarella">Mozzarella</option>
                                <option value="mushrooms">Mushrooms</option>
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
                    <div className="col-md-12">
                        <div className="col-lg-offset-10">
                            <button className="btn btn-primary" type="button">
                                수정
                            </button>
                            &emsp;
                            <button className="btn btn-danger" type="button">
                                삭제
                            </button>
                        </div>
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
                                        <th>Username</th>
                                        <th>Username</th>
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
                                        <td>@steve</td>
                                        <td>@steve</td>
                                        <td>@steve</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"/></td>
                                        <td>2</td>
                                        <td>Simon</td>
                                        <td>Philips</td>
                                        <td>@simon</td>
                                        <td>@steve</td>
                                        <td>@steve</td>
                                        <td>@steve</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"/></td>
                                        <td>3</td>
                                        <td>Jane</td>
                                        <td>Doe</td>
                                        <td>@jane</td>
                                        <td>@steve</td>
                                        <td>@steve</td>
                                        <td>@steve</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">학생 정보</h3>
                            </div>
                            <div className="panel-body">
                                <p>학생 번호</p>
                                <input type="text" className="form-control" placeholder="text field"/>
                                <br/>
                                <p>이름</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>이메일</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>성별</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>연락처</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>주소</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>회원가입일</p>
                                <input type="password" className="form-control" value="asecret"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">수강신청 정보</h3>
                            </div>
                            <div className="panel-body">
                                <p>수강신청 번호</p>
                                <input type="text" className="form-control" placeholder="text field"/>
                                <br/>
                                <p>신청 날짜</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>신청 마감일</p>
                                <input type="password" className="form-control" value="asecret"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CourseStudent;
