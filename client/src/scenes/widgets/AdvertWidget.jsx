import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Promociones
        </Typography>
        <Typography color={medium}>Anuncio</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Moai</Typography>
        <Typography color={medium}>MoaisMerenquetengue.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Descubre la belleza y el misterio de las antiguas estatuas de isla de
        Pascua con nuestra amplia selección de MOAIS, la representación perfecta
        de la cultura polinesia en tu hogar.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
