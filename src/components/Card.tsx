import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export interface IItem {
  flags: {
    png: string;
  };
  name: {
    official: string;
  };
  population: number;
  region: string;
  capital: Array<string>;
}

export default function ActionAreaCard(country: IItem) {
  return (
    <Card sx={{ maxWidth: 340, width: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={country.flags.png}
          alt="green iguana"
        />
        <CardContent sx={{marginBottom: 2}}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontSize: 20,
              fontWeight: 600,
              margin: "10px auto 14px auto",
            }}
          >
            {country.name.official}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ color: "black", fontWeight: 500 }}
              component="span"
            >
              Population:{" "}
            </Typography>
            {country.population}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ color: "black", fontWeight: 500 }}
              component="span"
            >
              Region:{" "}
            </Typography>
            {country.region}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Typography
              sx={{ color: "black", fontWeight: 500 }}
              component="span"
            >
              Capital:{" "}
            </Typography>
            {country.capital?.[0]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
