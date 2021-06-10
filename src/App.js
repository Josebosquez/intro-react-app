import React, { Component } from 'react'
import  './App.css'

export class App extends Component {
  state = {
    colorList: ["gold", "lightblue", "purple"],
    backgroundColorInput: "",
  };

  handleOnBackgroundChange=(color) => {
    // console.log(color)
    this.setState ({
      backgroundColorInput: color,
    })
  }

  render() {
    return (
      <div className={"all"}>
        <div className={"header"}>Jose's Header</div>

        <div className={"center"}>
          <div
            className="sidebar"
            style={{ backgroundColor: this.state.backgroundColorInput }}
          >
            <h3> SideBar</h3>
            <ul className={"color"}>
              {this.state.colorList.map((item, index) => {
                // map creates a new array based on what we are looking for.
                return (
                  <li
                    key={index}
                    onClick={() => this.handleOnBackgroundChange(item)}
                  >
                    {item}
                  </li> // the new array will give each color a onClick function that will take in handle the function handleOnBackgroundChange.
                );
              })}
            </ul>
          </div>
          <div className={"body"}>
            <h3>Body</h3>
            <img
              className={"img"}
              src="https://i0.wp.com/www.animemaru.com/wp-content/uploads/2018/08/dont_lewd_lolis.jpg?w=640&ssl=1"
              alt=""
            />
            <p>This is the Loli Police.</p>
            <div className={"squares"}>
              <div className={"img"}>
                <img
                  className={"img"}
                  src="https://i0.wp.com/www.animemaru.com/wp-content/uploads/2018/08/dont_lewd_lolis.jpg?w=640&ssl=1"
                  alt=""
                />
                square 1
              </div>
              <div className={"img"}>
                <img
                  className={"img"}
                  src="https://i0.wp.com/www.animemaru.com/wp-content/uploads/2018/08/dont_lewd_lolis.jpg?w=640&ssl=1"
                  alt=""
                />
                square 2
              </div>
              <div className={"img"}>
                <img
                  className={"img"}
                  src="https://i0.wp.com/www.animemaru.com/wp-content/uploads/2018/08/dont_lewd_lolis.jpg?w=640&ssl=1"
                  alt=""
                />
                square 3
              </div>
            </div>
          </div>
        </div>

        <div className={"footer"}>
          <h1 className={"footer-h1"}>Copyright Jose</h1>
          <h3>Footer</h3>
          <h1 className={"empty"}>Empty for display purposes</h1>
        </div>
      </div>
    );
  }
}

export default App
