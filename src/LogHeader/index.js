import "LogHeader/css/index.css";
import { block } from "bem-cn";
import React from "react";

const b = block("log-header");

function LogHeader() {
  return (
    <tr className={b()}>
      <th>
        <button type="button" className={b("date")}>Date</button>
      </th>
      <th>
        <button type="button" className={b("level")}>Level</button>
      </th>
      <th>
        <button type="button" className={b("message")}>Message</button>
      </th>
    </tr>
  );
}

/*
 *Board.defaultProps = {
 *  board: (i, j) => undefined,
 *  click: () => {},
 *  col: 8,
 *  row: 8,
 *  reverse: false,
 *};
 */
export default LogHeader;
