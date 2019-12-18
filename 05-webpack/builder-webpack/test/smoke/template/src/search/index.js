'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import largeNumber from 'large-number-lzt'
import logo from './images/logo.jpg'
import {common} from '../../common'
import {a} from './tree-shaking'

class Search extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            Text: null
        }
    }
    loadComponet() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            })
        })
    }
    render() {
        const { Text } = this.state;
        const addResult = largeNumber('999','1');
    return <div className="search-text">{ Text ? <Text /> : null }{ addResult }我允许你走进我的世界。
            <img src={ logo } onClick={ this.loadComponet.bind(this) } />
        </div>;
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById("root")
)