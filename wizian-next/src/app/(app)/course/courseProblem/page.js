"use client"

import React from "react";
import Swal from "sweetalert2";

const CourseProblem = () => {
    // sweetAlert
    const SearchSubmit = (e) => {
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

    // sweetAlert
    const ProblemRefrech = (e) => {
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

    // sweetAlert
    const Problemsubmit = (e) => {
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
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">진행중인 강의 /</a>&ensp;<a href="#">과제관리</a>

                <form name="" id="" method="post" onSubmit={SearchSubmit}>
                    <div className="row">
                        <button type="submit" className="btn btn-success col-lg-offset-10 margin-bottom-30">
                            <i className="fa fa-refresh fa-spin"></i> 조회하기
                        </button>
                    </div>

                    <div id="toastr-demo" className="panel col">
                        <div className="panel-body row">
                            <div className="col-md-4">
                                <strong>제출수업</strong>&emsp;&emsp;&emsp;
                                <select className="navbar">
                                    <option value="cheese">출석</option>
                                    <option value="tomatoes">결석</option>
                                    <option value="mozarella">지각</option>
                                    <option value="mushrooms">Mushrooms</option>
                                    <option value="pepperoni">Pepperoni</option>
                                    <option value="onions">Onions</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <strong>제출년도</strong>&emsp;&emsp;&emsp;
                                <select className="navbar">
                                    <option value="cheese">Cheese</option>
                                    <option value="tomatoes">Tomatoes</option>
                                    <option value="mozarella">Mozzarella</option>
                                    <option value="mushrooms">Mushrooms</option>
                                    <option value="pepperoni">Pepperoni</option>
                                    <option value="onions">Onions</option>
                                </select>
                            </div>

                            <div className="col-md-2">
                                <strong><i className="lnr lnr-magnifier"></i> 검색</strong>
                                <input type="text" className="form-control" placeholder="수업명 입력"/>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="row">
                    <div className="col-md-6">

                        <div className="col-lg-offset-9">
                            <button className="btn btn-primary" type="button">
                                배부
                            </button>
                            &emsp;
                            <button className="btn btn-danger" type="button">
                                마감
                            </button>
                        </div>

                        <div className="panel panel-scrolling">
                            <div className="panel-heading">
                                <h3 className="panel-title">과제 정보</h3>
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

                    <div className="col-md-6">

                        <form name="" id="" method="post" onSubmit={ProblemRefrech}>
                            <div className="col-lg-offset-10">
                                <button className="btn btn-success" type="submit">
                                    <i className="fa fa-spinner fa-spin"></i>
                                    새로고침
                                </button>
                            </div>

                            <div className="panel panel-scrolling">
                                <div className="panel-heading">
                                    <h3 className="panel-title">제출 과제 리스트</h3>
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
                                            <th>성적처리여부</th>
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
                                                <span className="label label-info">채점완료</span>
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
                                                <span className="label label-warning">미채점</span>
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
                        </form>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-9">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">제출 과제 정보</h3>
                            </div>
                            <div className="panel-body">
                                <p>학생 번호</p>
                                <input type="text" className="form-control" placeholder="text field"/>
                                <br/>
                                <p>1. 과제 질문</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>1. 과제 답변</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>2. 과제 질문</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>2. 과제 답변</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>3. 과제 질문</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>3. 과제 답변</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>4. 과제 질문</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>4. 과제 답변</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>5. 과제 질문</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>5. 과제 답변</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">과제 답지</h3>
                            </div>
                            <div className="panel-body">
                                <p>1. 과제 정답</p>
                                <input type="text" className="form-control" placeholder="text field"/>
                                <br/>
                                <p>2. 과제 정답</p>
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

                        <div className="panel">
                            <form name="" id="" method="post" onSubmit={Problemsubmit}>
                                <div className="panel-heading">
                                    <h3 className="panel-title">점수 채점</h3>
                                </div>
                                <div className="panel-body">
                                    <p>학생 번호</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br/>
                                    <input type="text" className="form-control" placeholder="점수를 입력하세요"/>
                                    <br/>
                                    <button className="btn btn-warning form-control" type="submit">
                                        점수 저장
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CourseProblem;
