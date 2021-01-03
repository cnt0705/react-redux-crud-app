import React, { Component } from 'react'
import { connect } from 'react-redux'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    console.log('hoge')
    this.props.readEvents()
  }

  render() {
    return (
      <>
        <div>aaa</div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = { readEvents }

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
