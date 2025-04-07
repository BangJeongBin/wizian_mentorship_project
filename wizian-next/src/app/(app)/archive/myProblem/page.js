"use client"

import React from "react";

const MyProblem = () => {
    return (
        <div className="main-content">
            <div className="container-fluid">
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">나의 자료실 /</a>&ensp;<a href="#">나의 과제</a>
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
                            <strong>과제 년도</strong>&emsp;&emsp;&emsp;
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
                            <strong>과제 상하반기 분류</strong>&emsp;&emsp;&emsp;
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
                            <input type="text" className="form-control" placeholder="과제명 입력"/>
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
                                <h3 className="panel-title">과제 리스트</h3>
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
                    <div className="col-md-12">

                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">과제 정보</h3>
                            </div>
                            <div className="panel-body">
                                <div className="col-md-4">
                                    <p>과제 정보 번호</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br />
                                </div>

                                <div className="col-md-4">
                                    <p>강의 번호</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br />
                                </div>

                                <div className="col-md-4">
                                    <p>과제 정보 분류</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br />
                                </div>

                                <div className="col-md-4">
                                    <p>과제 상하반기 분류</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br />
                                </div>

                                <div className="col-md-4">
                                    <p>담당 강사명</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br />
                                </div>

                                <div className="col-md-6">
                                    <p>과제 부여 일자</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br />
                                </div>

                                <div className="col-md-6">
                                    <p>과제 마감 일자</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-9">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">과제 질문지</h3>
                            </div>
                            <div className="panel-body">
                                <p>(문항번호). 과제 질문</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>(문항번호). 과제 정답</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>(문항번호). 과제 질문</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>(문항번호). 과제 정답</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/><p>(문항번호). 과제 질문</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>(문항번호). 과제 정답</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/><p>(문항번호). 과제 질문</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>(문항번호). 과제 정답</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/><p>(문항번호). 과제 질문</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>(문항번호). 과제 정답</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">과제 마감</h3>
                            </div>
                            <div className="panel-body">
                                <p>제출된 과제 수</p>
                                <input type="text" className="form-control" placeholder="text field"/>
                                <br/>
                                <p>현재 시간</p>
                                <input type="text" className="form-control" placeholder="2000.00.00 00/00/00"/>
                                <br/>
                                <button className="btn btn-success form-control" type="button">
                                    과제 마감
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyProblem;
