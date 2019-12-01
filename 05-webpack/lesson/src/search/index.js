'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import logo from './images/logo.jpg'
import {common} from '../../common'
import {a} from './tree-shaking'

class Search extends React.Component {
    render() {
        const funcA = a();
    return <div className="search-text">我允许你走进我的世界。
            <img src={ logo } />
        </div>;
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById("root")
)