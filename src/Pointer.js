import { Component } from 'react'


class Pointer extends Component {

  componentDidMount() {
    document.onmousemove = (e) => {
      this.props.setPos(e.clientX, e.clientY)
    }
    document.onmousedown = (e) => {
      this.props.setDown(true)
    }
    document.onmouseup = (e) => {
      this.props.setDown(false)
    }
  }

  render() {
    return null;
  }

}

export default Pointer
