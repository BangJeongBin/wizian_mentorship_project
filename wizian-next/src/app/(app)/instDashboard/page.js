'use client';

import Image from "next/image";
import styles from "../../page.module.css";
import Swal from "sweetalert2";
import React, { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "투두 리스트", description: "있으면 좋긴 할듯", date: "Oct 9, 2016", completed: false },
    { id: 2, title: "사용여부", description: "Compellingly implement clicks-and-mortar relationships without highly efficient metrics.", date: "Oct 23, 2016", completed: false },
    { id: 3, title: "재고좀여", description: "Monotonectally formulate client-focused core competencies after parallel web-readiness.", date: "Oct 11, 2016", completed: false }
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
                      <input type="text" className="form-control" placeholder="text field"/>
                      <br/>
                      <p>강의명</p>
                      <input type="password" className="form-control" value="asecret"/>
                      <br/>
                      <p>강의실</p>
                      <input type="password" className="form-control" value="asecret"/>
                      <br/>
                      <p>수료일</p>
                      <input type="password" className="form-control" value="asecret"/>
                      <br/>
                      <p>수강인원</p>
                      <input type="password" className="form-control" value="asecret"/>
                      <br/>
                      <p>개설여부</p>
                      <input type="password" className="form-control" value="asecret"/>
                    </div>

                    <div className="panel-body col-md-6">
                      <textarea className="form-control" placeholder="
                          강의 계획서자리Objectively network visionary methodologies via best-of-breed users.
                          Phosfluorescently initiate go forward leadership skills before an expanded array of
                          infomediaries. Monotonectally incubate web-enabled communities rather than
                          process-centric.
                          Objectively network visionary methodologies via best-of-breed users.
                          Phosfluorescently initiate go forward leadership skills before an expanded array of
                          infomediaries. Monotonectally incubate web-enabled communities rather than
                          process-centric.
                          Objectively network visionary methodologies via best-of-breed users.
                          Phosfluorescently initiate go forward leadership skills before an expanded array of
                          infomediaries. Monotonectally incubate web-enabled communities rather than
                          process-centric."
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
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                          <th>Username</th>
                          <th>Username</th>
                          <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>1</td>
                          <td>Steve</td>
                          <td>Jobs</td>
                          <td>@steve</td>
                          <td>@steve</td>
                          <td>@steve</td>
                          <td>
                            <span className="label label-info">출석</span>
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>2</td>
                          <td>Simon</td>
                          <td>Philips</td>
                          <td>@simon</td>
                          <td>@steve</td>
                          <td>@steve</td>
                          <td>
                            <span className="label label-warning">지각</span>
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>3</td>
                          <td>Jane</td>
                          <td>Doe</td>
                          <td>@jane</td>
                          <td>@steve</td>
                          <td>@steve</td>
                          <td>
                            <span className="label label-danger">결석</span>
                          </td>
                        </tr>

                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>3</td>
                          <td>Jane</td>
                          <td>Doe</td>
                          <td>@jane</td>
                          <td>@steve</td>
                          <td>@steve</td>
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
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                          <th>Username</th>
                          <th>Username</th>
                          <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>1</td>
                          <td>Steve</td>
                          <td>Jobs</td>
                          <td>@steve</td>
                          <td>@steve</td>
                          <td>@steve</td>
                          <td>
                            <span className="label label-info">출석</span>
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>2</td>
                          <td>Simon</td>
                          <td>Philips</td>
                          <td>@simon</td>
                          <td>@steve</td>
                          <td>@steve</td>
                          <td>
                            <span className="label label-warning">지각</span>
                          </td>
                        </tr>
                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>3</td>
                          <td>Jane</td>
                          <td>Doe</td>
                          <td>@jane</td>
                          <td>@steve</td>
                          <td>@steve</td>
                          <td>
                            <span className="label label-danger">결석</span>
                          </td>
                        </tr>

                        <tr>
                          <td><input type="checkbox"/></td>
                          <td>3</td>
                          <td>Jane</td>
                          <td>Doe</td>
                          <td>@jane</td>
                          <td>@steve</td>
                          <td>@steve</td>
                          <td>
                            <span className="label label-success">출결 전</span>
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
