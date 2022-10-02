import styled from "@emotion/styled";
import {
  Box,
  Card,
  CardContent,
  CardProps,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Dayjs } from "dayjs";

interface CreateEvenrCardProps {
	startTime: Dayjs | null;
	endTime: Dayjs | null;
	location: string;
	handleStartTime: (newValue: Dayjs | null) => void;
	handleEndTime: (newValue: Dayjs | null) => void;
	handleLocation: (event: SelectChangeEvent) => void;
}

const StyledCard = styled(Card)<CardProps>(({ theme }) => ({
	background: "#fff",
	borderRadius: "10px",
	padding: "16px 21px",
	textTransform: "capitalize",
	"@media (min-width: 1535px)": {},
}));

const CardWithContent = ({
	startTime,
	endTime,
	location,
	handleStartTime,
	handleEndTime,
	handleLocation,
}: CreateEvenrCardProps) => {
	return (
		<StyledCard variant="outlined">
			<CardContent>
				<Box
					sx={{
						width: "100%",
						height: "150px",
						border: "1px solid #E0E0E0",
						borderRadius: "3px",
						mb: 2,
						input: { visibility: "hidden" },
						img: { width: "100%", height: "100%", objectFit: "cover" },
					}}
					onClick={() => {}}
				>
					<img src="placeholder-image.png" />
					<input type={"file"} />
				</Box>
				<Box mt={2}>
					<TextField label="Event name" variant="standard" fullWidth size="medium" />
				</Box>
				<Box mt={2}>
					<TextField label="Host name" variant="standard" fullWidth size="medium" />
				</Box>
				<Box mt={2}>
					<FormControl variant="standard" fullWidth>
						<InputLabel id="location">Location</InputLabel>
						<Select labelId="location" value={location} onChange={handleLocation} label="location" fullWidth>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value={"Sydney"}>Sydney</MenuItem>
							<MenuItem value={"Perth"}>Perth</MenuItem>
							<MenuItem value={"Melbourne"}>Melbourne</MenuItem>
						</Select>
					</FormControl>
				</Box>
				<Box mt={2}>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<MobileDatePicker
							label="Start date/time"
							inputFormat="MM/DD/YYYY"
							value={startTime}
							onChange={handleStartTime}
							renderInput={(params) => <TextField variant="standard" fullWidth size="medium" {...params} />}
						/>
					</LocalizationProvider>
				</Box>
				<Box mt={2}>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<MobileDatePicker
							label="End date/time"
							inputFormat="MM/DD/YYYY"
							value={endTime}
							onChange={handleEndTime}
							renderInput={(params) => <TextField variant="standard" fullWidth size="medium" {...params} />}
						/>
					</LocalizationProvider>
				</Box>
			</CardContent>
		</StyledCard>
	);
};

export default CardWithContent;
