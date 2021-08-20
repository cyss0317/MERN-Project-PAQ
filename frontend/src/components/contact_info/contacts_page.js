import React from 'react';
import cpCss from './contact_page.css'


class ContactsPage extends React.Component {

    render() {
        return(
            <div id='contact-container'>
                <h1 id='meet-dev'>Meet the Developers</h1>
                <div id="dev-pannel">
                    <div id='dev-profile'>
                        <img src="https://secure.gravatar.com/avatar/4266af08bec9e4706673fb334b6de5ef?secure=true&size=300" id="contact-photo"/>

                        <h2>Jaycee Magpusao</h2>
                        <h3>Frontend / Backend Asst.</h3>

                        <div id='dev-info'>
                            <a href="https://www.linkedin.com/in/jaycee-magpusao-profile/"><img
                                src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png" id='media-icon' />
                            </a>

                            <a href="https://github.com/JayceeMagpusao">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" id='media-icon'/>
                            </a>
                        </div>
                    </div>  
                    <div id='dev-profile'>
                        <img src="https://secure.gravatar.com/avatar/a8b887797352980aabc0c4cf4bd0b289?secure=true&size=300" id="contact-photo"/>

                        <h2>Oscar Vazquez</h2>
                        <h3>Team Lead</h3>

                        <div id='dev-info'>
                            <a href="https://www.linkedin.com/in/oscar-vazquez-650471165/"><img
                                src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png" id='media-icon' />
                            </a>

                            <a href="https://github.com/0skat">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" id='media-icon'/>
                            </a>
                        </div>
                    </div>  

                    <div id='dev-profile'>
                        <img className="https://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/006/485/medium/image_%281%29.png?1621974355" id="contact-photo1"/>

                            <h2>Yun sung Choi</h2>
                            <h3>Backend Lead</h3>

                        <div id='dev-info'>
                            <a href="https://www.linkedin.com/in/yun-sung-choi-936142214/"><img
                                src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png" id='media-icon' />
                            </a>

                            <a href="https://github.com/cyss0317">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" id='media-icon'/>
                            </a>
                        </div>
                    </div>  

                    <div id='dev-profile'>
                        <img src="https://secure.gravatar.com/avatar/ce465bf6dccbebff46c1b15fe3a253d7?secure=true&size=300" id="contact-photo"/>

                            <h2>John Angcla</h2>
                            <h3>Frontend Lead</h3>

                        <div id='dev-info'>
                            <a href="https://www.linkedin.com/in/john-angcla-1418a9213/"><img
                                src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png" id='media-icon' />
                            </a>

                            <a href="https://github.com/jangcla">
                                <img src="https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" id='media-icon'/>
                            </a>
                        </div>
                    </div>                      
                </div>

                
                
                
                
            </div>
        )
    }
}

export default ContactsPage;