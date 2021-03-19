import React, { FC } from "react";
import ButtonPrimary from "./components/UIElements/ButtonPrimary";

const App: FC = () => {
  return (
    <div className="App">
      <div>Hello</div>
      <ButtonPrimary text={"See your orders"} />
    </div>
  );
};

export default App;
