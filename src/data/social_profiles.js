import SocialProfileModel from "./social_profile_model";
import emailIcon from '../assets/email_icon.png';
import githubIcon from '../assets/github_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';
import twitterIcon from '../assets/twitter_icon.png';

const SOCIAL_PROFILES = [
    new SocialProfileModel(1, 'haseebzafar.dev@gmail.com', emailIcon),
    new SocialProfileModel(2, 'https://github.com/seeebbii', githubIcon),
    new SocialProfileModel(3, 'https://www.linkedin.com/in/haseeb-zafar-a79a9421a/', linkedinIcon),
    new SocialProfileModel(4, 'https://twitter.com/Seeeebbii', twitterIcon),
]

export default SOCIAL_PROFILES;