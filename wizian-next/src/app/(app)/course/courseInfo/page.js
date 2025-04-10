"use client"

import React, {useRef, useState} from "react";
import Swal from "sweetalert2";
import {useParams} from "next/navigation";

const CourseInfo = () => {
    const [selectedCourNos, setSelectedCourNos] = useState([]); // 체크박스 상태 저장
    const [checkedData, setCheckedData] = useState([]); // 체크박스 값 저장

    const [classData, setClassData] = useState({});

    // 초기 값 저장
    const params = useParams();

    // 페이지네이션 사용
    const cpg = params.cpg || 1;
    const [cpgs, setCpgs] = useState(cpg);

    const pglink = `http://localhost:8080/api/inst/course/courseInfo/list`;


    // useEffect(() => {
    const fetchData = async () => {
        const fetchURL = `${pglink}/${cpg}`;

        const result = await Swal.fire({
            title: '모든 과정 정보를 조회하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '예',
            cancelButtonText: '아니오',
            reverseButtons: true,
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(fetchURL, {
                    headers: { 'Accept': 'application/json' }
                });
                if (!response.ok) {
                    throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);
                setClassData(data);

                await Swal.fire({
                    title: '조회가 완료되었습니다!',
                    icon: 'success',
                    confirmButtonText: '확인'
                });
            } catch (err) {
                console.error('오류발생!', err);
                Swal.fire({
                    title: '데이터 조회 중 오류가 발생했습니다!',
                    icon: 'error',
                    confirmButtonText: '확인'
                });
            }
        }
    };


    const fetchModifyData = async () => {
        const fetchURL = `${pglink}/${cpg}`;

        const result = await Swal.fire({
            title: '모든 과정 정보를 수정하시겠습니까?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '예',
            cancelButtonText: '아니오',
            reverseButtons: true,
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(fetchURL, {
                    headers: { 'Accept': 'application/json' }
                });
                if (!response.ok) {
                    throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);
                setClassData(data);

                await Swal.fire({
                    title: '조회가 완료되었습니다!',
                    icon: 'success',
                    confirmButtonText: '확인'
                });
            } catch (err) {
                console.error('오류발생!', err);
                Swal.fire({
                    title: '데이터 조회 중 오류가 발생했습니다!',
                    icon: 'error',
                    confirmButtonText: '확인'
                });
            }
        }
    };


    // 조회하기 버튼 클릭 시 이벤트
    const goListSearch = async (e) => {
        fetchData();
    };

    // 수정하기 버튼 클릭 시 이벤트
    const goListModify = async (e) => {
        fetchModifyData();
    };

    // 페이지네이션 다음 버튼
    const nextListPage = async () => {
        const nextPage = cpgs + 1;
        setCpgs(nextPage);
        await fetchDataPage(nextPage);
    };

    // 페이지네이션 이전 버튼
    const preListPage = async () => {
        const nextPage = cpgs - 1;
        setCpgs(nextPage);
        await fetchDataPage(nextPage);
    };

    // 페이지네이션 함수
    const fetchDataPage = async (page) => {
        const fetchURL = `http://localhost:8080/api/inst/course/courseInfo/list/${page}`;

        try {
            const res = await fetch(fetchURL, {
                headers: { 'Accept': 'application/json' }
            });
            const data = await res.json();
            setClassData(data);
        } catch (err) {
            console.error('오류 발생:', err);
        }
    };

    // 개별 체크박스 선택
    const handleCheckbox = (lectNo) => {
        setCheckedData(lectNo); // courNo 상태 저장
        console.log(lectNo);
        if (selectedCourNos.includes(lectNo)) {
            setSelectedCourNos(selectedCourNos.filter(no => no !== lectNo));
        } else {
            setSelectedCourNos([...selectedCourNos, lectNo]);
        }

    };

    // 헤더 체크박스 선택
    const handleAllCheckbox = (e) => {
        if (e.target.checked) {
            const allNos = classData.classlist.map(cls => cls.lectNo);
            setSelectedCourNos(allNos);
        } else {
            setSelectedCourNos([]);
        }
    };

    const isAllChecked = classData.classlist && classData.classlist.length > 0 &&
        selectedCourNos.length === classData.classlist.length;


    return (
        <div className="main-content">
            <div className="container-fluid">
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">진행중인 강의 /</a>&ensp;<a href="#">강의 정보</a>

                <div className="row">
                    <div className="col-lg-offset-9 margin-bottom-30">
                        <button type="submit" className="btn btn-success" onClick={goListSearch}>
                            <i className="fa fa-refresh fa-spin"></i> 조회하기
                        </button>
                        &emsp;&emsp;&emsp;
                        <button type="submit" className="btn btn-primary" onClick={goListModify}>
                            <i className="fa fa-refresh fa-spin"></i> 수정하기
                        </button>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">내 강의 정보</h3>
                            </div>
                            <div className="panel-body">
                                <p>번호</p>
                                <input type="text" className="form-control" placeholder="text field"/>
                                <br/>
                                <p>강의명</p>
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

                        <div className="panel panel-scrolling">
                            <div className="panel-heading">
                                <h3 className="panel-title">수강학생</h3>
                            </div>
                            <div className="panel-body no-padding">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th><input type="checkbox"/></th>
                                        <th>Order No.</th>
                                        <th>Name</th>
                                        <th>Amount</th>
                                        <th>Date &amp; Time</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><input type="checkbox"/></td>
                                        <td><a href="#">763648</a></td>
                                        <td>Steve</td>
                                        <td>$122</td>
                                        <td>Oct 21, 2016</td>
                                        <td><span className="label label-success">COMPLETED</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"/></td>
                                        <td><a href="#">763649</a></td>
                                        <td>Amber</td>
                                        <td>$62</td>
                                        <td>Oct 21, 2016</td>
                                        <td><span className="label label-warning">PENDING</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"/></td>
                                        <td><a href="#">763650</a></td>
                                        <td>Michael</td>
                                        <td>$34</td>
                                        <td>Oct 18, 2016</td>
                                        <td><span className="label label-danger">FAILED</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"/></td>
                                        <td><a href="#">763651</a></td>
                                        <td>Roger</td>
                                        <td>$186</td>
                                        <td>Oct 17, 2016</td>
                                        <td><span className="label label-success">SUCCESS</span></td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"/></td>
                                        <td><a href="#">763652</a></td>
                                        <td>Smith</td>
                                        <td>$362</td>
                                        <td>Oct 16, 2016</td>
                                        <td><span className="label label-success">SUCCESS</span></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="panel-footer">
                                <div className="row">
                                    <div className="col-md-6"><span className="panel-note"><i
                                        className="fa fa-clock-o"></i> Last 24 hours</span></div>
                                    <div className="col-md-6 text-right"><a href="#" className="btn btn-primary">View
                                        All Purchases</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

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

                        <div id="panel-scrolling-demo" className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">강의계획서</h3>
                            </div>
                            <div className="panel-body">
                                <textarea className="form-control"
                                          placeholder="Objectively network visionary methodologies via best-of-breed users.
                                                            Phosfluorescently initiate go forward leadership skills before an expanded array of
                                                            infomediaries. Monotonectally incubate web-enabled communities rather than
                                                            process-centric.
                                                        Objectively network visionary methodologies via best-of-breed users.
                                                            Phosfluorescently initiate go forward leadership skills before an expanded array of
                                                            infomediaries. Monotonectally incubate web-enabled communities rather than
                                                            process-centric.
                                                        Objectively network visionary methodologies via best-of-breed users.
                                                            Phosfluorescently initiate go forward leadership skills before an expanded array of
                                                            infomediaries. Monotonectally incubate web-enabled communities rather than
                                                            process-centric."
                                          rows="20" defaultValue="">

                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CourseInfo;
