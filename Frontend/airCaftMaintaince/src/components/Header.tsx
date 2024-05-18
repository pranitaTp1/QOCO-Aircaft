import Typography from "@mui/material/Typography";
const Header = () => {
  return (
    <Typography
      variant="h4"
      component="h1"
      sx={{
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 10px",
      }}
    >
      AirCaft maintenance
    </Typography>
  );
};
export default Header;
