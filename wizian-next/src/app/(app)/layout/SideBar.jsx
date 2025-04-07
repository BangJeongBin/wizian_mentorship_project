"use client";

import React, { useState } from "react";
import Link from "next/link";

const SideBar = () => {
    const [isCollapsed1, setIsCollapsed1] = useState(true);
    const [isCollapsed2, setIsCollapsed2] = useState(true);
    const [isCollapsed3, setIsCollapsed3] = useState(true);
    const [isCollapsed4, setIsCollapsed4] = useState(true);
    const [isCollapsed5, setIsCollapsed5] = useState(true);

    const toggleSubMenu1 = (e) => {
        e.preventDefault(); // 페이지 이동 방지
        setIsCollapsed1((prev) => !prev);
    };

    const toggleSubMenu2 = (e) => {
        e.preventDefault(); // 페이지 이동 방지
        setIsCollapsed2((prev) => !prev);
    };

    const toggleSubMenu3 = (e) => {
        e.preventDefault(); // 페이지 이동 방지
        setIsCollapsed3((prev) => !prev);
    };

    const toggleSubMenu4 = (e) => {
        e.preventDefault(); // 페이지 이동 방지
        setIsCollapsed4((prev) => !prev);
    };

    const toggleSubMenu5 = (e) => {
        e.preventDefault(); // 페이지 이동 방지
        setIsCollapsed5((prev) => !prev);
    };


    return (
        <div id="sidebar-nav" className="sidebar">
            <div className="sidebar-scroll">
                <nav>
                    <ul className="nav">

                        {/* 마이 페이지 */}
                        <li>
                            <a href="#subPages" className={`collapsed ${isCollapsed1 ? "" : "active"}`}
                               onClick={toggleSubMenu1}>
                                <i className="lnr lnr-home"></i>
                                <span>마이 페이지</span>
                            </a>

                            <div id="subPages" className={`collapse ${isCollapsed1 ? "" : "show"}`}>
                                <ul className="nav">
                                    <li>
                                        <Link href="/mypage/mypage">내 정보</Link>
                                    </li>
                                    <li>
                                        <Link href="/mypage/resetPassword">비밀번호 변경</Link>
                                    </li>
                                    <li>
                                        <Link href="/mypage/lookScreen">화면 잠금</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* 모든 강의 */}
                        <li>
                            <a href="#subPages" className={`collapsed ${isCollapsed2 ? "" : "active"}`}
                               onClick={toggleSubMenu2}>
                                <i className="lnr lnr-calendar-full"></i>
                                <span>모든 강의</span>
                            </a>

                            <div id="subPages" className={`collapse ${isCollapsed2 ? "" : "show"}`}>
                                <ul className="nav">
                                    <li>
                                        <Link href="/class/allCourse">모든과정정보</Link>
                                    </li>
                                    <li>
                                        <Link href="/class/allClass">모든강의정보</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* 진행중인 강의 */}
                        <li>
                            <a href="#subPages" className={`collapsed ${isCollapsed3 ? "" : "active"}`}
                               onClick={toggleSubMenu3}>
                                <i className="lnr lnr-keyboard"></i>
                                <span>진행중인 강의</span>
                            </a>

                            <div id="subPages" className={`collapse ${isCollapsed3 ? "" : "show"}`}>
                                <ul className="nav">
                                    <li>
                                        <Link href="/course/courseInfo">강의정보</Link>
                                    </li>
                                    <li>
                                        <Link href="/course/courseStudent">수강학생</Link>
                                    </li>
                                    <li>
                                        <Link href="/course/courseAttend">출결관리</Link>
                                    </li>
                                    <li>
                                        <Link href="/course/courseProblem">과제관리</Link>
                                    </li>
                                    <li>
                                        <Link href="/course/courseGrade">성적관리</Link>
                                    </li>
                                    <li>
                                        <Link href="/course/coursealarm">수강생 알림</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* 나의 자료실 */}
                        <li>
                            <a href="#subPages" className={`collapsed ${isCollapsed4 ? "" : "active"}`}
                               onClick={toggleSubMenu4}>
                                <i className="lnr lnr-book"></i>
                                <span>나의 자료실</span>
                            </a>

                            <div id="subPages" className={`collapse ${isCollapsed4 ? "" : "show"}`}>
                                <ul className="nav">
                                    <li>
                                        <Link href="/archive/myProblem">나의 과제</Link>
                                    </li>
                                    <li>
                                        <Link href="/archive/problemWrite">&emsp;&emsp; 과제 작성</Link>
                                    </li>
                                    <li>
                                        <Link href="/archive/myBoard">나의 게시글</Link>
                                    </li>
                                    <li>
                                        <Link href="/archive/boardWrite">&emsp;&emsp; 게시글 작성</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* 게시판 */}
                        <li>
                            <a href="#subPages" className={`collapsed ${isCollapsed5 ? "" : "active"}`}
                               onClick={toggleSubMenu5}>
                                <i className="lnr lnr-screen"></i>
                                <span>게시판</span>
                            </a>

                            <div id="subPages" className={`collapse ${isCollapsed5 ? "" : "show"}`}>
                                <ul className="nav">
                                    <li>
                                        <Link href="/board/notice">공지사항</Link>
                                    </li>
                                    <li>
                                        <Link href="/board/classBoard">강의게시판</Link>
                                    </li>
                                    <li>
                                        <Link href="/board/qnaBoard">QnA</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;
