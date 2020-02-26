import React from "react"
import LazyHero from "react-lazy-hero"
import { Typography, Paper, Grid } from "@material-ui/core"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

import "../pages/index.css"

const HomePage = () => {
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
          opacity="0.9"
        >
          <h3>HEY THERE. MY NAME IS RYAN HARRIS.</h3>
          <br></br>
          <h1 id="pt1">I AM A FULL STACK DEVELOPER.</h1>
          <Typography id="paragraph" component="subtitle1">
            Artistically-trained web developer with innovative and creative
            approaches to problem solving.
          </Typography>
          <br></br>
          <Typography id="paragraph" component="subtitle1">
            Passionate about UI/UX with a forward-thinking consideration for the
            end user.
          </Typography>
          <br></br>
          <Typography id="paragraph" component="subtitle1">
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
          <Grid container wrap="nowrap" spacing={3} style={{paddingRight: "25%"}}>
              <Typography variant="h4" style={{margin: "25px", textAlign: "justify"}}>OBJECTIVE</Typography>
              <Typography variant="body1" style={{margin: "25px", textAlign: "justify"}}>I am a Front-End Web Developer leveraging a background in Fine Arts to build a unique and refreshing user experience. While earning a certificate in Full Stack Development from the University of Texas-Austin, I developed skills in HTML, CSS, JavaScript, and responsive web design. Being a conceptual artist with experience in sales and marketing, I have a history of communication and relationship-building, paired with a creative and agile approach to challenges. With each project, my aim is to best engage my audience for an impactful and dynamic user-experience. I am excited to apply these skills as part of a fast-paced, quality-driven team in order to build better experiences for our users!</Typography>
          {/* Page Title */}
          <Grid item container justify="center" id="titleCell">
          <img src="../images/portrait.jpg" alt="portrait of Ryan Harris"></img>
          </Grid>

          {/* Cards */}
          <Grid item container spacing={2}>
                <Grid item xs={2}>  
                efcdmns
                </Grid>
          </Grid>
          </Grid>
        </Paper>
        </div>
      </div>
  // </div>
  )
}

export default HomePage
