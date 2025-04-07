"use client"

import React from "react";

const CourseInfo = () => {
    return (
        <div className="main-content">
            <div className="container-fluid">
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">진행중인 강의 /</a>&ensp;<a href="/archive/myProblem">나의 게시글 /</a>&ensp;<a href="#">게시글 작성</a>
                <div className="row">
                    <button type="button" className="btn btn-primary col-lg-offset-10 margin-bottom-30">
                        <i className="fa fa-refresh fa-spin"></i> 등록하기
                    </button>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">게시판 정보</h3>
                            </div>
                            <div className="panel-body">
                                <div className="col-md-4">
                                    <p>게시판 번호</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br/>
                                </div>
                                <div className="col-md-4">
                                    <p>게시판 이름</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                </div>
                                <div className="col-md-4">
                                    <p>작성자</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                </div>

                                <p>제목</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="2" defaultValue=""></textarea>
                                <br/>
                                <p>본문 글</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="5" defaultValue=""></textarea>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">파일 첨부</h3>
                            </div>
                            <div className="panel-body">
                                첨부파일 놓는 곳
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CourseInfo;
