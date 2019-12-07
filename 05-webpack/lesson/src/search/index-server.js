'use strict'

// import React from 'react'
// import ReactDOM from 'react-dom'
// import './search.less'
// import largeNumber from 'large-number-lzt'
// import logo from './images/logo.jpg'
// import {common} from '../../common'
// import {a} from './tree-shaking'
const React = require('react');
const logo = require('./images/logo.jpg');
const largeNumber = require('large-number-lzt');
require('./search.less');

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

module.exports = <Search />;