import { Box, styled } from "@mui/material";
import { H1, Paragraph } from "../components/Typography";

const MainHeading = styled(H1)`
	font-weight: 700;
	font-size: 2.25rem;
	line-height: 41px;

	@media (min-width: 960px) {
		font-size: 4rem;
		line-height: 4rem;
	}

	@media (min-width: 1535px) {
		text-align: left;
		align-items: flex-end;
	}
`;

const Description = styled(Paragraph)`
	text-align: left;
	font-size: 1rem;
	line-height: 18px;
	font-weight: 300;
	margin-top: 1rem;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: 960px) {
		font-size: 1.5rem;
		line-height: 1.7rem;
	}

	@media (min-width: 1535px) {
		text-align: left;
	}
`;

function EventPage() {
	return (
		<Box
			pt={{ xs: 0, xl: 8 }}
			px={{ xs: 0, xl: 3.5 }}
			sx={{
				display: { xs: "block", xl: "flex" },
				flexDirection: { xs: "unset", xl: "row-reverse" },
				maxWidth: { xs: "590px", xl: "1170px" },
				mx: "auto",
			}}
		>
			<Box sx={{ width: { xs: "100%", xl: "50%" } }}>
				<Box
					sx={{
						display: { xs: "none", xl: "flex" },
						justifyContent: "center",
						alignItems: "center",
						img: { maxWidth: "440px" },
					}}
				>
					<img src={"Birthday cake.png"} alt="Landing Page Image" />
				</Box>
			</Box>
			<Box
				sx={{
					width: { xs: "100%", xl: "50%" },
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Box width={"100%"}>
					<Box
						sx={{
							display: { xs: "flex", xl: "none" },
							justifyContent: "center",
							img: { width: "100%" },
							mt: { xs: 0, md: 7 },
						}}
					>
						<img src={"Birthday cake.png"} alt="Landing Page Image" />
					</Box>

					<Box p={{ xs: 2.5, md: "20px 0" }}>
						<MainHeading variant="h1" color={"primary.darker"}>
							<span>Birthday Bash</span>
						</MainHeading>

						<Description variant="body1" color={"neutral.main"}>
							Hosted by <strong>Elysia</strong>
						</Description>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default EventPage;
