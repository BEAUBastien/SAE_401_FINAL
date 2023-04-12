import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Footer() {
  return (
    <div className="footer">
      {/* Footer */}
      <Box component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          YuYu
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          © Web Application done by BEAU Bastien & SAINT-BLANCAT Keran.
        </Typography>
      </Box>
      {/* End footer */}
    </div>
  );
}
