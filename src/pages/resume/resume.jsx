import { Grid, Icon, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import "./resume.css";
import Data from "../../utilites/data";
import {
  CustomTimeline1,
  Custom,
  Custom1,
} from "../../Components/timeline/timeline";
import WorkIcon from "@material-ui/icons/Work";
import Timeline from "@material-ui/lab/Timeline";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import SchoolIcon from "@material-ui/icons/School";
import CustomButton from "../../Components/button/button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../App.css";

export default function Resume() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="body">
      <Grid container className="section pb-45">
        <Grid item className="section_title mb-30">
          <span></span>
          <h6 className="section_title_text">About me</h6>
        </Grid>
        <Grid item xs={12} data-aos="fade-down">
          <Typography variant="h">{Data.about}</Typography>
        </Grid>
      </Grid>

      <Grid container className="section  pb-45">
        <Grid item className="section_title mb-30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item sm={12} md={6} data-aos="fade-right">
              <Custom icon={<WorkIcon></WorkIcon>} title=" Experince"></Custom>
            </Grid>
            <Grid item sm={12} md={6} data-aos="fade-left">
              <Custom1
                icon={<SchoolIcon></SchoolIcon>}
                title="Education"
              ></Custom1>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="section  pb-45 p-50">
        <Grid item xs={12}>
          <Grid item>
            <Grid item className="section_title mb-30">
              <span></span>
              <h6 className="section_title_text">My Skills</h6>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            data-aos="zoom-in"
            spacing={3}
          >
            {Data.skills.map((skils) => (
              <Grid item xs={12} sm={6} md={3}>
                <Grid className="skill">
                  <Typography className="skill_title">{skils.title}</Typography>
                  {skils.descroption.map((element) => (
                    <Typography varient="body2" className="skil-description">
                      <TimelineDot
                        varient={"outlined"}
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={7}>
        <Grid container className="section pt-45 pb-45">
          <Grid item>
            <Grid item className="section_title mb-30">
              <span></span>
              <h6 className="section_title_text">Contact form</h6>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="name" label="name"></TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="Email" label="Email"></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="message"
                  multiline
                  rows={4}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <CustomButton text="submit" href="#"></CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
