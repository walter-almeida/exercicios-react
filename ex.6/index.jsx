import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family.jsx'
import Member from './member.jsx'

ReactDOM.render(
    
    <Family>
        <Member name='João' lastName='Silva'/>
    </Family>  
    
    , document.getElementById('app')

)


