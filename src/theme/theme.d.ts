import "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface PaletteColor {
    darker?: string;
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }

  interface Palette {
    neutral?: PaletteColor;
  }
}