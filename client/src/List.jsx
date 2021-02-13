import React from "react";

const List = (props) => {
  return (
    <ul>
      {props.items.map(item => {
        return <li>{item.item} {item.count}</li>
      })}
    </ul>
  )
}

export default List