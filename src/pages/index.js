import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import LazyHero from "react-lazy-hero"
import { Paper, Grid } from "@material-ui/core"
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

import './index.css'

const useStyles = makeStyles(theme => ({
  root: {
    
  },
  paper: {

  },
}));

const HomePage = () => {
  const classes = useStyles();
  
  return (
    <div className="global">

    {/* LANDING PAGE */}
      <div className="section1">
        <LazyHero
          imageSrc="https://picsum.photos/id/201/2000/1000/?blur=10"
          minHeight="100vh"
          color="#000000"
          parallaxOffset="100"
          id="lazyhero"
          opacity="0.75"
        >
          <h3 className="title">
            HEY THERE. MY NAME IS RYAN HARRIS.
          </h3>
          <div>
          <h1 id="pt1">I AM A <div id="pt2">FULL STACK</div> DEVELOPER.</h1>
          </div>
          <Typography id="paragraph" component="subtitle1" className="title">
            Artistically-trained web developer with innovative and creative
            approaches to problem solving.
          </Typography>
          <br></br>
          <Typography id="paragraph" component="subtitle1" className="title">
            Passionate about UI/UX with a forward-thinking consideration for the
            end user.
          </Typography>
          <br></br>
          <Typography id="paragraph" component="subtitle1" className="title">
            Experienced in direct sales, relationship-building, listening, and
            self-awareness.
          </Typography>
          <br></br>
          <LinkedInIcon href="http://www.linkedin.com.ryanharrishtx"
            style={{ color: "white", fontSize: 75, margin: "5px" }}
          />
          <GitHubIcon style={{ color: "white", fontSize: 75, margin: "5px" }} />
          <div class="scroll-downs">
            <div class="mousey">
              <div class="scroller"></div>
            </div>
          </div>
        </LazyHero>
      </div>

      {/* ABOUT ME SECTION */}
      <div className="section2">
        <Paper style={{ width: "100%", height: "100vh" }}>
          <Typography
            variant="h1"
            style={{
              color: "black",
              textAlign: "center",
              fontWeight: "bold",
              paddingTop: "15px"}}>
              ABOUT ME
          </Typography>
          {/* Page Content */}
          <div className={classes.grid}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={6}>
                <img src="../images/ryan.jpg" alt="portrait of Ryan Harris"></img>
              </Grid>
            </Grid>
          </div>
        </Paper>
        </div>
      </div>
  // </div>
  )
}

export default HomePage
