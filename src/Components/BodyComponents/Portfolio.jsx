import React from "react";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { RenderSectionHeading } from "../Common/commonComponent";
import { useStyles } from "./BodyStyles";
import ScrollAnimation from "react-animate-on-scroll";

const githubProjects = [
  {
    name: "react-redux-practice",
    description: "Description for react-redux-practice",
    url: "https://github.com/AmnaZa/react-redux-practice",
    thumbnail: require("../../images/P1.png"), // Replace with the path to your locally stored thumbnail image
  },
  {
    name: "YOGA",
    description: "Description for YOGA",
    url: "https://github.com/AmnaZa/YOGA",
    thumbnail: require("../../images/P2.png"), // Replace with the path to your locally stored thumbnail image
  },
  {
    name: "CaptainsLog",
    description: "Description for CaptainsLog",
    url: "https://github.com/AmnaZa/CaptainsLog",
    thumbnail: require("../../images/P3.png"), // Replace with the path to your locally stored thumbnail image
  },
  {
    name: "muscle-world",
    description: "Description for muscle-world",
    url: "https://github.com/AmnaZa/muscle-world",
    thumbnail: require("../../images/P4.png"), // Replace with the path to your locally stored thumbnail image
  },
  {
    name: "Connect4",
    description: "Description for Connect4",
    url: "https://github.com/AmnaZa/Connect4",
    thumbnail: require("../../images/P5.png"), // Replace with the path to your locally stored thumbnail image
  },
  {
    name: "SlideGame",
    description: "Description for SlideGame",
    url: "https://github.com/AmnaZa/SlideGame",
    thumbnail: require("../../images/P6.png"), // Replace with the path to your locally stored thumbnail image
  },
];

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Box className={classes.sectionDark} id="Portfolio">
      <ScrollAnimation animateIn="fadeIn">
        <Grid container style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
          <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
              smallText: "Portfolio",
              heading: "Let's See My Work",
              alignCenter: true,
            })}
          </Grid>
        </Grid>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {githubProjects.map((project, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}>
                  <img src={project.thumbnail} alt={project.name} className={classes.responsiveImg} />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>{project.name}</Typography>
                    <Typography className={classes.overlayDescription}>{project.description}</Typography>
                    <Button variant="contained" href={project.url} target="_blank" rel="noopener noreferrer">
                      Visit
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
