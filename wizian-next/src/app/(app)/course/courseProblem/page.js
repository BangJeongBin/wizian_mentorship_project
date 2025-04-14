"use client"

import React, {useRef, useState} from "react";
import Swal from "sweetalert2";
import {useParams} from "next/navigation";

const CourseProblem = () => {
    const [yearOptions, setYearOptions] = useState([]);
    const sortYearRef = useRef(null);
    const sortHalfRef = useRef(null);
    const findkeyRef = useRef(null);

    // 과제정보 리스트
    const [selectedCourNos, setSelectedCourNos] = useState([]); // 체크박스 상태 저장
    const [checkedData, setCheckedData] = useState([]); // 체크박스 값 저장

    // 제출과제 리스트
    const [selectedCourNossub, setSelectedCourNossub] = useState([]); // 체크박스 상태 저장
    const [checkedDatasub, setCheckedDatasub] = useState([]); // 체크박스 값 저장

    const [courseData, setCourseData] = useState({});

    // 초기 값 저장
    const params = useParams();

    // 페이지네이션 사용
    const cpg = params.cpg || 1;
    const [cpgs, setCpgs] = useState(cpg);

    const sortYear = params.sortYear || "default";
    const sortHalf = params.sortHalf || "default";
    const findkey = params.findkey || "all";

    const pglink = `http://localhost:8080/api/inst/course/courseProblem/list`


    // useEffect(() => {
    const fetchData = async (sortYear, sortHalf, findkey) => {
        const fetchURL = `${pglink}/${sortYear}/${sortHalf}/${findkey}/${cpg}`;

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
        const sortYear = sortYearRef.current.value;
        const sortHalf = sortHalfRef.current.value;
        const findkey = findkeyRef.current.value || "all";
        console.log("ssssssssssssss", courseData.infoList)

        // <select> 옵션 처음 1회 저장
        if (true) {
            const year = [...new Set(courseData.infoList.map(item => item.assignInfoYear))];
            setYearOptions(year);
        }

        fetchData(sortYear, sortHalf, findkey);
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
        const sortHalf = sortHalfRef.current.value;
        const findkey = findkeyRef.current.value || "all";

        const fetchURL = `http://localhost:8080/api/inst/course/courseProblem/list/${sortYear}/${sortHalf}/${findkey}/${page}`;

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

    // 과제정보 개별 체크박스 선택
    const handleCheckbox = (assignInfoNo) => {
        setCheckedData(assignInfoNo);
        console.log(">>> 과제정보 개별 체크박스 ", checkedData);
        if (selectedCourNos.includes(assignInfoNo)) {
            setSelectedCourNos(selectedCourNos.filter(no => no !== assignInfoNo));
        } else {
            setSelectedCourNos([...selectedCourNos, assignInfoNo]);
        }

    };

    // 과제정보 헤더 체크박스 선택
    const handleAllCheckbox = (e) => {
        if (e.target.checked) {
            const allNos = courseData.infoList.map(cls => cls.assignInfoNm);
            setSelectedCourNos(allNos);
        } else {
            setSelectedCourNos([]);
        }
    };

    const isAllChecked = courseData?.infoList?.length > 0 &&
        selectedCourNos.length === courseData.infoList.length;


    // 제출과제 개별 체크박스 선택
    const handleCheckboxsub = (assignInfoNosub) => {
        setCheckedDatasub(assignInfoNosub);
        console.log(">>> 제출과제 개별 체크박스 ", checkedDatasub);
        if (selectedCourNossub.includes(assignInfoNosub)) {
            setSelectedCourNossub(selectedCourNossub.filter(no => no !== assignInfoNosub));
        } else {
            setSelectedCourNossub([...selectedCourNossub, assignInfoNosub]);
        }

    };

    // 제출과제 헤더 체크박스 선택
    const handleAllCheckboxsub = (e) => {
        if (e.target.checked) {
            const allNos = courseData.submitList.map(cls => cls.studnt.stdntNo);
            setSelectedCourNossub(allNos);
        } else {
            setSelectedCourNossub([]);
        }
    };

    const isAllCheckedsub = courseData?.submitList?.length > 0 &&
        selectedCourNossub.length === courseData.submitList.length;



    // sweetAlert
    const ProblemRefrech = (e) => {
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
    const Problemsubmit = (e) => {
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
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">진행중인 강의 /</a>&ensp;<a href="#">과제관리</a>

                <div className="row">
                    <button type="submit" className="btn btn-success col-lg-offset-10 margin-bottom-30" onClick={goListSearch}>
                        <i className="fa fa-refresh fa-spin"></i> 조회하기
                    </button>
                </div>

                <div id="toastr-demo" className="panel col">
                    <div className="panel-body row">
                        <div className="col-md-4">
                            <strong>과제년도</strong>&emsp;&emsp;&emsp;
                            <select className="navbar" name="sortYear" id="sortYear" ref={sortYearRef}>
                                <option value="default">---전체---</option>
                                {
                                    yearOptions.map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="col-md-4">
                            <strong>상하반기 분류</strong>&emsp;&emsp;&emsp;
                            <select className="navbar" name="sortHalf" id="sortHalf" ref={sortHalfRef}>
                                <option value="default">---전체---</option>
                                <option value="firstHalf">상반기</option>
                                <option value="secondHalf">하반기</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <strong><i className="lnr lnr-magnifier"></i> 검색</strong>
                            <input type="text" className="form-control" id="findkey" name="findkey" ref={findkeyRef} placeholder="과제명 입력"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">

                        <div className="col-lg-offset-9">
                            <button className="btn btn-primary" type="button">
                                배부
                            </button>
                            &emsp;
                            <button className="btn btn-danger" type="button">
                                마감
                            </button>
                        </div>

                        <div className="panel panel-scrolling">
                            <div className="panel-heading">
                                <h3 className="panel-title">과제 정보</h3>
                            </div>
                            <div className="panel-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th style={{width: "20px"}}>
                                                <input type="checkbox" checked={isAllChecked}
                                                       onChange={handleAllCheckbox}/></th>
                                            <th>#</th>
                                            <th>과제정보분류</th>
                                            <th>과제년도</th>
                                            <th>상하반기분류</th>
                                            <th>부여일자</th>
                                            <th>마감일자</th>
                                            <th>마감여부</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        (!Array.isArray(courseData.infoList) || courseData.infoList.length === 0) ?
                                            <tr>
                                                <td colSpan={8}>데이터를 조회해 주세요.</td>
                                            </tr>
                                            :
                                            (courseData.infoList.map(classes => (
                                                <tr>
                                                    {/*과제정보번호 넘겨주기*/}
                                                    <td><input type="checkbox" checked={selectedCourNos.includes(classes.assignInfoNm)}
                                                               onChange={() => handleCheckbox(classes.assignInfoNm)}/></td>
                                                    <td>{classes.assignInfoNo}</td>
                                                    <td>{classes.assignInfoNm}</td>
                                                    <td>{classes.assignInfoYear}</td>
                                                    <td>{classes.assignInfoMonth}</td>
                                                    <td>{classes.assignDate}</td>
                                                    <td>{classes.assignDuedate}</td>
                                                    <td>{classes.assignStatus}</td>
                                                </tr>
                                            )))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">

                        <form name="" id="" method="post" onSubmit={ProblemRefrech}>
                            <div className="col-lg-offset-10">
                                <button className="btn btn-success" type="submit">
                                    <i className="fa fa-spinner fa-spin"></i>
                                    새로고침
                                </button>
                            </div>

                            <div className="panel panel-scrolling">
                                <div className="panel-heading">
                                    <h3 className="panel-title">제출 과제 리스트</h3>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th style={{width: "20px"}}>
                                                <input type="checkbox" checked={isAllCheckedsub}
                                                       onChange={handleAllCheckboxsub}/></th>
                                            <th>#</th>
                                            <th>제출학생</th>
                                            <th>과제점수</th>
                                            <th>제출일자</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            !courseData.submitList ?
                                                <tr>
                                                    <td colSpan={5}>과제정보를 선택해 주세요.</td>
                                                </tr>
                                                :
                                                Array.isArray(courseData?.submitList) && courseData.submitList.map(classes => (
                                                    classes.assignInfo.assignInfoNm === checkedData ?

                                                        (courseData.submitList.map(classes => (
                                                            <tr>
                                                                {/*학생번호 넘겨주기*/}
                                                                <td><input type="checkbox" checked={selectedCourNossub.includes(classes.studnt.stdntNo)}
                                                                           onChange={() => handleCheckboxsub(classes.studnt.stdntNo)}/></td>
                                                                <td>{classes.studnt.stdntNo}</td>
                                                                <td>{classes.studnt.stdntNm}</td>
                                                                <td>{classes.assignPoint}</td>
                                                                <td>{classes.assignDuedate}</td>
                                                            </tr>
                                                        )))
                                                    :
                                                        <></>
                                                ))
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
                            </div>
                        </form>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-9">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">제출 과제 정보</h3>
                            </div>
                            <div className="panel-body">
                                {
                                    !courseData.submitList ?
                                        <>
                                            <input type="text" className="form-control" placeholder="제출과제를 선택해 주세요." readOnly/>
                                        </>
                                        :
                                        Array.isArray(courseData?.submitList) && courseData.submitList.map(classes => (
                                            classes.assignInfo.assignInfoNm === checkedData && classes.studnt.stdntNo === checkedDatasub ?
                                                <>
                                                    <p>{classes.assignInfo.assignQnum} . 과제 질문</p>
                                                    <textarea className="form-control" placeholder={classes.assignInfo.assignQue} rows="1" defaultValue="" readOnly></textarea>
                                                    <br/>
                                                    <p>{classes.assignInfo.assignQnum}. 과제 답변</p>
                                                    <textarea className="form-control" placeholder={classes.assignAns} rows="1" defaultValue="" readOnly></textarea>
                                                    <br/>
                                                </>
                                                :
                                                <></>
                                        ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">과제 답지</h3>
                            </div>
                            <div className="panel-body">
                                {
                                    !courseData.submitList ?
                                        <>
                                            <input type="text" className="form-control" placeholder="제출과제를 선택해 주세요." readOnly/>
                                        </>
                                        :
                                        Array.isArray(courseData?.submitList) && courseData.submitList.map(classes => (
                                            classes.assignInfo.assignInfoNm === checkedData && classes.studnt.stdntNo === checkedDatasub ?
                                                <>
                                                    <p>{classes.assignInfo.assignQnum}. 과제 정답</p>
                                                    <textarea className="form-control" placeholder={classes.assignInfo.assignCorct} rows="1" defaultValue="" readOnly></textarea>
                                                    <br/>
                                                </>
                                                :
                                                <></>
                                        ))
                                }
                            </div>
                        </div>

                        <div className="panel">
                            {/*<form name="" id="" method="post" onSubmit={Problemsubmit}>
                                <div className="panel-heading">
                                    <h3 className="panel-title">점수 채점</h3>
                                </div>
                                <div className="panel-body">
                                    <p>학생 번호</p>
                                    <input type="text" className="form-control" placeholder="text field"/>
                                    <br/>
                                    <input type="text" className="form-control" placeholder="점수를 입력하세요"/>
                                    <br/>
                                    <button className="btn btn-warning form-control" type="submit">
                                        점수 저장
                                    </button>
                                </div>
                            </form>*/}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CourseProblem;
