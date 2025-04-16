'use client';

import Image from "next/image";
import styles from "../../page.module.css";
import Swal from "sweetalert2";
import React, { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "금요일 과제 마감", description: "Monotonectally formulate client-focused core competencies after parallel web-readiness.", date: "Oct 9, 2016", completed: false },
    { id: 2, title: "출석여부에 대한 공문 확인", description: "Compellingly implement clicks-and-mortar relationships without highly efficient metrics.", date: "Oct 23, 2016", completed: false },
    { id: 3, title: "내일 오전 9:30 미팅", description: "Monotonectally formulate client-focused core competencies after parallel web-readiness.", date: "Oct 11, 2016", completed: false }
  ]);

  // 패널 상태 관리
  const [panels, setPanels] = useState({
    overview: { visible: true, collapsed: false },
    purchases: { visible: true, collapsed: false },
    multiCharts: { visible: true, collapsed: false },
    todo: { visible: true, collapsed: false },
    timeline: { visible: true, collapsed: false },
    tasks: { visible: true, collapsed: false },
    visits: { visible: true, collapsed: false },
    system: { visible: true, collapsed: false }
  });

  // 체크박스 토글
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // 패널 제거 핸들러
  const handleRemovePanel = (panelKey) => {
    setPanels(prev => ({
      ...prev,
      [panelKey]: { ...prev[panelKey], visible: false }
    }));
  };

  // 패널 접기/펼치기 핸들러
  const handleToggleCollapse = (panelKey) => {
    setPanels(prev => ({
      ...prev,
      [panelKey]: { ...prev[panelKey], collapsed: !prev[panelKey].collapsed }
    }));
  };

  // sweetAlert
  const handleSubmit = (e) => {
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
          {/* OVERVIEW */}
          {panels.overview.visible && (
              <div className="panel panel-headline">
                <div className="panel-heading">
                  <h3 className="panel-title">진행중인 강의</h3>
                  <p className="panel-subtitle">기간: 개강일 - 수료일</p>
                  <div className="right">
                    <button type="button" className="btn-toggle-collapse" onClick={() => handleToggleCollapse('overview')}>
                      <i className={`lnr ${panels.overview.collapsed ? 'lnr-chevron-down' : 'lnr-chevron-up'}`}></i>
                    </button>
                    <button type="button" className="btn-remove" onClick={() => handleRemovePanel('overview')}>
                      <i className="lnr lnr-cross"></i>
                    </button>
                  </div>
                </div>

                <div className="panel-body" style={{ display: panels.overview.collapsed ? 'none' : 'block' }}>
                  <div className="row">
                    <div className="panel-body col-md-6">
                      <p>번호</p>
                      <input type="text" className="form-control" placeholder="1" readOnly/>
                      <br/>
                      <p>강의명</p>
                      <input type="text" className="form-control" value="Spring Boot 기반 백엔드 개발 입문 강좌" readOnly/>
                      <br/>
                      <p>강의실</p>
                      <input type="text" className="form-control" value="서울 강남 캠퍼스" readOnly/>
                      <br/>
                      <p>수료일</p>
                      <input type="text" className="form-control" value="2025-04-25 23:59:59" readOnly/>
                      <br/>
                      <p>수강인원</p>
                      <input type="text" className="form-control" value="20" readOnly/>
                      <br/>
                      <p>개설여부</p>
                      <input type="text" className="form-control" value="OPEN" readOnly/>
                    </div>

                    <div className="panel-body col-md-6">
                      <textarea className="form-control" placeholder="
                          JDBC JDBC 드라이브를 이용한 데이터베이스 연동, Connection, Statement, PreparedStatement 객체 Connection Pool을 이용한 JDBC 처리

JSP
JSP 페이지 기본구조, 디렉티브, 스크립트 요소

내장객체, 에러처리, 자바빈, 액션 태그

페이지 모듈화와 요청 흐름 제어

쿠키와 세션, 표현언어, JSTL, 커스텀 태그

파일 업로드, 필터, 데이터베이스 연동

MVC 패턴 이해, Model2 구조 설계

MVC 패턴 기반의 게시판 기능 구현

Servlet
Model2 구조 이해, 서블릿 라이프 사이클

폼 전송방식(get, post), Redirect와 Forward

Connection Pool을 이용한 데이터베이스 연동

MyBatis
MyBatis 구조 이해

MyBatis를 활용한 CRUD, REST API

DAO 프레임워크

PL/SQL의 프로시저와 함수 호출하기

Spring Boot
스프링 클라우드 분산처리 개발환경 구축

스프링 컨테이너 이해 및 구조분석

Spring IOC/DI, Spring AOP, Spring JDBC

관점지향적인 프로그래밍 분석 및 설계

트랜잭션 처리기법

Spring MVC, Spring ORM, 인터셉터

Spring MVC 기반의 게시판 기능 구현

Maven/gradle, Spring MVC, Spring ORM

Lombok, Thymeleaf, JPA

클라우드 플랫폼 기반 서비스 운영 실습
AWS 클라우드 웹서비스 활용
Public Cloud의 개요

가상화 서버 서비스를 위한 Amazon EC2

클라우드 기반 가용성,확장성 우수 네트워킹 서비스 Amazon Route 53

스토리지 서비스를 위한 Amazon S3

데이터베이스 서비스를 위한 Amazon RDS

대용량 데이터 분석 플랫폼 Amazon Kinesis

이벤트 드리번 솔루션 Amazon SWF, Amazon SQS, Amazon SNS, Amazon Lambda

Amazon ElastiCache를 사용한 캐시솔루션 개발

리소스, 애플리케이션 모니터링 Amazon CloudWatch

애플리케이션 단위로 실행하기 위한 Amazon 컨테이너 서비스

-애플리케이션 호스팅 및 배포 자동화 Amazon Elastic Beanstal"
                          rows="20" defaultValue="">
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
          )}

          {/* sweetalert example */}
          <form name="" id="" method="post" onSubmit={handleSubmit}>
            <div className="flex justify-between mt-6">
              <button type="submit" className="btn-complate">
                수정 완료
              </button>
            </div>
          </form>

          <div className="row">
            <div className="col-md-6">
              {/* RECENT PURCHASES */}
              {panels.purchases.visible && (
                  <div className="panel">
                    <div className="panel-heading">
                      <h3 className="panel-title">수강 학생</h3>
                      <div className="right">
                        <button type="button" className="btn-toggle-collapse" onClick={() => handleToggleCollapse('purchases')}>
                          <i className={`lnr ${panels.purchases.collapsed ? 'lnr-chevron-down' : 'lnr-chevron-up'}`}></i>
                        </button>
                        <button type="button" className="btn-remove" onClick={() => handleRemovePanel('purchases')}>
                          <i className="lnr lnr-cross"></i>
                        </button>
                      </div>
                    </div>
                    <div className="panel-body no-padding" style={{ display: panels.purchases.collapsed ? 'none' : 'block' }}>
                      <table className="table table-striped">
                        <thead>
                        <tr>
                          <th><input type="checkbox"/></th>
                          <th>#</th>
                          <th>이름</th>
                          <th>주소</th>
                          <th>연락처</th>
                          <th>성별</th>
                          <th>이메일</th>
                          <th>출석여부</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>1</td>
                          <td>김하늘</td>
                          <td>서울 강남구 논현로</td>
                          <td>01011112222</td>
                          <td>M</td>
                          <td>stdnt001@example.com</td>
                          <td>
                            <span className="label label-info">출석</span>
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>2</td>
                          <td>이준호</td>
                          <td>서울 영등포구 여의도동</td>
                          <td>01022223333</td>
                          <td>W</td>
                          <td>stdnt002@example.com</td>
                          <td>
                            <span className="label label-warning">지각</span>
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>3</td>
                          <td>박서준</td>
                          <td>서울 중구 명동길</td>
                          <td>01033334444</td>
                          <td>M</td>
                          <td>stdnt003@example.com</td>
                          <td>
                            <span className="label label-danger">결석</span>
                          </td>
                        </tr>

                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>3</td>
                          <td>최지우</td>
                          <td>서울 서대문구 통일로</td>
                          <td>01044445555</td>
                          <td>W</td>
                          <td>stdnt004@example.com</td>
                          <td>
                            <span className="label label-success">출결 전</span>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="panel-footer" style={{ display: panels.purchases.collapsed ? 'none' : 'block' }}>
                      <div className="row">
                        <div className="col-md-6"><span className="panel-note"><i className="fa fa-clock-o"></i> Last 24 hours</span></div>
                        <div className="col-md-6 text-right"><a href="/course/courseAttend" className="btn btn-primary">출석페이지 이동</a></div>
                      </div>
                    </div>
                  </div>
              )}
            </div>

            <div className="col-md-6">
              {/* MULTI CHARTS */}
              {panels.multiCharts.visible && (
                  <div className="panel">
                    <div className="panel-heading">
                      <h3 className="panel-title">시간표</h3>
                      <div className="right">
                        <button type="button" className="btn-toggle-collapse" onClick={() => handleToggleCollapse('multiCharts')}>
                          <i className={`lnr ${panels.multiCharts.collapsed ? 'lnr-chevron-down' : 'lnr-chevron-up'}`}></i>
                        </button>
                        <button type="button" className="btn-remove" onClick={() => handleRemovePanel('multiCharts')}>
                          <i className="lnr lnr-cross"></i>
                        </button>
                      </div>
                    </div>
                    <div className="panel-body" style={{ display: panels.multiCharts.collapsed ? 'none' : 'block' }}>
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
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-md-7">
              {/* TODO LIST */}
              {panels.todo.visible && (
                  <div className="panel">
                    <div className="panel-heading">
                      <h3 className="panel-title">To-Do List</h3>
                      <div className="right">
                        <button type="button" className="btn-toggle-collapse" onClick={() => handleToggleCollapse('todo')}>
                          <i className={`lnr ${panels.todo.collapsed ? 'lnr-chevron-down' : 'lnr-chevron-up'}`}></i>
                        </button>
                        <button type="button" className="btn-remove" onClick={() => handleRemovePanel('todo')}>
                          <i className="lnr lnr-cross"></i>
                        </button>
                      </div>
                    </div>
                    <div className="panel-body" style={{ display: panels.todo.collapsed ? 'none' : 'block' }}>
                      <ul className="list-unstyled todo-list">
                        {tasks.map((task) => (
                            <li key={task.id} className={task.completed ? "completed" : ""}>
                              <label className="control-inline fancy-checkbox">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTask(task.id)}
                                />
                                <span></span>
                              </label>
                              <p>
                                <span className="title">{task.title}</span>
                                <span className="short-description">{task.description}</span>
                                <span className="date">{task.date}</span>
                              </p>
                              <div className="controls">
                                <a href="#"><i className="icon-software icon-software-pencil"></i></a>
                                <a href="#"><i className="icon-arrows icon-arrows-circle-remove"></i></a>
                              </div>
                            </li>
                        ))}
                      </ul>
                    </div>
                  </div>
              )}
            </div>
            <div className="col-md-5">
              {/* TIMELINE */}
              {panels.timeline.visible && (
                  <div className="panel panel-scrolling">
                    <div className="panel-heading">
                      <h3 className="panel-title">제출한 과제</h3>
                      <div className="right">
                        <button type="button" className="btn-toggle-collapse" onClick={() => handleToggleCollapse('timeline')}>
                          <i className={`lnr ${panels.timeline.collapsed ? 'lnr-chevron-down' : 'lnr-chevron-up'}`}></i>
                        </button>
                        <button type="button" className="btn-remove" onClick={() => handleRemovePanel('timeline')}>
                          <i className="lnr lnr-cross"></i>
                        </button>
                      </div>
                    </div>
                    <div className="panel-body" style={{ display: panels.timeline.collapsed ? 'none' : 'block' }}>
                      <table className="table table-striped">
                        <thead>
                        <tr>
                          <th><input type="checkbox"/></th>
                          <th>#</th>
                          <th>이름</th>
                          <th>연락처</th>
                          <th>성별</th>
                          <th>이메일</th>
                          <th>제출여부</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>1</td>
                          <td>김하늘</td>
                          <td>01011112222</td>
                          <td>M</td>
                          <td>stdnt001@example.com</td>
                          <td>
                            <span className="label label-success">제출완료</span>
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>2</td>
                          <td>이준호</td>
                          <td>01022223333</td>
                          <td>W</td>
                          <td>stdnt002@example.com</td>
                          <td>
                            <span className="label label-success">제출완료</span>
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>3</td>
                          <td>박서준</td>
                          <td>01033334444</td>
                          <td>M</td>
                          <td>stdnt003@example.com</td>
                          <td>
                            <span className="label label-danger">미제출</span>
                          </td>
                        </tr>

                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>3</td>
                          <td>최지우</td>
                          <td>01044445555</td>
                          <td>W</td>
                          <td>stdnt004@example.com</td>
                          <td>
                            <span className="label label-success">제출완료</span>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <button type="button" className="btn btn-primary btn-bottom center-block">과제페이지 이동</button>
                    </div>
                  </div>
              )}
            </div>
          </div>

        </div>
      </div>
  );
}
