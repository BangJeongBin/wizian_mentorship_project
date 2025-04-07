"use client"

import React from "react";
import Swal from "sweetalert2";

const AllClass = () => {
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
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">모든 강의 /</a>&ensp;<a href="#">모든 강의 정보</a>

                <form name="" id="" method="post" onSubmit={handleSubmit}>
                    <div className="row">
                        <button type="submit" className="btn btn-success col-lg-offset-10 margin-bottom-30">
                            <i className="fa fa-refresh fa-spin"></i> 조회하기
                        </button>
                    </div>

                    <div className="panel col">
                        <div className="panel-body row">
                            <div className="col-md-3">
                                <strong>캠퍼스 위치</strong>&emsp;&emsp;&emsp;
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
                                <strong>개설여부</strong>&emsp;&emsp;&emsp;
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
                                <strong>대표강사</strong>&emsp;&emsp;&emsp;
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
                                <input type="text" className="form-control" placeholder="강의명 입력"/>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="row">
                    <div className="col-md-8">
                        <div className="panel panel-scrolling">
                            <div className="panel-heading">
                                <h3 className="panel-title">강의 리스트</h3>
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
                                <h3 className="panel-title">과정정보</h3>
                            </div>
                            <div className="panel-body">
                                <p>번호</p>
                                <input type="text" className="form-control" placeholder="text field"/>
                                <br/>
                                <p>강의명</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>대표강사</p>
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
                    </div>
                </div>

                <div className="row">
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
                    </div>

                    <div className="col-md-6">
                        <div id="panel-scrolling-demo" className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">강의계획서</h3>
                            </div>
                            <div className="panel-body">
                                <p>Objectively network visionary methodologies via best-of-breed users.
                                    Phosfluorescently initiate go forward leadership skills before an expanded array of
                                    infomediaries. Monotonectally incubate web-enabled communities rather than
                                    process-centric.</p>
                                <p>Objectively network visionary methodologies via best-of-breed users.
                                    Phosfluorescently initiate go forward leadership skills before an expanded array of
                                    infomediaries. Monotonectally incubate web-enabled communities rather than
                                    process-centric.</p>
                                <p>Objectively network visionary methodologies via best-of-breed users.
                                    Phosfluorescently initiate go forward leadership skills before an expanded array of
                                    infomediaries. Monotonectally incubate web-enabled communities rather than
                                    process-centric.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllClass;
