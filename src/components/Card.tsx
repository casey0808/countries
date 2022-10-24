import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IItem } from "../constants";

export default function ActionAreaCard(country: IItem) {
  const url = `/countries/${country.name.common}`;

  return (
    <Card sx={{ maxWidth: 300, width: 280, height: 380, flexWrap: 'wrap' }}>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          component="img"
          height="160"
          width="100%"
          image={country.flags.png}
        />
        <CardContent sx={{ marginBottom: 2 }}>
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
          <Typography variant="body2" color="text">
            <b>Population: </b>
            {country.population.toLocaleString('en-US')}
          </Typography>
          <Typography variant="body2" color="text">
            <b>Region: </b>
            {country.region}
          </Typography>
          <Typography variant="body2" color="text">
            <b>Capital: </b>
            {country.capital?.[0]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
