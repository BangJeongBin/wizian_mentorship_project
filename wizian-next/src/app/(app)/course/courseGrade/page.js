"use client"

import React, {useRef, useState} from "react";
import Swal from "sweetalert2";
import {useParams} from "next/navigation";

const CourseGrade = () => {
    const [proNmOptions, setProNmOptions] = useState([]);
    const sortAttendRef = useRef(null);
    const sortProNmRef = useRef(null);
    const findkeyRef = useRef(null);
    const findkeySubRef = useRef(null);

    const [selectedCourNos, setSelectedCourNos] = useState([]); // 체크박스 상태 저장
    const [checkedData, setCheckedData] = useState([]); // 체크박스 값 저장

    const [courseData, setCourseData] = useState({});
    const [studentData, setstudentData] = useState({});

    // 초기 값 저장
    const params = useParams();

    // 페이지네이션 사용
    const cpg = params.cpg || 1;
    const [cpgs, setCpgs] = useState(cpg);

    const sortAttend = params.sortAttend || "default";
    const sortProNm = params.sortProNm || "default";
    const findkey = params.findkey || "all";
    const findkeySub = params.findkeySub || "all";

    const pglink = `http://localhost:8080/api/inst/course/courseGrade/list`


    // useEffect(() => {
    const fetchData = async (sortAttend, sortProNm, findkey, findkeySub) => {
        const fetchURL = `${pglink}/${sortAttend}/${sortProNm}/${findkey}/${findkeySub}/${cpg}`;

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

    // }, []);


    // 조회하기 버튼 클릭 시 이벤트
    const goListSearch = async (e) => {
        const sortAttend = sortAttendRef.current.value;
        const sortProNm = sortProNmRef.current.value;
        const findkey = findkeyRef.current.value || "all";
        const findkeySub = findkeySubRef.current.value || "all";
        console.log("ssssssssssssss", courseData.applyMap)

        // <select> 옵션 처음 1회 저장
        if (true) {
            const date = [...new Set(courseData.courselist?.map(item => item.AttendDate))];
            setProNmOptions(date);
        }

        fetchData(sortAttend, sortProNm, findkey, findkeySub);
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
        const sortAttend = sortAttendRef.current.value;
        const sortProNm = sortProNmRef.current.value;
        const findkey = findkeyRef.current.value || "all";
        const findkeySub = findkeySubRef.current.value || "all";

        const fetchURL = `http://localhost:8080/api/inst/course/courseGrade/list/${sortAttend}/${sortProNm}/${findkey}/${findkeySub}/${page}`;

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
    const handleCheckbox = async (stdntNo) => {
        setCheckedData(stdntNo); // courNo 상태 저장
        console.log(stdntNo);
        if (selectedCourNos.includes(stdntNo)) {
            setSelectedCourNos(selectedCourNos.filter(no => no !== stdntNo));
        } else {
            setSelectedCourNos([...selectedCourNos, stdntNo]);
        }
        const studentNo = stdntNo;
        try {
            const res = await fetch(`http://localhost:8080/api/inst/course/courseGrade/stdentList/${studentNo}`, {
                headers: { 'Accept': 'application/json' }
            });
            const data = await res.json();
            setstudentData(data);
            console.log(studentData);
        } catch (err) {
            console.error('오류 발생:', err);
        }
    };

    // 헤더 체크박스 선택
    const handleAllCheckbox = (e) => {
        if (e.target.checked) {
            const allNos = courseData.studentList.map(cls => cls.stdntNo);
            setSelectedCourNos(allNos);
        } else {
            setSelectedCourNos([]);
        }
    };

    const isAllChecked = courseData?.studentList?.length > 0 &&
        selectedCourNos.length === courseData.studentList.length;


    /*// sweetAlert
    const GradeSubmit = (e) => {
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
    };*/


    return (
        <div className="main-content">
            <div className="container-fluid">

                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">진행중인 강의 /</a>&ensp;<a href="#">성적관리</a>

                <div className="row">
                    <button type="submit" className="btn btn-success col-lg-offset-10 margin-bottom-30" onClick={goListSearch}>
                        <i className="fa fa-refresh fa-spin"></i> 조회하기
                    </button>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div id="toastr-demo" className="panel col">
                            <div className="panel-body row">
                                <div className="col-md-6 col-md-offset-1">
                                    <strong>출결현황</strong>&ensp;&ensp;&ensp;&ensp;
                                    <select className="navbar" name="sortAttend" id="sortAttend" ref={sortAttendRef}>
                                        <option value="default">---전체---</option>
                                        <option value="2">출석</option>
                                        <option value="0">결석</option>
                                        <option value="1">지각</option>
                                    </select>
                                </div>

                                <div className="col-md-3">
                                    <strong><i className="lnr lnr-magnifier"></i> 검색</strong>
                                    <input type="text" className="form-control" id="findkey" name="findkey" ref={findkeyRef} placeholder="학생명 입력"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div id="toastr-demo" className="panel col">
                            <div className="panel-body row">
                                <div className="col-md-6 col-md-offset-1">
                                    <strong>과제명</strong>&ensp;&ensp;&ensp;&ensp;
                                    <select className="navbar" name="sortProNm" id="sortProNm" ref={sortProNmRef}>
                                        <option value="default">---전체---</option>
                                        {
                                            proNmOptions.map(proNm => (
                                                <option key={proNm} value={proNm}>{proNm}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="col-md-3">
                                    <strong><i className="lnr lnr-magnifier"></i> 검색</strong>
                                    <input type="text" className="form-control" id="findkeySub" name="findkeySub" ref={findkeySubRef} placeholder="과제명 입력"/>
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
                                            <th style={{width: "20px"}}>
                                                <input type="checkbox" checked={isAllChecked}
                                                       onChange={handleAllCheckbox}/></th>
                                            <th>#</th>
                                            <th>아이디</th>
                                            <th>이름</th>
                                            <th>출석점수</th>
                                            <th>상반기과제점수</th>
                                            <th>하반기과제점수</th>
                                            <th>마감점수</th>
                                            <th>성적산정일자</th>
                                            <th>졸업가능여부</th>
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
                                                    <td>{classes.gradesNo}</td>
                                                    <td>{classes.studnt.stdntId}</td>
                                                    <td>{classes.studnt.stdntNm}</td>
                                                    <td>{(classes.attenPoint) ? (classes.attenPoint) : '미입력'}</td>
                                                    <td>{classes.attendOnepoint}</td>
                                                    <td>{(classes.attendTwopoint) ? (classes.attendTwopoint) : '미입력'}</td>
                                                    <td>{classes.gradesPoint}</td>
                                                    <td>{classes.gradesDuedate}</td>
                                                    <td>{classes.gradesOption}</td>
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

                    <div className="col-md-6">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">출석 정보</h3>
                            </div>
                            <div className="panel-body">
                                {
                                    !studentData ?
                                        <input type="text" className="form-control" placeholder="학생을 선택해 주세요." readOnly/>
                                        :
                                        studentData && studentData.stdntNo === checkedData && (
                                            <>
                                                <p>학생 번호</p>
                                                <input type="text" className="form-control" placeholder={studentData.stdntNo} readOnly/>
                                                <br/>
                                                <p>학생 이름</p>
                                                <input type="text" className="form-control" placeholder={studentData.stdntNm} readOnly/>
                                                <br/>
                                                <p>총 수업일수</p>
                                                <input type="text" className="form-control" placeholder={studentData.fullTime} readOnly/>
                                                <br/>
                                                <p>출석한 수업일수</p>
                                                <input type="text" className="form-control" placeholder={studentData.attendTime} readOnly/>
                                                <br/>
                                                <p>지각한 수업일수</p>
                                                <input type="text" className="form-control" placeholder={studentData.lateTime} readOnly/>
                                                <br/>
                                                <p>결석한 수업일수</p>
                                                <input type="text" className="form-control" placeholder={studentData.absTime} readOnly/>
                                            </>
                                        )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">과제 정보</h3>
                            </div>
                            <div className="panel-body">
                                {
                                    !courseData.gradeList ?
                                        <>
                                            <input type="text" className="form-control" placeholder="데이터를 조회해 주세요." readOnly/>
                                        </>
                                        :
                                        Array.isArray(courseData?.gradeList) && courseData.gradeList.map(classes => (
                                            classes.stdntNo === checkedData ?
                                                <>
                                                    <p>학생 번호</p>
                                                    <input type="text" className="form-control" placeholder={classes.stdntNo} readOnly/>
                                                    <br/>
                                                    <p>학생 이름</p>
                                                    <input type="text" className="form-control" placeholder={classes.stdntNm} readOnly/>
                                                    <br/>
                                                    <p>과제점수</p>
                                                    <input type="text" className="form-control" placeholder={classes.assignPoint} readOnly/>
                                                    <br/>
                                                    {/*<p>하반기 과제점수</p>*/}
                                                    {/*<input type="text" className="form-control" placeholder={classes.absTime} readOnly/>*/}
                                                    {/*<br/>*/}
                                                    <p>과제 제출일자</p>
                                                    <input type="text" className="form-control" placeholder={classes.assignDuedate} readOnly/>
                                                </>
                                                :
                                                <></>
                                        ))
                                }
                            </div>
                        </div>


                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">

                        {/*<form name="" id="" method="post" onSubmit={GradeSubmit}>*/}
                        {/*    <div className="panel">*/}
                        {/*        <div className="panel-heading">*/}
                        {/*            <h3 className="panel-title">최종점수 입력</h3>*/}
                        {/*        </div>*/}

                        {/*        <div className="panel-body">*/}
                        {/*            <div className="col-md-4">*/}
                        {/*                <p className="text-center">출석점수</p>*/}
                        {/*                <input type="text" className="form-control" placeholder="text field"/>*/}
                        {/*            </div>*/}

                        {/*            <div className="col-md-4">*/}
                        {/*                <p className="text-center">상반기 과제점수</p>*/}
                        {/*                <input type="text" className="form-control" placeholder="text field"/>*/}
                        {/*            </div>*/}

                        {/*            <div className="col-md-4">*/}
                        {/*                <p className="text-center">하반기 과제점수</p>*/}
                        {/*                <input type="text" className="form-control" placeholder="text field"/>*/}
                        {/*            </div>*/}


                        {/*            <div className="col-md-6 col-md-offset-3">*/}
                        {/*                <br/>*/}
                        {/*                <p className="text-center">마감점수 입력</p>*/}
                        {/*                <input type="text" className="form-control" placeholder="점수를 입력하세요"/>*/}
                        {/*                <br/>*/}
                        {/*            </div>*/}

                        {/*            <div className="col-md-6 col-md-offset-3">*/}
                        {/*                <button className="btn btn-success form-control" type="submit">*/}
                        {/*                    마감 점수 저장*/}
                        {/*                </button>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</form>*/}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CourseGrade;
