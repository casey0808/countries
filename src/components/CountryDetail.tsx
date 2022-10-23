import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Card, Container, Grid } from "@mui/material";
import { ArrowBack, SentimentNeutral } from "@mui/icons-material";
import { EMApis, IItem } from "../constants";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useMemo, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const countryList = localStorage.getItem("countryList")
    ? JSON.parse(localStorage.getItem("countryList") || "{}")
    : [];

  const initialDetail =
    countryList?.find((country: IItem) => country?.name?.common === id) || {};
  const [detail, setDetail] = useState(initialDetail) as any;

  const getDetail = async () => {
    const url = `${EMApis.COUNTRY_DETAIL}/${id}?fullText=true`;
    const res = await (await fetch(url)).json();
    console.log(res[0]);
    setDetail(res[0]);
  };
  console.log("detail:", detail);

  useEffect(() => {
    if ((id && !initialDetail) || JSON.stringify(initialDetail) === "{}") {
      getDetail();
    }
  }, [id, initialDetail]);

  const nativeName = useMemo(() => {
    const nativeNameObj = detail?.name?.nativeName;
    const nameObj =
      Object.values(nativeNameObj) && Object.values(nativeNameObj)?.length
        ? Object.values(nativeNameObj)[0]
        : ({} as any);
    return nameObj?.official || "";
  }, [detail]);

  return (
    <Box sx={{ flexGrow: 1, flexWrap: 'wrap' }}>
      <Toolbar>
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          sx={{
            color: "black",
            borderColor: "transparent",
            width: 150,
            boxShadow: "2px 2px 2px 2px lightgray",
            marginLeft: 6,
            marginTop: 6,
            marginBottom: 5,
          }}
          onClick={() => window.close()}
        >
          Back
        </Button>
      </Toolbar>
      <Grid
        container
        columnSpacing={1}
        alignItems="center"
        justifyContent="flex-start"
        sx={{ padding: 9 }}
      >
        <Grid item xs={11} sm={6} md={6}>
          <img
            src={detail?.flags?.png}
            loading="lazy"
            width={560}
            height={400}
          />
        </Grid>
        <Grid item xs={11} sm={6} md={6}>
          <Card
            sx={{ width: 650, height: 400, border: "none", boxShadow: "none" }}
          >
            <CardContent sx={{ margin: "10px auto" }}>
              <Typography sx={{ fontSize: 30, fontWeight: 800 }} gutterBottom>
                {detail?.name?.official}
              </Typography>

              <Grid container rowSpacing={2}>
                <Grid item xs={6}>
                  <b>Native Name: </b> {nativeName}
                </Grid>
                <Grid item xs={6}>
                  <b>Top Level Domain: </b> {detail?.tld[0]}
                </Grid>

                <Grid item xs={6}>
                  <b>Population: </b> {detail?.population}
                </Grid>
                <Grid item xs={6}>
                  <b>Currencies: </b>{" "}
                  {detail?.currencies && Object.keys(detail?.currencies)[0]}
                </Grid>

                <Grid item xs={6}>
                  <b>Region: </b> {detail?.region}
                </Grid>
                <Grid item xs={6}>
                  <b>Languages: </b>{" "}
                  {detail?.languages &&
                    Object.values(detail?.languages).toString()}
                </Grid>

                <Grid item xs={12}>
                  <b>Sub Region: </b> {detail?.subregion}
                </Grid>
                <Grid item xs={12}>
                  <b>Capital: </b> {detail?.capital[0]}
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{ marginLeft: 1, flexWrap: 'wrap', rowGap: 2}}>
              <b>Border Countries: </b>
              {detail?.borders && detail?.borders?.length ? (
                detail?.borders?.map((border: string) => {
                  const borderObj = countryList?.find(
                    (country: IItem) =>
                      country.cioc === border || country.cca3 === border
                  );

                  const borderName = borderObj?.name?.common;
                  const url = `/country/${borderName}`;

                  return (
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        color: "black",
                        borderColor: "transparent",
                        width: 'max-content',
                        boxShadow: "2px 2px 2px 2px hsl(0, 0%, 88%)",
                        marginLeft: "10px",
                        textTransform: 'none',
                        fontSize: '14px'
                      }}
                      to={url}
                      component={Link}
                      target="_blank"
                    >
                      {borderName}
                    </Button>
                  );
                })
              ) : (
                <>
                  <SentimentNeutral sx={{ margin: "0 10px" }} /> No border
                  countries...
                </>
              )}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Detail;
