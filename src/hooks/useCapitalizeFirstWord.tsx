import * as React from "react";

export interface IUseCapitalizeFirstWordProps {}

export function UseCapitalizeFirstWord(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
