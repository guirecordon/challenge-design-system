// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  lightgreen: "#E5FCC2",
  green: "#9DE0AD",
  blue: "#45ADA8",
  darkblue: "#547980",
  gray: "#594F4F"
};

// src/index.tsx
import { jsx } from "react/jsx-runtime";
function App() {
  return /* @__PURE__ */ jsx("h1", {
    style: { color: colors.darkblue },
    children: "Hello World"
  });
}
export {
  App
};
