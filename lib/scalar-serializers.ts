type ArraySerializable = string | number;

export const arrayToLiteral = (xs: ArraySerializable[]) =>
  `{${xs.map((x) => JSON.stringify(x)).join(',')}}`;
