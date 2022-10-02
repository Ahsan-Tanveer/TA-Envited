import { Box, SelectChangeEvent, styled } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
import CreateEventCard from "../components/Card";
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
	font-weight: 300;
	margin-top: 1rem;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: 960px) {
		font-size: 1.5rem;
		line-height: 1.7rem;
		max-width: 520px;
	}

	@media (min-width: 1535px) {
		text-align: right;
	}
`;

function CreatePage() {
	const [startTime, setStartTime] = React.useState<Dayjs | null>(dayjs("2014-08-18T21:11:54"));

	const [endTime, setEndTime] = React.useState<Dayjs | null>(dayjs("2014-08-18T21:11:54"));

	const [location, setLocation] = React.useState("");

	const handleStartTime = (newValue: Dayjs | null) => {
		setStartTime(newValue);
	};

	const handleEndTime = (newValue: Dayjs | null) => {
		setEndTime(newValue);
	};

	const handleLocation = (event: SelectChangeEvent) => {
		setLocation(event.target.value);
	};

	return (
		<Box pt={8} px={3.5} sx={{ display: { xs: "block", xl: "flex" }, maxWidth: "1175px", mx: "auto" }}>
			<Box sx={{ width: { xs: "100%", xl: "50%" } }}>
				<Box sx={{ display: { xs: "none", xl: "flex" }, justifyContent: "center", alignItems: "center" }}>
					<CreateEventCard
						startTime={startTime}
						endTime={endTime}
						location={location}
						handleStartTime={handleStartTime}
						handleEndTime={handleEndTime}
						handleLocation={handleLocation}
					/>
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
					<MainHeading variant="h1" color={"primary.darker"}>
						<span>Let's create your</span>
						<GradientText>Event</GradientText>
					</MainHeading>

					<Description variant="body1" color={"neutral.main"}>
						Please take us about your event prefrences
					</Description>

					<Box
						sx={{
							display: { xs: "flex", xl: "none" },
							justifyContent: "center",
							img: { xs: { maxWidth: "165px" }, md: { maxWidth: "315px" } },
							mt: { xs: 4.5, md: 7 },
						}}
					>
						<CreateEventCard
							startTime={startTime}
							endTime={endTime}
							location={location}
							handleStartTime={handleStartTime}
							handleEndTime={handleEndTime}
							handleLocation={handleLocation}
						/>
					</Box>

					<Box sx={{ display: "flex", justifyContent: { xs: "center", xl: "flex-end" }, mt: { xs: 4, md: 7 }, mb: 4 }}>
						<GradientButton variant="contained" href="/event">
							Next
						</GradientButton>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default CreatePage;
