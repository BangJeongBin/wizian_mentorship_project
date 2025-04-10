"use client"

import React, {useEffect, useRef, useState} from "react";
import Swal from "sweetalert2";
import {useParams} from "next/navigation";

const CourseStudent = () => {
    const [statusOptions, setStatusOptions] = useState([]);
    const [genderOptions, setGenderOptions] = useState([]);
    const sortStatusRef = useRef(null);
    const sortGenderRef = useRef(null);
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
    const sortGender = params.sortGender || "default";
    const findkey = params.findkey || "all";

    const pglink = `http://localhost:8080/api/inst/class/allCourse/list`


    // useEffect(() => {
    const fetchData = async (sortStatus, sortGender, findkey) => {
        const fetchURL = `${pglink}/${sortStatus}/${sortGender}/${findkey}/${cpg}`;

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

    useEffect(() => {
        // <select> 옵션 처음 1회 저장
        if (statusOptions.length === 0 && genderOptions.length === 0 && Array.isArray(courseData.courselist)) {
            const status = [...new Set(courseData.courselist.map(item => item.applyStatus))];
            const gender = [...new Set(courseData.courselist.map(item => item.genCd))];
            setStatusOptions(status);
            setGenderOptions(gender);
        }
    }, []);


    // 조회하기 버튼 클릭 시 이벤트
    const goListSearch = async (e) => {
        const sortStatus = sortStatusRef.current.value;
        const sortGender = sortGenderRef.current.value;
        const findkey = findkeyRef.current.value || "all";

        fetchData(sortStatus, sortGender, findkey);
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
        const sortGender = sortGenderRef.current.value;
        const findkey = findkeyRef.current.value || "all";

        const fetchURL = `http://localhost:8080/api/inst/class/allCourse/list/${sortStatus}/${sortGender}/${findkey}/${page}`;

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
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">진행중인 강의 /</a>&ensp;<a href="#">수강학생</a>

                <div className="row">
                    <button type="submit" className="btn btn-success col-lg-offset-10 margin-bottom-30"  onClick={goListSearch}>
                        <i className="fa fa-refresh fa-spin"></i> 조회하기
                    </button>
                </div>

                <div id="toastr-demo" className="panel col">
                    <div className="panel-body row">
                        <div className="col-md-4">
                            <strong>진행 상태</strong>&emsp;&emsp;&emsp;
                            <select className="navbar" name="sortStatus" id="sortStatus" ref={sortStatusRef}>
                                <option value="default">---전체---</option>
                                {
                                    statusOptions.map(status => (
                                        <option key={status} value={status}>{status}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="col-md-4">
                            <strong>성별</strong>&emsp;&emsp;&emsp;
                            <select className="navbar" name="sortGender" id="sortGender" ref={sortGenderRef}>
                                <option value="default">---전체---</option>
                                {
                                    genderOptions.map(gender => (
                                        <option key={gender} value={gender}>{gender}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="col-md-3">
                            <strong><i className="lnr lnr-magnifier"></i> 검색</strong>
                            <input type="text" className="form-control" id="findkey" name="findkey" ref={findkeyRef} placeholder="학생명 입력"/>
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
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                            <th>Username</th>
                                            <th>Username</th>
                                            <th>Username</th>
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
                                <p>학생 번호</p>
                                <input type="text" className="form-control" placeholder="text field"/>
                                <br/>
                                <p>이름</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>이메일</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>성별</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>연락처</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>주소</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>회원가입일</p>
                                <input type="password" className="form-control" value="asecret"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">수강신청 정보</h3>
                            </div>
                            <div className="panel-body">
                                <p>수강신청 번호</p>
                                <input type="text" className="form-control" placeholder="text field"/>
                                <br/>
                                <p>신청 날짜</p>
                                <input type="password" className="form-control" value="asecret"/>
                                <br/>
                                <p>신청 마감일</p>
                                <input type="password" className="form-control" value="asecret"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CourseStudent;
