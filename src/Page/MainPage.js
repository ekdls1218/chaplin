import React from 'react'
import {Link} from 'react-router-dom'
 
function Main() {
    
    return(
        <div>
            <h1>메인 페이지</h1>
            <Link to='/SelectRegion'>일정계획</Link>
        </div>
    );
}
export default Main;