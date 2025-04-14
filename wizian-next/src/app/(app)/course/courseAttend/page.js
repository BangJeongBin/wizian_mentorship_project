"use client"

import React, {useRef, useState} from "react";
import Swal from "sweetalert2";
import {useParams} from "next/navigation";

const CourseAttend = () => {
    const [dateOptions, setDateOptions] = useState([]);
    const sortStatusRef = useRef(null);
    const sortDateRef = useRef(null);
    const findkeyRef = useRef(null);

    const [selectedCourNos, setSelectedCourNos] = useState([]); // 체크박스 상태 저장
    const [checkedData, setCheckedData] = useState([]); // 체크박스 값 저장

    const [courseData, setCourseData] = useState({});

    // 초기 값 저장
    const params = useParams();

    // 페이지네이션 사용
    const cpg = params.cpg || 1;
    const [cpgs, setCpgs] = useState(cpg);

    const sortStatus = params.sortStatus || "default";
    const sortDate = params.sortDate || "default";
    const findkey = params.findkey || "all";

    const pglink = `http://localhost:8080/api/inst/course/courseAttend/list`


    // useEffect(() => {
    const fetchData = async (sortStatus, sortDate, findkey) => {
        const fetchURL = `${pglink}/${sortStatus}/${sortDate}/${findkey}/${cpg}`;

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
        const sortStatus = sortStatusRef.current.value;
        const sortDate = sortDateRef.current.value;
        const findkey = findkeyRef.current.value || "all";
        console.log("ssssssssssssss", courseData.applyMap)

        // <select> 옵션 처음 1회 저장
        if (true) {
            const date = [...new Set(courseData.courselist.map(item => item.AttendDate))];
            setDateOptions(date);
        }

        fetchData(sortStatus, sortDate, findkey);
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
        const sortStatus = sortStatusRef.current.value;
        const sortDate = sortDateRef.current.value;
        const findkey = findkeyRef.current.value || "all";

        const fetchURL = `http://localhost:8080/api/inst/course/courseAttend/list/${sortStatus}/${sortDate}/${findkey}/${page}`;

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
    const handleCheckbox = (stdntNo) => {
        setCheckedData(stdntNo); // courNo 상태 저장
        console.log(stdntNo);
        if (selectedCourNos.includes(stdntNo)) {
            setSelectedCourNos(selectedCourNos.filter(no => no !== stdntNo));
        } else {
            setSelectedCourNos([...selectedCourNos, stdntNo]);
        }

    };

    // 헤더 체크박스 선택
    const handleAllCheckbox = (e) => {
        if (e.target.checked) {
            const allNos = courseData.applyMap.students.map(cls => cls.stdntNo);
            setSelectedCourNos(allNos);
        } else {
            setSelectedCourNos([]);
        }
    };

    const isAllChecked = courseData?.applyMap?.students?.length > 0 &&
        selectedCourNos.length === courseData.applyMap.students.length;

    // sweetAlert
    const AttendSubmit = (e) => {
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
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">진행중인 강의 /</a>&ensp;<a href="#">출결관리</a>

                <div className="row">
                    <button type="submit" className="btn btn-success col-lg-offset-10 margin-bottom-30" onClick={goListSearch}>
                        <i className="fa fa-refresh fa-spin"></i> 조회하기
                    </button>
                </div>

                <div id="toastr-demo" className="panel col">
                    <div className="panel-body row">
                        <div className="col-md-4">
                            <strong>출결현황</strong>&emsp;&emsp;&emsp;
                            <select className="navbar" name="sortStatus" id="sortStatus" ref={sortStatusRef}>
                                <option value="default">---전체---</option>
                                <option value="2">출석</option>
                                <option value="0">결석</option>
                                <option value="1">지각</option>
                            </select>
                        </div>

                        <div className="col-md-4">
                            <strong>출결일자</strong>&emsp;&emsp;&emsp;
                            <select className="navbar" name="sortDate" id="sortDate" ref={sortDateRef}>
                                <option value="default">---전체---</option>
                                {
                                    dateOptions.map(date => (
                                        <option key={date} value={date}>{date}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="col-md-2">
                            <strong><i className="lnr lnr-magnifier"></i> 검색</strong>
                            <input type="text" className="form-control" id="findkey" name="findkey" ref={findkeyRef} placeholder="학생명 입력"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        
                        <div className="col-lg-offset-10">
                            <button className="btn btn-primary" type="button">
                                출석
                            </button>
                            &emsp;
                            <button className="btn btn-warning" type="button">
                                지각
                            </button>
                            &emsp;
                            <button className="btn btn-danger" type="button">
                                결석
                            </button>
                        </div>

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
                                            <th>이메일</th>
                                            <th>연락처</th>
                                            <th>출결일(최신)</th>
                                            <th>출결상태</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        (!Array.isArray(courseData.courselist) || courseData.courselist.length === 0) ?
                                            <tr>
                                                <td colSpan={8}>데이터를 조회해 주세요.</td>
                                            </tr>
                                            :
                                            (courseData.courselist.map(classes => (
                                                <tr>
                                                    <td><input type="checkbox" checked={selectedCourNos.includes(classes.stdntNo)}
                                                               onChange={() => handleCheckbox(classes.stdntNo)}/></td>
                                                    <td>{classes.stdntNo}</td>
                                                    <td>{classes.stdntId}</td>
                                                    <td>{classes.stdntNm}</td>
                                                    <td>{classes.stdntEmail}</td>
                                                    <td>{classes.phone}</td>
                                                    <td>{classes.attendDate}</td>
                                                    <td>{classes.attendStatus}</td>
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
                                <h3 className="panel-title">학생 정보</h3>
                            </div>
                            <div className="panel-body">
                            {
                                !courseData.applyMap ?
                                    <>
                                        <input type="text" className="form-control" placeholder="데이터를 조회해 주세요." readOnly/>
                                    </>
                                    :
                                    Array.isArray(courseData?.applyMap.students) && courseData.applyMap.students.map(classes => (
                                        classes.stdntNo === checkedData ?
                                            <>
                                                <p>학생 번호</p>
                                                <input type="text" className="form-control" placeholder={classes.stdntNo}/>
                                                <br/>
                                                <p>이름</p>
                                                <input type="text" className="form-control" placeholder={classes.stdntNm}/>
                                                <br/>
                                                <p>이메일</p>
                                                <input type="text" className="form-control" placeholder={classes.stdntEmail}/>
                                                <br/>
                                                <p>성별</p>
                                                <input type="text" className="form-control" placeholder={classes.genCd}/>
                                                applyMap
                                                <p>연락처</p>
                                                <input type="text" className="form-control" placeholder={classes.phone}/>
                                                <br/>
                                                <p>주소</p>
                                                <input type="text" className="form-control" placeholder={classes.addr}/>
                                                <br/>
                                                <p>회원가입일</p>
                                                <input type="text" className="form-control" placeholder={classes.stdntRegdate}/>
                                            </>
                                            :
                                            <></>
                                    ))
                            }
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="panel panel-scrolling">
                            <div className="panel-heading">
                                <h3 className="panel-title">출결 이력</h3>
                            </div>
                            <div className="panel-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>강의명</th>
                                            <th>출결일자</th>
                                            <th>출결여부</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        !courseData.applyMap ?
                                            <tr>
                                                <td colSpan={4}>데이터를 조회해 주세요.</td>
                                            </tr>
                                            :
                                            Array.isArray(courseData?.applyMap.applys) && courseData.applyMap.applys.map(classes => (
                                                classes.studnt.stdntNo === checkedData ?
                                                    <tr>
                                                        <td>{classes.attendNo}</td>
                                                        <td>{classes.lectInfo.lectNm}</td>
                                                        <td>{classes.attendDate}</td>
                                                        <td>{classes.attendStatus}</td>
                                                    </tr>
                                                    :
                                                   <></>
                                            ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/*<form name="" id="" method="post" onSubmit={SearchSubmit}>*/}
                        {/*    <div className="panel">*/}
                        {/*        <div className="panel-heading">*/}
                        {/*            <h3 className="panel-title">출결 점수 입력</h3>*/}
                        {/*        </div>*/}
                        {/*        <div className="panel-body">*/}
                        {/*            <p>학생 번호</p>*/}
                        {/*            <input type="text" className="form-control" placeholder="text field"/>*/}
                        {/*            <br/>*/}
                        {/*            <p>학생 이름</p>*/}
                        {/*            <input type="text" className="form-control" placeholder="text field"/>*/}
                        {/*            <br/>*/}
                        {/*            <input type="text" className="form-control" placeholder="점수를 입력하세요"/>*/}
                        {/*            <br/>*/}
                        {/*            <button className="btn btn-warning form-control" type="submit">*/}
                        {/*                점수 저장*/}
                        {/*            </button>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</form>*/}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CourseAttend;
