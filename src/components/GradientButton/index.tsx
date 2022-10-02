import styled from '@emotion/styled';
import Button, { ButtonProps } from '@mui/material/Button';

const GradientButton = styled(Button)<ButtonProps>(({ theme }) => ({
  minWidth: '150px',
  background: 'linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)',
  borderRadius: '10px',
  padding: '16px 21px',
  fontFamily: 'Helvetica',
  fontWeight: 700,
  fontSize: '1rem',
  textTransform: 'capitalize',
  '@media (min-width: 1535px)': {
    padding: '16px 70px',
  },
}));

export default GradientButton;