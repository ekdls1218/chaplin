/* 일정계획 페이지 
<지도>
- 카카오 맵
- 키워드 검색하면 그와 관련됨 목록이 뜨고 지도에 마킹됨 

<일정계획 검색창>
- 인풋창이 있고 버튼이 있음
- 인풋창에 값을 입력하고 버튼을 클릭

<내 일정>
- 일정 짜는 곳
- DAY를 보여주기
- 넣은 여행지 가로로 스크롤 할 수 있게 보여주기
- 일정저장 버튼
- 내 일정 버튼 : 일정표 열고 닫기 가능
*/

import React, { useState } from 'react'
import '../CSS/PlanPage.css';
import SearchPlace from '../mobile_component/PlanPage/Search';
import All from '../mobile_component/PlanPage/all';


function ScheduleAPlanPage() {

    return (
        <div className='PlanPage'>

            {/* 일정 계획 페이지 헤더 */}
            <div className='PlanHeader'>
                <div className='Back'> 뒤로 </div>
                <div className='Calendar'>달력</div>
            </div>

            {/*검색창*/}
            {/* <SearchPlace /> */}
            <All />

        </div>
    );
}
export default ScheduleAPlanPage;

