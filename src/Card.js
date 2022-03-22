import React from 'react'

const Card = ({ job }) => {
  // h3 tags expect strings
  // p tags expect strings
  return (
    <div>
      <h3>{job.company}</h3>
      <p>{job.city}</p>
      <p>{job.position}</p>
    </div>
  )
}

export default Card