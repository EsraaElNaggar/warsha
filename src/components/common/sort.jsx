import React from "react";

const Sort = props => {
  return (
    <React.Fragment>
      <select
        id='sortTypes'
        name='sortTypes'
        className="sort-options"
        onChange={(e) => props.onSortChange(e)}>
        {props.sortTypes.map(type => (
          <option value={type.id} key={type.id}>{type.name}</option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default Sort;
