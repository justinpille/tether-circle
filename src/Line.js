import React, {Component} from 'react'


class Line extends Component {

  render() {

    let {
      getRef,
      x1,
      y1,
      x2,
      y2,
      strokeWidth = 1,
      stroke = 'black',
    } = this.props

    console.log(getRef)

    return (
      <path
        ref={getRef}
        d={`
          m ${x1} ${y1}
          L ${x2} ${y2}
        `}
        strokeWidth={strokeWidth}
        stroke={stroke}
      />
    )
  }
}


export default Line
