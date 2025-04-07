"use client"

import React from "react";
import Swal from "sweetalert2";

const CourseInfo = () => {
    // sweetAlert
    const ProblemSubmit = (e) => {
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
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">진행중인 강의 /</a>&ensp;<a href="/archive/myProblem">나의 과제 /</a>&ensp;<a href="#">과제 작성</a>
                <div className="row">
                    <br />
                </div>

                <form name="" id="" method="post" onSubmit={ProblemSubmit}>
                    <div id="toastr-demo" className="panel col">
                        <div className="panel-body row">
                            <div className="col-md-4">
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
                            <div className="col-md-4">
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
                            <div className="col-md-4">
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
                                <strong>과제 부여 일자</strong>&emsp;&emsp;&emsp;
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
                                <strong>과제 마감 일자</strong>&emsp;&emsp;&emsp;
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
                                <strong>과제 정보 분류</strong>&emsp;&emsp;&emsp;
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
                                <strong>담당강사명</strong>
                                <input type="text" className="form-control" placeholder="text field"/>
                                <br />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-10">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h3 className="panel-title">과제 질문지 작성</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="col-md-1">
                                        <p>문항 번호</p>
                                        <input type="text" className="form-control" placeholder="text field"/>
                                        <br/>
                                    </div>
                                    <div className="col-md-6 col-md-offset-1">
                                        <p>과제 질문</p>
                                        <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="2" defaultValue=""></textarea>
                                        <br/>
                                    </div>

                                    <div className="col-md-12">
                                        <p>과제 정답</p>
                                        <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="2" defaultValue=""></textarea>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h3 className="panel-title">과제 마감</h3>
                                </div>
                                <div className="panel-body">
                                    <p>과제 수</p>
                                    <input type="text" className="form-control" placeholder="5"/>
                                    <br/>
                                    <button className="btn btn-success form-control" type="submit">
                                        과제 저장
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-10">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h3 className="panel-title">과제 질문지 작성</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="col-md-1">
                                        <p>문항 번호</p>
                                        <input type="text" className="form-control" placeholder="text field"/>
                                        <br/>
                                    </div>
                                    <div className="col-md-6 col-md-offset-1">
                                        <p>과제 질문</p>
                                        <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="2" defaultValue=""></textarea>
                                        <br/>
                                    </div>

                                    <div className="col-md-12">
                                        <p>과제 정답</p>
                                        <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="2" defaultValue=""></textarea>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-10">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h3 className="panel-title">과제 질문지 작성</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="col-md-1">
                                        <p>문항 번호</p>
                                        <input type="text" className="form-control" placeholder="text field"/>
                                        <br/>
                                    </div>
                                    <div className="col-md-6 col-md-offset-1">
                                        <p>과제 질문</p>
                                        <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="2" defaultValue=""></textarea>
                                        <br/>
                                    </div>

                                    <div className="col-md-12">
                                        <p>과제 정답</p>
                                        <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="2" defaultValue=""></textarea>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-10">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h3 className="panel-title">과제 질문지 작성</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="col-md-1">
                                        <p>문항 번호</p>
                                        <input type="text" className="form-control" placeholder="text field"/>
                                        <br/>
                                    </div>
                                    <div className="col-md-6 col-md-offset-1">
                                        <p>과제 질문</p>
                                        <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="2" defaultValue=""></textarea>
                                        <br/>
                                    </div>

                                    <div className="col-md-12">
                                        <p>과제 정답</p>
                                        <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="2" defaultValue=""></textarea>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-10">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h3 className="panel-title">과제 질문지 작성</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="col-md-1">
                                        <p>문항 번호</p>
                                        <input type="text" className="form-control" placeholder="text field"/>
                                        <br/>
                                    </div>
                                    <div className="col-md-6 col-md-offset-1">
                                        <p>과제 질문</p>
                                        <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="2" defaultValue=""></textarea>
                                        <br/>
                                    </div>

                                    <div className="col-md-12">
                                        <p>과제 정답</p>
                                        <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="2" defaultValue=""></textarea>
                                        <br/>
                                    </div>
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
