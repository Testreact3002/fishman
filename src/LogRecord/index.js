import "LogRecord/css/index.css";
import { block } from "bem-cn";
import PropTypes from "prop-types";
import React from "react";

const b = block("log-record");

function LogRecord({ ts, level = 2, message = "" }) {
  return (
    <tr className={b({ level })}>
      <td className={b("date")}>{ts.toISOString()}</td>
      <td className={b("level")}>{level}</td>
      <td className={b("message")}>{message}</td>
    </tr>
  );
}

LogRecord.propTypes = {
  ts: PropTypes.instanceOf(Date).isRequired,
  level: PropTypes.oneOf(["0", "1", "2", "3", "4", "5"]),
  message: PropTypes.string,
};
/*
 *Board.defaultProps = {
 *  board: (i, j) => undefined,
 *  click: () => {},
 *  col: 8,
 *  row: 8,
 *  reverse: false,
 *};
 */
export default LogRecord;
