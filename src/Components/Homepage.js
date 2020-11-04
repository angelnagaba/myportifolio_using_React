import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

//Below is a class component.
class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
            <img style={{height: '250px'}} src="public/images/Angie1.jpg" alt="avatar" />
            </div>
            <div className="banner-text">
              <h1>Dev Angel Nagaba</h1>
              <hr />
              <p>
                HTML | CSS | PYTHON | PHP | REACTJS |DJANGO |POSTGRESQL
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.facebook.com/nagaba.angel"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-facebook-official"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://twitter.com/AngelNagaba"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-twitter-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://github.com/angelnagaba"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/angel-nagaba-14552b192/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
