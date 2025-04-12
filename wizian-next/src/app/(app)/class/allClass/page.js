"use client"

import React, {useRef, useState} from "react";
import Swal from "sweetalert2";
import {useParams} from "next/navigation";

const AllClass = () => {
    // 검색 바 참조
    const sortLocRef = useRef(null);
    const sortStatusRef = useRef(null);
    const sortInstNmRef = useRef(null);
    const findkeyRef = useRef(null);

    const [selectedCourNos, setSelectedCourNos] = useState([]); // 체크박스 상태 저장
    const [checkedData, setCheckedData] = useState([]); // 체크박스 값 저장

    const [classData, setClassData] = useState({});

    // 초기 값 저장
    const params = useParams();

    // 페이지네이션 사용
    const cpg = params.cpg || 1;
    const [cpgs, setCpgs] = useState(cpg);

    const sortLoc = params.sortLoc || "default";
    const sortStatus = params.sortStatus || "default";
    const sortInstNm = params.sortInstNm || "default";
    const findkey = params.findkey || "all";

    const pglink = `http://localhost:8080/api/inst/class/allClass/list`;


    // useEffect(() => {
    const fetchData = async (sortLoc, sortStatus, sortInstNm, findkey) => {
        const fetchURL = `${pglink}/${sortLoc}/${sortStatus}/${sortInstNm}/${findkey}/${cpg}`;

        const result = await Swal.fire({
            title: '모든 강의 정보를 조회하시겠습니까?',
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


    // 조회하기 버튼 클릭 시 이벤트
    const goListSearch = async (e) => {
        const sortLoc = sortLocRef.current.value;
        const sortStatus = sortStatusRef.current.value;
        const sortInstNm = sortInstNmRef.current.value;
        const findkey = findkeyRef.current.value || "all";

        fetchData(sortLoc, sortStatus, sortInstNm, findkey);
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
        const sortLoc = sortLocRef.current.value;
        const sortStatus = sortStatusRef.current.value;
        const sortInstNm = sortInstNmRef.current.value;
        const findkey = findkeyRef.current.value || "all";

        const fetchURL = `http://localhost:8080/api/inst/class/allClass/list/${sortLoc}/${sortStatus}/${sortInstNm}/${findkey}/${page}`;

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
                <a href="/dashboard">메인 페이지 /</a>&ensp;<a href="#">모든 강의 /</a>&ensp;<a href="#">모든 강의 정보</a>

                <div className="row">
                    <button type="submit" className="btn btn-success col-lg-offset-10 margin-bottom-30" onClick={goListSearch}>
                        <i className="fa fa-refresh fa-spin"></i> 조회하기
                    </button>
                </div>

                <div className="panel col">
                    <div className="panel-body row">
                        <div className="col-md-3">
                            <strong>강의실 위치</strong>&emsp;&emsp;&emsp;
                            <select className="navbar" name="sortLoc" id="sortLoc" ref={sortLocRef}>
                                <option value="default">---전체---</option>
                                <option value="cheese">서울 강의실</option>
                                <option value="tomatoes">마포구 대흥동</option>
                                <option value="mozarella">강남구 역삼동</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <strong>개설여부</strong>&emsp;&emsp;&emsp;
                            <select className="navbar" name="sortStatus" id="sortStatus" ref={sortStatusRef}>
                                <option value="default">---전체---</option>
                                <option value="cheese">모집중</option>
                                <option value="tomatoes">진행중</option>
                                <option value="mozarella">마감</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <strong>대표강사</strong>&emsp;&emsp;&emsp;
                            <select className="navbar" name="sortInstNm" id="sortInstNm" ref={sortInstNmRef}>
                                <option value="default">---전체---</option>
                                <option value="cheese">홍길동</option>
                                <option value="tomatoes">강감찬</option>
                                <option value="mozarella">유관순</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <strong><i className="lnr lnr-magnifier"></i> 검색</strong>
                            <input type="text" className="form-control" id="findkey" name="findkey" ref={findkeyRef} placeholder="강의명 입력"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <div className="panel panel-scrolling">
                            <div className="panel-heading">
                                <h3 className="panel-title">강의 리스트</h3>
                            </div>
                            <div className="panel-body">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th style={{width: "20px"}}>
                                                <input type="checkbox" checked={isAllChecked}
                                                       onChange={handleAllCheckbox}/></th>
                                            <th>#</th>
                                            <th>강의명</th>
                                            <th>대표강사</th>
                                            <th>개강일</th>
                                            <th>수강인원</th>
                                            <th>개설여부</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        (!Array.isArray(classData.classlist) || classData.classlist.length === 0) ?
                                            <tr>
                                                <td colSpan={7}>해당하는 데이터가 없습니다.</td>
                                            </tr>
                                            :
                                            (classData.classlist.map(classes => (
                                                <tr>
                                                    <td><input type="checkbox" checked={selectedCourNos.includes(classes.lectNo)}
                                                               onChange={() => handleCheckbox(classes.lectNo)}/></td>
                                                    <td>{classes.lectNo}</td>
                                                    <td>{classes.lectNm}</td>
                                                    <td>{classes.instNm}</td>
                                                    <td>{classes.lectStart}</td>
                                                    <td>{classes.lectPers}</td>
                                                    <td>{classes.lectStatus}</td>
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
                                <h3 className="panel-title">강의정보</h3>
                            </div>
                            <div className="panel-body">
                                {
                                    Array.isArray(classData?.classlist) && classData.classlist.map(classes => (
                                        classes.lectNo === checkedData ?
                                            <>
                                                <p>번호</p>
                                                <input type="text" className="form-control" placeholder={classes.lectNo} readOnly />
                                                <br/>
                                                <p>강의명</p>
                                                <input type="text" className="form-control" placeholder={classes.lectNm} readOnly />
                                                <br/>
                                                <p>대표강사</p>
                                                <input type="text" className="form-control" placeholder={classes.instNm} readOnly />
                                                <br/>
                                                <p>강의금액</p>
                                                <input type="text" className="form-control" placeholder={classes.lectPrice} readOnly />
                                                <br/>
                                                <p>개강일</p>
                                                <input type="text" className="form-control" placeholder={classes.lectStart} readOnly />
                                                <br/>
                                                <p>수료일</p>
                                                <input type="text" className="form-control" placeholder={classes.lectSubmit} readOnly />
                                                <br/>
                                                <p>수강인원</p>
                                                <input type="text" className="form-control" placeholder={classes.lectPers} readOnly />
                                                <br/>
                                                <p>강의실 위치</p>
                                                <input type="text" className="form-control" placeholder={classes.lectLoc} readOnly />
                                                <br/>
                                                <p>개설여부</p>
                                                <input type="text" className="form-control" placeholder={classes.lectStatus} readOnly />
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
                    <div className="col-md-6">
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
                                        Array.isArray(classData?.classlist) && classData.classlist.map(classes => (
                                            classes.lectNo === checkedData ?
                                                <tr>
                                                    <td>{classes.lectNo}</td>
                                                    <td>{classes.lectSchd}</td>
                                                </tr>
                                            :
                                                <></>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div id="panel-scrolling-demo" className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">강의계획서</h3>
                            </div>
                            <div className="panel-body">
                                {
                                    Array.isArray(classData?.classlist) && classData.classlist.map(classes => (
                                        classes.lectNo === checkedData ?
                                            <textarea className="form-control" placeholder={classes.lectDesc}
                                                rows="10" readOnly></textarea>
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

export default AllClass;
