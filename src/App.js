import React, { Component } from 'react'
import  './App.css'

export class App extends Component {
  state = {
    colorList: [
      {
        id: 1,
        color: 'gold',
      },
      {
        id: 2,
        color: 'lightblue',
      },
      {
        id: 3,
        color: 'purple',
      },
    ]
  }
  
  
  
  render() {
    return (
      <div className={'all'}> 
        <div className={'header'}>
          Jose's Header
        </div>

        <div className={'center'}>
          <div className={'sidebar'}>
            SideBar
          </div>
          <div className={'body'}>
            <h1>Body</h1>
            <div>Image</div>
            <p>This is my description paragraph.</p>
            <div className={'squares'}>
              <div>square 1</div>
              <div>square 2</div>
              <div>square 3</div>
            </div>
          </div>
        </div>

      <div className={'footer'}>
        <h1 className={'footer-h1'}>Copyright Jose</h1>
        <h1>Footer</h1>
        <h1 className={'empty'}>Empty for display purposes</h1>

      </div>

      </div>
    )
  }
}

export default App
