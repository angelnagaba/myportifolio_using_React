import React, { Component } from "react";

class Aboutme extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', marginTop: '100px', width: '60%',
       background: 'gray', padding: '20px'}}>
        <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>Dev.Angel Nagaba</h1>
        <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>
        I am a third-year student of Bachelor of science in software Engineering at Makerere University and
passionate about data science, Machine Learning, Artificial Intelligence and research in these fields. I am
enthusiastic, proactive, altruistic, open-minded, ready to learn and result-oriented, I have a great
attachment to team-spirit and volunteering opportunities as well as community service. I am also
interested in Women empowerment programs and working towards enhancing female inclusion in the
Technology field 

        </p>
      </div>
    );
  }
}

export default Aboutme;
