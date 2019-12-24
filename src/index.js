import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Home,Page1 } from './page/home'
import './style.css'

class App extends Component {


    render() {
        return (<div>
           <Home />
           <Page1 />
            <div className='active'>
                测试
           </div>
        </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));