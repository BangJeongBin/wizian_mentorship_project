"use client"

import React from "react";
import Swal from "sweetalert2";

const Notice = () => {
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


    return (
        <div className="main-content">
            <div className="container-fluid">
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">게시판 /</a>&ensp;<a href="#">QnA</a>

                <form name="" id="" method="post" onSubmit={SearchSubmit}>
                    <div className="row">
                        <button type="submit" className="btn btn-success col-lg-offset-10 margin-bottom-30">
                            <i className="fa fa-refresh fa-spin"></i> 조회하기
                        </button>
                    </div>

                    <div id="toastr-demo" className="panel col">
                        <div className="panel-body row">
                            <div className="col-md-6 col-lg-offset-1">
                                <strong>정렬</strong>&emsp;&emsp;&emsp;
                                <select className="navbar">
                                    <option value="cheese">최신순</option>
                                    <option value="tomatoes">오래된 순</option>
                                    <option value="pepperoni">비밀글 제외</option>
                                    <option value="mozarella">조회수 순</option>
                                    <option value="mushrooms">추천 순</option>
                                    <option value="onions">Onions</option>
                                </select>
                            </div>

                            <div className="col-md-1">
                                <select className="navbar">
                                    <option value="cheese">제목</option>
                                    <option value="tomatoes">내용</option>
                                    <option value="mozarella">작성자</option>
                                    <option value="mushrooms">Mushrooms</option>
                                    <option value="pepperoni">Pepperoni</option>
                                    <option value="onions">Onions</option>
                                </select>
                            </div>

                            <div className="col-md-3">
                                <strong><i className="lnr lnr-magnifier"></i> 검색</strong>
                                <input type="text" className="form-control" placeholder="게시글 제목 입력"/>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-scrolling">
                            <div className="panel-heading">
                                <h3 className="panel-title">QnA 게시판</h3>
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
                                <h3 className="panel-title">게시판 정보</h3>
                            </div>
                            <div className="panel-body">
                                <div className="col-md-4">
                                    <p className="text-center">게시판 번호</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br/>
                                </div>
                                <div className="col-md-4">
                                    <p className="text-center">게시판 이름</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                </div>
                                <div className="col-md-4">
                                    <p className="text-center">게시글 번호</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                </div>

                                <div className="col-md-3">
                                    <p className="text-center">작성자</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                </div>
                                <div className="col-md-3">
                                    <p className="text-center">조회수</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                </div>
                                <div className="col-md-3">
                                    <p className="text-center">작성일자</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                </div>
                                <div className="col-md-3">
                                    <p className="text-center">비밀글 여부</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                </div>
                                
                                <p>제목</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>질문 글</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="5" defaultValue=""></textarea>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="panel">
                            <div className="panel-body">
                                <p>답변 글</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="5" defaultValue=""></textarea>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Notice;
