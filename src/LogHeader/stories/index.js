import { storiesOf } from "@storybook/react";
import LogHeader from "LogHeader";
import React from "react";

export default storiesOf("LogHeader", module)
  .addDecorator((fn) => <div style={{}}>{fn()}</div>)
  .add("default", () => <table><theader><LogHeader /></theader></table>);
