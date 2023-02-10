import {
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Row } from "@/app/shared/styled";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

const steps = ["Candidaturas", "Notas ENEM", "Notas VHCE", "Resultado"];

const SelectiveProcessDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Button
        startIcon={<ArrowBackIosIcon />}
        variant="text"
        onClick={() => navigate(-1)}
        sx={{ mb: 2 }}
      >
        Voltar
      </Button>
      <Row alignItems="center" mb="30px">
        <TrackChangesIcon sx={{ height: 50, width: 50, mr: "15px" }} />
        <Typography variant="h2">Processo Seletivo UFG Inclui {id}</Typography>
      </Row>

      <Paper sx={{ p: "30px 20px", mb: "30px" }}>
        {/* TODO: Remove active step mock */}
        <Stepper activeStep={1}>
          {/* TODO: implement data consumption */}
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>

      {/* TODO: implement user action components */}
      <Typography>User Action Container</Typography>
    </>
  );
};

export default SelectiveProcessDetailsPage;
