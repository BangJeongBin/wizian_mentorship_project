"use client"

import React, {useEffect, useState, useRef} from "react";
import Swal from "sweetalert2";
import {Link, useParams} from "next/navigation";
import {router} from "next/client";

// AllCourse 함수 컴포넌트 정의
const AllCourse = () => {
    // const [yearOptions, setYearOptions] = useState([]);
    // const [weekOptions, setWeekOptions] = useState([]);
    const sortYearRef = useRef(null);
    const sortWeekRef = useRef(null);
    const findkeyRef = useRef(null);

    const [selectedCourNos, setSelectedCourNos] = useState([]); // 체크박스 상태 저장
    const [checkedData, setCheckedData] = useState([]); // 체크박스 값 저장

    const [classData, setClassData] = useState({});

    // 초기 값 저장
    const params = useParams();
    
    // 페이지네이션 사용
    const cpg = params.cpg || 1;
    const [cpgs, setCpgs] = useState(cpg);
    
    const sortYear = params.sortYear || "default";
    const sortWeek = params.sortWeek || "default";
    const findkey = params.findkey || "all";

    const pglink = `http://localhost:8080/api/inst/class/allCourse/list`


    // useEffect(() => {
        const fetchData = async (sortYear, sortWeek, findkey) => {
            const fetchURL = `${pglink}/${sortYear}/${sortWeek}/${findkey}/${cpg}`;

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

    // }, []);

    // useEffect(() => {
    //     // <select> 옵션 처음 1회 저장
    //     if (yearOptions.length === 0 && weekOptions.length === 0 && Array.isArray(data.classlist)) {
    //         const years = [...new Set(data.classlist.map(item => item.courYear))];
    //         const weeks = [...new Set(data.classlist.map(item => item.courWeek))];
    //         setYearOptions(years);
    //         setWeekOptions(weeks);
    //     }
    // }, []);


    // 조회하기 버튼 클릭 시 이벤트
    const goListSearch = async (e) => {
        const sortYear = sortYearRef.current.value;
        const sortWeek = sortWeekRef.current.value;
        const findkey = findkeyRef.current.value || "all";

        fetchData(sortYear, sortWeek, findkey);
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
        const sortYear = sortYearRef.current.value;
        const sortWeek = sortWeekRef.current.value;
        const findkey = findkeyRef.current.value || "all";

        const fetchURL = `http://localhost:8080/api/inst/class/allCourse/list/${sortYear}/${sortWeek}/${findkey}/${page}`;

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
    const handleCheckbox = (courNo) => {
        setCheckedData(courNo); // courNo 상태 저장
        console.log(courNo);
        if (selectedCourNos.includes(courNo)) {
            setSelectedCourNos(selectedCourNos.filter(no => no !== courNo));
        } else {
            setSelectedCourNos([...selectedCourNos, courNo]);
        }

    };

    // 헤더 체크박스 선택
    const handleAllCheckbox = (e) => {
        if (e.target.checked) {
            const allNos = classData.classlist.map(cls => cls.courNo);
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
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">모든 강의 /</a>&ensp;<a href="#">모든 과정 정보</a>

                <div className="row">
                    <button className="btn btn-success col-lg-offset-10 margin-bottom-30" onClick={goListSearch}>
                        <i className="fa fa-refresh fa-spin"></i> 조회하기
                    </button>
                </div>

                <div id="toastr-demo" className="panel col">
                    <div className="panel-body row">
                        <div className="col-md-4">
                            <strong>수업년도</strong>&emsp;&emsp;&emsp;
                            <select className="navbar" name="sortYear" id="sortYear" ref={sortYearRef}>
                                <option value="default">---전체---</option>
                                <option value="2020">2020년</option>
                                <option value="2021">2021년</option>
                                <option value="2022">2022년</option>
                                <option value="2023">2023년</option>
                                <option value="2023">2023년</option>
                                <option value="2024">2024년</option>
                                <option value="2025">2025년</option>

                                {/*{*/}
                                {/*    yearOptions.map(year => (*/}
                                {/*        <option key={year} value={year}>{year}</option>*/}
                                {/*    ))*/}
                                {/*}*/}
                                </select>
                        </div>

                        <div className="col-md-4">
                            <strong>강의주차</strong>&emsp;&emsp;&emsp;
                            <select className="navbar" name="sortWeek" id="sortWeek" ref={sortWeekRef}>
                                <option value="default">---전체---</option>
                                <option value="주중">주중</option>
                                <option value="주말">주말</option>
                                {/*{*/}
                                {/*    weekOptions.map(week => (*/}
                                {/*        <option key={week} value={week}>{week}</option>*/}
                                {/*    ))*/}
                                {/*}*/}
                            </select>
                        </div>

                        <div className="col-md-2">
                            <strong><i className="lnr lnr-magnifier"></i> 검색</strong>
                            <input type="text" className="form-control" id="findkey" name="findkey" ref={findkeyRef} placeholder="과정명 입력"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">과정 리스트</h3>
                            </div>
                            <div className="panel-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th style={{width: "20px"}}>
                                                <input type="checkbox" checked={isAllChecked}
                                                       onChange={handleAllCheckbox}/></th>
                                            <th>#</th>
                                            <th>과정명</th>
                                            <th>과목구분</th>
                                            <th>수업년도</th>
                                            <th>강의주차</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (!Array.isArray(classData.classlist) || classData.classlist.length === 0) ?
                                                <tr>
                                                    <td colSpan={6}>해당하는 데이터가 없습니다.</td>
                                                </tr>
                                                :
                                            (classData.classlist.map(classes => (
                                                <tr>
                                                    <td><input type="checkbox" checked={selectedCourNos.includes(classes.courNo)}
                                                               onChange={() => handleCheckbox(classes.courNo)}/></td>
                                                    <td>{classes.courNo}</td>
                                                    <td>{classes.courNm}</td>
                                                    <td>{classes.courDept}</td>
                                                    <td>{classes.courYear}</td>
                                                    <td>{classes.courWeek}</td>
                                                </tr>
                                            )))
                                        }
                                    </tbody>
                                </table>

                                {/* PAGINATION */}
                                <div className="col-md-offset-5">
                                        <ul className="pagination">
                                            {(classData.cpg > 1) &&
                                                (<li className="page-item">
                                                    <a onClick={preListPage} className="page-link">이전</a></li>)
                                            }

                                            {(classData.cpg < classData.cntpg) &&
                                                (<li className="page-item">
                                                    <a onClick={nextListPage} className="page-link">다음</a></li>)
                                            }
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">과정정보</h3>
                            </div>
                            <div className="panel-body">
                                {
                                    Array.isArray(classData?.classlist) && classData.classlist.map(classes => (
                                        classes.courNo === checkedData ?
                                            <>
                                                <p>번호</p>
                                                <input type="text" className="form-control" placeholder={classes.courNo} readOnly />
                                                <br/>
                                                <p>과정명</p>
                                                <input type="text" className="form-control" placeholder={classes.courNm} readOnly />
                                                <br/>
                                                <p>수업년도</p>
                                                <input type="text" className="form-control" placeholder={classes.courYear} readOnly />
                                                <br/>
                                                <p>과목구분</p>
                                                <input type="text" className="form-control" placeholder={classes.courDept} readOnly />
                                                <br/>
                                                <p>강의주차</p>
                                                <input type="text" className="form-control" placeholder={classes.courWeek} readOnly />
                                                <br/>
                                                <p>주당 수업시간</p>
                                                <input type="text" className="form-control" placeholder={classes.weekTime} readOnly />
                                                <br/>
                                                <p>총 수업시간</p>
                                                <input type="text" className="form-control" placeholder={classes.fullTime} readOnly />
                                            </>
                                            :
                                            <></>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllCourse;
