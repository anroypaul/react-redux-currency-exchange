import React, { SyntheticEvent } from "react";
import { Button } from "semantic-ui-react";
import { BUY_MODE, SALE_MODE } from "../store/exchange/types";

interface ModeToggleProps {
  toggleMode(newMode: string): void;
}

export const ModeToggle: React.FC<ModeToggleProps> = ({ toggleMode }) => {
  const [mode, setMode] = React.useState("");

  const setBuyMode = (event: SyntheticEvent) => {
    toggleMode(BUY_MODE);
    setMode(BUY_MODE);
  };
  const setSellMode = (event: SyntheticEvent) => {
    toggleMode(SALE_MODE);
    setMode(SALE_MODE);
  };

  return (
    <>
      <Button.Group>
        <Button positive={mode === BUY_MODE} onClick={setBuyMode}>
          Купить
        </Button>
        <Button.Or />
        <Button positive={mode === SALE_MODE} onClick={setSellMode}>
          Продать
        </Button>
      </Button.Group>
    </>
  );
};
