import React, { ChangeEvent } from "react";
import {
  Segment,
  Header,
  Divider,
  Form,
  Dropdown,
  DropdownItemProps,
  Input,
} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { CurrencyExchangeState } from "../store/exchange/types";
import { toggleModeAction } from "../store/exchange/actions";
import { ModeToggle } from "./ModeToggle";
import { RootState } from "../store";

const currencyOptions: DropdownItemProps[] = [
  { key: 1, text: "UAH", value: "UAH" },
  { key: 2, text: "USD", value: "USD" },
  { key: 3, text: "EUR", value: "EUR" },
  { key: 4, text: "RUB", value: "RUB" },
  { key: 5, text: "BTC", value: "BTC" },
];

export const Exchange = () => {
  const currentCurrency = useSelector<
    RootState,
    CurrencyExchangeState["currentCurrency"]
  >((state) => state.currencyExchangeReducer.currentCurrency);

  // const selectCurrentCurrency = (state: CurrencyExchangeState) => state.currencyExchangeReducer.currentCurrency
  // const currentCurrency = useSelector(selectCurrentCurrency)

  console.log(currentCurrency); // undefined
  const dispatch = useDispatch();

  const [sum, setSum] = React.useState("");
  const updateSum = (event: ChangeEvent<HTMLInputElement>) => {
    setSum(event.target.value);
  };

  const onToggleMode = (newMode: string) => {
    dispatch(toggleModeAction(newMode));
    console.log(dispatch);
  };

  return (
    <Segment>
      <Header fluid as="h3">
        Currency Exchange : {currentCurrency}
      </Header>
      <Form>
        <Form.Group widths="equal">
          <Form.Field>
            <ModeToggle toggleMode={onToggleMode} />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <Input
            onChange={updateSum}
            value={sum}
            type="number"
            label={
              <Dropdown
                defaultValue={currentCurrency}
                options={currencyOptions}
              />
            }
            labelPosition="right"
          />
        </Form.Field>
        <Divider />
        <Form.Field>
          <Form.Input fluid label="USD" />
        </Form.Field>
        <Form.Field>
          <Form.Input fluid label="EUR" />
        </Form.Field>
        <Form.Field>
          <Form.Input fluid label="RUB" />
        </Form.Field>
      </Form>
    </Segment>
  );
};

export default Exchange;
