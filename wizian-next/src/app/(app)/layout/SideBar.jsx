"use client";

import React, { useState } from "react";
import Link from "next/link";

const SideBar = () => {
    const [isCollapsed1, setIsCollapsed1] = useState(true);
    const [isCollapsed2, setIsCollapsed2] = useState(true);
    const [isCollapsed3, setIsCollapsed3] = useState(true);
    const [isCollapsed4, setIsCollapsed4] = useState(true);

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


    return (
        <div id="sidebar-nav" className="sidebar">
            <div className="sidebar-scroll">
                <nav>
                    <ul className="nav">
                        <li>
                            <Link href="/dashboard">
                                <i className="lnr lnr-home"></i> <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/elements">
                                <i className="lnr lnr-code"></i> <span>Elements</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/charts">
                                <i className="lnr lnr-chart-bars"></i> <span>Charts</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/panels">
                                <i className="lnr lnr-cog"></i> <span>Panels</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/notifications">
                                <i className="lnr lnr-alarm"></i> <span>Notifications</span>
                            </Link>
                        </li>

                        {/* 마이 페이지 */}
                        <li>
                            <a href="#subPages" className={`collapsed ${isCollapsed1 ? "" : "active"}`}
                               onClick={toggleSubMenu1}>
                                <i className="lnr lnr-file-empty"></i>
                                <span>마이 페이지</span>
                            </a>

                            <div id="subPages" className={`collapse ${isCollapsed1 ? "" : "show"}`}>
                                <ul className="nav">
                                    <li>
                                        <Link href="/pageProfile">내 정보</Link>
                                    </li>
                                    <li>
                                        <Link href="/pageLogin">비밀번호 변경</Link>
                                    </li>
                                    <li>
                                        <Link href="/pageLockscreen">화면 잠금</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                            <Link href="/tables">
                                <i className="lnr lnr-dice"></i> <span>Tables</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/typography">
                                <i className="lnr lnr-text-format"></i> <span>Typography</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/icons">
                                <i className="lnr lnr-linearicons"></i> <span>Icons</span>
                            </Link>
                        </li>

                        {/* 진행중인 강의 */}
                        <li>
                            <a href="#subPages" className={`collapsed ${isCollapsed2 ? "" : "active"}`}
                               onClick={toggleSubMenu2}>
                                <i className="lnr lnr-file-empty"></i>
                                <span>진행중인 강의</span>
                            </a>

                            <div id="subPages" className={`collapse ${isCollapsed2 ? "" : "show"}`}>
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
                                        <Link href="/course/courseBoard">강의게시판</Link>
                                    </li>
                                    <li>
                                        <Link href="/course/courseBoard">전체알림</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* 모든 강의 */}
                        <li>
                            <a href="#subPages" className={`collapsed ${isCollapsed3 ? "" : "active"}`}
                               onClick={toggleSubMenu3}>
                                <i className="lnr lnr-file-empty"></i>
                                <span>모든 강의</span>
                            </a>

                            <div id="subPages" className={`collapse ${isCollapsed3 ? "" : "show"}`}>
                                <ul className="nav">
                                    <li>
                                        <Link href="/course/courseInfo">모든과정정보</Link>
                                    </li>
                                    <li>
                                        <Link href="/course/courseStudent">모든강의정보</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        {/* 게시판 */}
                        <li>
                            <a href="#subPages" className={`collapsed ${isCollapsed4 ? "" : "active"}`}
                               onClick={toggleSubMenu4}>
                                <i className="lnr lnr-file-empty"></i>
                                <span>게시판</span>
                            </a>

                            <div id="subPages" className={`collapse ${isCollapsed4 ? "" : "show"}`}>
                                <ul className="nav">
                                    <li>
                                        <Link href="/course/courseInfo">공지사항</Link>
                                    </li>
                                    <li>
                                        <Link href="/course/courseStudent">QnA</Link>
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
