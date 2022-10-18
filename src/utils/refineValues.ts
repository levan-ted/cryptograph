import { IValue } from "../models";

export const refineValues = (
  valuesArray: { value: number; date: string }[]
) => {
  return valuesArray.map((valueObj) => {
    const dateObject = new Date(valueObj.date);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const valueInBillions = (valueObj.value / 1000000000).toFixed(2);
    return { value: valueInBillions, date: `${day}.${month}` };
  });
};
