import React, { Component } from 'react'
import { useParams } from 'react-router-dom';

const DetailNotesWrapper = () => {
  const { id } = useParams();

  return (
    <DetailNotes idNotes={id} />
  )
}

class DetailNotes extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <h1>DetailNotes - {this.props.idNotes}</h1>
      </div>
    )
  }
}

export default DetailNotesWrapper;