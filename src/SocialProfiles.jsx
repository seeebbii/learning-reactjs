import React, { Component } from "react";
import PropTypes from "prop-types";
import SOCIAL_PROFILES from "./data/social_profiles";

class SocialProfile extends Component {
  static propTypes = {
    profile: PropTypes.object,
  };

  validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  render() {
    const { link, image } = this.props.profile;

    return (
      <div style={{ display: "inline-block" }}>
        <a href={ this.validateEmail(link) ? "mailto:" + link : link} target="_blank" rel="noreferrer">
          <img
            src={image}
            alt="another_text"
            style={{ widht: "50px", height: "50px", margin: "5px" }}
          />
        </a>
      </div>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2>Connect with me!</h2>
        <div>
          {SOCIAL_PROFILES.map((profile, index) => {
            return <SocialProfile key={index} profile={profile} />;
          })}
        </div>
      </div>
    );
  }
}

export default SocialProfiles;
