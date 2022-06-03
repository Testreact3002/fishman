import { storiesOf } from "@storybook/react";
import LogRecord from "LogRecord";
import React from "react";

export default storiesOf("LogRecord", module)
  .addDecorator((fn) => <div style={{}}>{fn()}</div>)
  .add("default", () => <LogRecord ts={new Date()} />)
  .add("level trace 0", () => (
    <LogRecord ts={new Date()} level="0" message="Log Message" />
  ))
  .add("level trace 1", () => (
    <LogRecord ts={new Date()} level="1" message="Log Message" />
  ))
  .add("level trace 2", () => (
    <LogRecord ts={new Date()} level="2" message="Log Message" />
  ))
  .add("level trace 3", () => (
    <LogRecord ts={new Date()} level="3" message="Log Message" />
  ))
  .add("level trace 4", () => (
    <LogRecord ts={new Date()} level="4" message="Log Message" />
  ))
  .add("level trace 5", () => (
    <LogRecord ts={new Date()} level="5" message="Log Message" />
  ));
