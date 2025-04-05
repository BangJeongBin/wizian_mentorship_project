"use client"

import React from "react";

const CourseGrade = () => {
    return (
        <div className="main-content">
            <div className="container-fluid">

                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">진행중인 강의 /</a>&ensp;<a href="#">성적관리</a>
                <div className="row">
                    <button type="button" className="btn btn-success col-lg-offset-10 margin-bottom-30">
                        <i className="fa fa-refresh fa-spin"></i> 조회하기
                    </button>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div id="toastr-demo" className="panel col">
                            <div className="panel-body row">
                                <div className="col-md-6 col-md-offset-1">
                                    <strong>출결현황</strong>&ensp;&ensp;&ensp;&ensp;
                                    <select className="navbar">
                                        <option value="cheese">출석</option>
                                        <option value="tomatoes">결석</option>
                                        <option value="mozarella">지각</option>
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
                    </div>

                    <div className="col-md-6">
                        <div id="toastr-demo" className="panel col">
                            <div className="panel-body row">
                                <div className="col-md-6 col-md-offset-1">
                                    <strong>과제명</strong>&ensp;&ensp;&ensp;&ensp;
                                    <select className="navbar">
                                        <option value="cheese">출석</option>
                                        <option value="tomatoes">결석</option>
                                        <option value="mozarella">지각</option>
                                        <option value="mushrooms">Mushrooms</option>
                                        <option value="pepperoni">Pepperoni</option>
                                        <option value="onions">Onions</option>
                                    </select>
                                </div>

                                <div className="col-md-3">
                                    <strong><i className="lnr lnr-magnifier"></i> 검색</strong>
                                    <input type="text" className="form-control" placeholder="과제명 입력"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12">

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
                                        <td>
                                            <span className="label label-info">출석</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"/></td>
                                        <td>2</td>
                                        <td>Simon</td>
                                        <td>Philips</td>
                                        <td>@simon</td>
                                        <td>@steve</td>
                                        <td>@steve</td>
                                        <td>
                                            <span className="label label-warning">지각</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"/></td>
                                        <td>3</td>
                                        <td>Jane</td>
                                        <td>Doe</td>
                                        <td>@jane</td>
                                        <td>@steve</td>
                                        <td>@steve</td>
                                        <td>
                                            <span className="label label-danger">결석</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><input type="checkbox"/></td>
                                        <td>3</td>
                                        <td>Jane</td>
                                        <td>Doe</td>
                                        <td>@jane</td>
                                        <td>@steve</td>
                                        <td>@steve</td>
                                        <td>
                                            <span className="label label-success">출결 전</span>
                                        </td>
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
                                <h3 className="panel-title">출석 정보</h3>
                            </div>
                            <div className="panel-body">
                                <p>학생 번호</p>
                                <input type="text" className="form-control" placeholder="text field"/>
                                <br/>
                                <p>학생 이름</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>3. 과제 정답</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>4. 과제 정답</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>5. 과제 정답</p>
                                <input type="password" className="form-control" value="asecret"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">출석 정보</h3>
                            </div>
                            <div className="panel-body">
                                <p>학생 번호</p>
                                <input type="text" className="form-control" placeholder="text field"/>
                                <br/>
                                <p>학생 이름</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>3. 과제 정답</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>4. 과제 정답</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>5. 과제 정답</p>
                                <input type="password" className="form-control" value="asecret"/>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">최종점수 입력</h3>
                            </div>

                            <div className="panel-body">
                                <div className="col-md-4">
                                    <p>출석점수</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                </div>

                                <div className="col-md-4">
                                    <p>상반기 과제점수</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                </div>

                                <div className="col-md-4">
                                    <p>하반기 과제점수</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                </div>


                                <div className="col-md-6 col-md-offset-3">
                                    <br/>
                                    <p>마감점수 입력</p>
                                    <input type="text" className="form-control" placeholder="점수를 입력하세요"/>
                                    <br/>
                                </div>

                                <div className="col-md-6 col-md-offset-3">
                                    <button className="btn btn-success form-control" type="button">
                                        마감 점수 저장
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

export default CourseGrade;
