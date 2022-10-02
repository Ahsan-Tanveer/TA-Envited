import { Box, styled } from "@mui/material";
import img from '../assets/Landing-page-image.svg';
import GradientButton from "../components/GradientButton";
import GradientText from "../components/GradientText";
import { H1, Paragraph } from "../components/Typography";

const MainHeading = styled(H1)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 41px;

  @media (min-width: 960px) {
    font-size: 4rem;
    line-height: 4rem;
  }

  @media (min-width: 1535px) {
    text-align: right;
    align-items: flex-end;
  }
`;

const Description = styled(Paragraph)`
  text-align: center;
  font-size: 1rem;
  line-height: 18px;
  font-Weight: 300;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 960px) {
    font-size: 1.5rem;
    line-height: 1.7rem;
    max-width: 520px;
  }

  @media (min-width: 1535px) {
    text-align: right
  }
`;

function LandingPage() {
  return (
    <Box pt={8} px={3.5} sx={{ display: { xs: 'block', xl: 'flex'}, maxWidth: '1175px', mx: 'auto' }}>
      <Box sx={{ width: { xs: '100%', xl: '50%' } }}>
        <Box sx={{ display: {xs: 'none', xl: 'flex'}, justifyContent: 'center', alignItems: 'center', img: { maxWidth: '440px' } }}>
          <img src={img} alt="Landing Page Image" />
        </Box>
      </Box>
      <Box sx={{ width: { xs: '100%', xl: '50%' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Box>
          <MainHeading variant="h1" color={'primary.darker'}>
            <span>Imagine if</span>
            <GradientText>Snapchat</GradientText>
            <span>had events.</span>
          </MainHeading>

          <Description variant="body1" color={'neutral.main'}>Easily host and share events with your friends across any social media.</Description>

          <Box sx={{ display: {xs: 'flex', xl: 'none'}, justifyContent: 'center', img: { xs: { maxWidth: '165px' }, md: {maxWidth: '315px'} }, mt: {xs: 4.5, md: 7} }}>
            <img src={img} alt="Landing Page Image" />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', xl: 'flex-end' }, mt: {xs: 4, md: 7}, mb: 4 }}>
            <GradientButton variant="contained" href="/create">
              🎉 Create my event
            </GradientButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}


export default LandingPage;
