import React, { useReducer } from 'react';

export function Checkbox() {
  const [checked, setChecked] = useReducer(
    checked => !checked,
    false
  );
  return (
    <>
      <label htmlFor="myCheckbox">{checked ? "checked" : "not checked"}</label>
      <input id="myCheckbox" type="checkbox" value={checked} onChange={setChecked} />
    </>
  );
}
