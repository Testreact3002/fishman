import "./index.css";
import { Button } from "@storybook/react/demo";
import { storiesOf } from "@storybook/react";
import LogHeader from "LogHeader/stories/";
import LogRecord from "LogRecord/stories/";
import React from "react";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
