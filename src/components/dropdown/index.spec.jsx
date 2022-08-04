import { render, unmountComponentAtNode, act } from "testing-library";

import Dropdown from "./Dropdown";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  const randomData = {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, tortor porta egestas maximus, leo eros hendrerit purus, et sollicitudin dui metus eget nisi.",
  };

  act(() => {
    render(
      <Dropdown header={randomData.title}>{randomData.content}</Dropdown>,
      container
    );
  });

  /** ISSUES WHILE CONFIG TESTS */
});
