import React from 'react'

export default ({query, count}) => (
  <tr>
    <td className='mdl-data-table__cell--non-numeric'>{query}</td>
    <td>{count}</td>
  </tr>
)
