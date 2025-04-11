"use client"

import React, {useRef, useState} from "react";
import Swal from "sweetalert2";
import {useParams} from "next/navigation";

const CourseInfo = () => {
    const [selectedCourNos, setSelectedCourNos] = useState([]); // 체크박스 상태 저장
    const [checkedData, setCheckedData] = useState([]); // 체크박스 값 저장

    const [courseData, setCourseData] = useState({});

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
                setCourseData(data);

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
                setCourseData(data);

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
            setCourseData(data);
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
            const allNos = courseData.courselist.map(cls => cls.stdntNo);
            setSelectedCourNos(allNos);
        } else {
            setSelectedCourNos([]);
        }
    };

    const isAllChecked = courseData.courselist && courseData.courselist.length > 0 &&
        selectedCourNos.length === courseData.courselist.length;


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
                                {
                                    !courseData.courseOne ?
                                        <>
                                            <input type="text" className="form-control" placeholder="데이터를 조회해 주세요." readOnly/>
                                        </>
                                    :
                                        <>
                                        <p>번호</p>
                                        <input type="text" className="form-control" placeholder={courseData.courseOne.lectNo} />
                                        <br/>
                                        <p>강의명</p>
                                        <input type="text" className="form-control" placeholder={courseData.courseOne.lectNm} />
                                        <br/>
                                        <p>대표강사</p>
                                        <input type="text" className="form-control" placeholder={courseData.courseOne.instNm} />
                                        <br/>
                                        <p>강의금액</p>
                                        <input type="text" className="form-control" placeholder={courseData.courseOne.lectPrice} />
                                        <br/>
                                        <p>개강일</p>
                                        <input type="text" className="form-control" placeholder={courseData.courseOne.lectStart} />
                                        <br/>
                                        <p>수료일</p>
                                        <input type="text" className="form-control" placeholder={courseData.courseOne.lectSubmit} />
                                        <br/>
                                        <p>수강인원</p>
                                        <input type="text" className="form-control" placeholder={courseData.courseOne.lectPers} />
                                        <br/>
                                        <p>강의실 위치</p>
                                        <input type="text" className="form-control" placeholder={courseData.courseOne.lectLoc} />
                                        <br/>
                                        <p>개설여부</p>
                                        <input type="text" className="form-control" placeholder={courseData.courseOne.lectStatus} />
                                        </>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="panel panel-scrolling">
                            <div className="panel-heading">
                                <h3 className="panel-title">수강학생</h3>
                            </div>
                            <div className="panel-body no-padding">
                                <table className="table table-striped">
                                    <thead>
                                    <tr>
                                        <th style={{width: "20px"}}>
                                            <input type="checkbox" checked={isAllChecked}
                                                   onChange={handleAllCheckbox}/></th>
                                        <th>#</th>
                                        <th>학생이름</th>
                                        <th>ID</th>
                                        <th>이메일</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        (!Array.isArray(courseData.courselist) || courseData.courselist.length === 0) ?
                                            <tr>
                                                <td colSpan={4}>해당하는 데이터가 없습니다.</td>
                                            </tr>
                                            :
                                            (courseData.courselist.map(classes => (
                                                <tr>
                                                    <td><input type="checkbox" checked={selectedCourNos.includes(classes.stdntNo)}
                                                               onChange={() => handleCheckbox(classes.stdntNo)}/></td>
                                                    <td>{classes.stdntNo}</td>
                                                    <td>{classes.stdntNm}</td>
                                                    <td>{classes.stdntId}</td>
                                                    <td>{classes.stdntEmail}</td>
                                                </tr>
                                            )))
                                    }
                                    </tbody>
                                </table>
                                {/* PAGINATION */}
                                <div className="col-md-offset-5">
                                    <ul className="pagination">
                                        {(courseData.cpg > 1) &&
                                            (<li className="page-item">
                                                <a onClick={preListPage} className="page-link">이전</a></li>)
                                        }

                                        {(courseData.cpg < courseData.cntpg) &&
                                            (<li className="page-item">
                                                <a onClick={nextListPage} className="page-link">다음</a></li>)
                                        }
                                    </ul>
                                </div>
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

                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">강의 시간표</h3>
                            </div>
                            <div className="panel-body">
                                <table className="table table-bordered">
                                    <thead>
                                    <tr>
                                        <th style={{width: "20px"}}>#</th>
                                        <th>시간표</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        !courseData.courseOne ?
                                            <tr>
                                                <td colSpan="2">데이터를 조회해 주세요.</td>
                                            </tr>
                                            :
                                            <tr>
                                                <td>{courseData.courseOne.lectNo}</td>
                                                <td>{courseData.courseOne.lectSchd}</td>
                                            </tr>
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div id="panel-scrolling-demo" className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">강의계획서</h3>
                            </div>
                            <div className="panel-body">
                                {
                                    !courseData.courseOne ?
                                        <>
                                            <textarea className="form-control" placeholder="데이터를 조회해 주세요." rows="10" readOnly></textarea>
                                        </>
                                        :
                                        <>
                                            <textarea className="form-control" placeholder={courseData.courseOne.lectDesc}
                                                      rows="10"></textarea>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CourseInfo;
