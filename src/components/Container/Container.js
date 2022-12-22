import { Box } from "@mui/material";

const styles = {
  maxWidth: 'calc(1220px + 2rem)',
  width: '100%',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  marginLeft: 'auto',
  marginRight: 'auto',
};

export const Container = ({ children, sx = {}, ...rest }) => (
  <Box sx={{ ...styles, ...sx }} {...rest}>{children}</Box>
)
