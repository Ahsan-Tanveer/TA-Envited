import styled from '@emotion/styled';
import Button, { ButtonProps } from '@mui/material/Button';

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: 300,
  color: 'red'
}));

export default StyledButton;