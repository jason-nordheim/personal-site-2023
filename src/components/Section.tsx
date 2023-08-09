import { Paper, PaperOwnProps } from "@mui/material";
import { FC } from "react";

export const Section: FC<React.PropsWithChildren<PaperOwnProps & { id?: string }>> = ({ children, ...rest }) => {
  return (
    <Paper component="section" {...rest} sx={{ my: 2, px: 1, py: 2 }}>
      {children}
    </Paper>
  );
};
