import _ from "lodash"

export function add(x: number, y: number): number {
  return _.add(x, y);
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  return a / b;
}
