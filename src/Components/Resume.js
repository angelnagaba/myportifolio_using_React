import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="public/images/Angie1.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Angel Nagaba</h2>
            <h4 style={{ color: "grey" }}>Software Developer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p>
              This is Angel Nagaba a thirs year student of BSC in
              Software Engineering Department at Makerere University. I liked to solve a new real world problem by coding.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Makerere University, Kampala</p>
            <h5>Phone</h5>
            <p>+256 778 930 647</p>
            <h5>Email</h5>
            <p>angelnagaba99@gmail.com</p>
            <h5>My Projects</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://github.com/angelnagaba"
            >
             Github
            </a>
            <h5>Download CV</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1c9XGU9Jl9RTGCWmyVIEl6tcAfsGCzk5f/view?usp=sharings"
            >
              My Update CV
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2021}
              schoolName={"Makerere University"}
              degreeName={"Bsc In Software Engineering"}
            />
             <Education
              startYear={2015}
              endYear={2016}
              schoolName={"Maryhill High School"}
              degreeName={"Uganda Advanced Certificate of Education"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={"2020"}
              endYear={"To Date"}
              jobName={"Software Developer"}
              jobDesc={"Eight Tech Consults"}
            />
           

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill={"Data Science"} progress={70} />
            <Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"ReactJS"} progress={50} />
            <Skills skill={"Django"} progress={70} />
            <Skills skill={"SQL Server"} progress={70} />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Leadership Experiences</h2>
            <h6>Vice President School of Computing Makerere University</h6>
            <h6>Campus Coordinator hult prize makerere</h6>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
