import { FC, useState, VFC } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Members from "containers/pages/Members";

const App: FC = () => <Members enablePrefetch={false} />;

export default App;
