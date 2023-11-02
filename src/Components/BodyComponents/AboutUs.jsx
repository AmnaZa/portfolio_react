import { Box, Container, Grid, Hidden, colors } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/About.jpeg";
import { RenderSectionHeading, CardMedia } from "../Common/commonComponent"
import AcUnitIcon from "@material-ui/icons/AcUnit";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import ToysIcon from "@material-ui/icons/Toys";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: "Full Stack Developer",
      description: "MongoDB (M), Express.js (E), React (R), Node.js (N).",
      icon: <DashboardIcon />,
      titleColor: "black", // Set title color to black
      descriptionColor: "#1769aa", // Set description color to #1769aa
    },
    {
      title: "Frontend Development",
      description: "HTML/CSS, Responsive Design, State Management, Component Libraries.",
      icon: <ToysIcon />,
      titleColor: "black", // Set title color to black
      descriptionColor: "#1769aa", // Set description color to #1769aa
    },
    {
      title: "Certification",
      description: "Introduction to Front-End Development(Meta), Crash Course on Python.(Google), Google IT Automation with Python Professional Certificate.(Google).",
      icon: <PermDeviceInformationIcon />,
      titleColor: "black", // Set title color to black
      descriptionColor: "#1769aa", // Set description color to #1769aa
    },
    {
      title: "Security",
      description: "User Authentication, Access Control. Agile Methodology: Agile Development.",
      icon: <AcUnitIcon />,
      titleColor: "black", // Set title color to black
      descriptionColor: "#1769aa", // Set description color to #1769aa
    },
  ];
  
  
  return (
    <Box className={classes.section} id='About'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
                <img
                  src={image}
                  alt='about us'
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              {RenderSectionHeading({
                smallText: "ABOUT ME",
                heading: "Hello I'm Amna Zahid",
                description: "A self-taught developer who loves to code !",
              })}
              <br />
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      label: item.title,
                      Desc: item.description,
                      Icon: item.icon,
                      titleColor: item.titleColor,
                      descriptionColor: item.descriptionColor,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
