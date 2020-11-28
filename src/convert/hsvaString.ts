import { RgbaColor } from "../types";
import { rgbaToHsva } from "./hsva";

export const rgbaToHsvaString = (rgba: RgbaColor): string => {
  const { h, s, v, a } = rgbaToHsva(rgba);
  return `hsva(${h}, ${s}%, ${v}%, ${a})`;
};
