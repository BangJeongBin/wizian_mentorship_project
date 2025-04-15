"use client"

import React from "react";
import Swal from "sweetalert2";

const MyBoard = () => {
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
    const BoardModify = (e) => {
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
    const BoardDelete = (e) => {
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
    const DownloadSubmit = (e) => {
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
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">나의 자료실 /</a>&ensp;<a href="#">나의 게시글</a>

                <div className="row">
                    <button type="submit" className="btn btn-success col-lg-offset-10 margin-bottom-30" onClick={goListSearch}>
                        <i className="fa fa-refresh fa-spin"></i> 조회하기
                    </button>
                </div>

                <div id="toastr-demo" className="panel col">
                    <div className="panel-body row">
                        <div className="col-md-4">
                            <strong>현재 강의</strong>&emsp;&emsp;&emsp;
                            <select className="navbar" name="sortLect" id="sortLect" ref={sortLectRef}>
                                <option value="default">---전체---</option>
                                {
                                    lectOptions.map(lect => (
                                        <option key={lect} value={lect}>{lect}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="col-md-4">
                            <strong>게시일자</strong>&emsp;&emsp;&emsp;
                            <select className="navbar" name="sortDate" id="sortDate" ref={sortDateRef}>
                                <option value="default">---전체---</option>
                                <option value="up">내림차순</option>
                                <option value="dowm">오름차순</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <strong><i className="lnr lnr-magnifier"></i> 검색</strong>
                            <input type="text" className="form-control"  id="findkey" name="findkey" ref={findkeyRef} placeholder="게시글 제목 입력"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="col-lg-offset-10">
                            <button className="btn btn-primary" type="button" onClick={BoardModify}>
                                수정
                            </button>
                            &emsp;
                            <button className="btn btn-danger" type="button" onClick={BoardDelete}>
                                삭제
                            </button>
                        </div>
                        <div className="panel panel-scrolling">
                            <div className="panel-heading">
                                <h3 className="panel-title">게시판 리스트</h3>
                            </div>
                            <div className="panel-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th style={{width: "20px"}}>
                                                <input type="checkbox" checked={isAllChecked}
                                                       onChange={handleAllCheckbox}/></th>
                                            <th>#</th>
                                            <th>제목</th>
                                            <th>작성자</th>
                                            <th>조회수</th>
                                            <th>작성일시</th>
                                            <th>파일유무</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        (!Array.isArray(courseData.studentList) || courseData.studentList.length === 0) ?
                                            <tr>
                                                <td colSpan={10}>데이터를 조회해 주세요.</td>
                                            </tr>
                                            :
                                            (courseData.studentList.map(classes => (
                                                <tr>
                                                    <td><input type="checkbox" checked={selectedCourNos.includes(classes.studnt.stdntNo)}
                                                               onChange={() => handleCheckbox(classes.studnt.stdntNo)}/></td>
                                                    <td>{classes.gradesNo ? (classes.gradesNo) : '미입력'}</td>
                                                    <td>{classes.studnt.stdntId ? (classes.studnt.stdntId) : '미입력'}</td>
                                                    <td>{classes.studnt.stdntNm ? (classes.studnt.stdntNm) : '미입력'}</td>
                                                    <td>{(classes.attenPoint) ? (classes.attenPoint) : '미입력'}</td>
                                                    <td>{classes.attendOnepoint ? (classes.attendOnepoint) : '미입력'}</td>
                                                    <td>{(classes.attendTwopoint) ? (classes.attendTwopoint) : '미입력'}</td>
                                                    <td>{classes.gradesPoint ? (classes.gradesPoint) : '미입력'}</td>
                                                    <td>{classes.gradesDuedate ? (classes.gradesDuedate) : '미입력'}</td>
                                                    <td>{classes.gradesOption ? (classes.gradesOption) : '미입력'}</td>
                                                </tr>
                                            )))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-10">
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
                                    <p>게시글 번호</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                </div>

                                <div className="col-md-3">
                                    <p>작성자</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                </div>
                                <div className="col-md-3">
                                    <p>조회수</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                </div>
                                <div className="col-md-3">
                                    <p>작성일자</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                </div>
                                <div className="col-md-3">
                                    <p>비밀글 여부</p>
                                    <input type="password" className="form-control" value="asecret"/>
                                    <br/>
                                </div>

                                <p>제목</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="1" defaultValue=""></textarea>
                                <br/>
                                <p>본문 글</p>
                                <textarea className="form-control" placeholder="ㅂㅂㅂ" rows="5" defaultValue=""></textarea>
                                <br/>
                            </div>
                        </div>
                    </div>

                    <form name="" id="" method="post" onSubmit={DownloadSubmit}>
                        <div className="col-md-2">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h3 className="panel-title">첨부파일</h3>
                                </div>
                                <div className="panel-body">
                                    <p>첨부파일 1</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br/>
                                    <p>첨부파일 2</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br/>
                                    <p>첨부파일 3</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br/>
                                    <button className="btn btn-success form-control" type="submit">
                                        일괄 다운로드
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default MyBoard;
