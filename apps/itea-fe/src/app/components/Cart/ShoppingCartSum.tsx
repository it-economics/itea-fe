import {Typography} from "@mui/material";
import {FC} from "react";

export interface TotalSum {
  sum: number;
}

export const ShoppingCartSum: FC<TotalSum> = ({sum}) => (
  <Typography>
    <h1><b>Total: {sum} &#8364;</b></h1>
  </Typography>
)
