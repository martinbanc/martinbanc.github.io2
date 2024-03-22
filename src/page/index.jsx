import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='nav'>
        <div className='navbar'>
          <a href="#skills" className='skills'>Skills</a>
          <div className='link'>
            <div className='gears-svgrepo-com'>
              <div className='group'>
                <div className='bigg'>
                  <div className='vector' />
                  <div className='group-1'>
                    <div className='big-gear' />
                  </div>
                </div>
                <div className='small'>
                  <div className='vector-2' />
                  <div className='group-3'>
                    <div className='small-gear' />
                  </div>
                </div>
              </div>
            </div>
            <a href="#projects" className='projects'>Projects</a>
          </div>
               <a href="#contact-me" className='contact-me'>Contact Me</a>
        </div>
      </div>
      <div className='top'>
        <div className='developer-details'>
          <div className='software-developer'>
            <span className='hi'>Hi👋, I’m </span>
            <span className='a'>
              a<br />
            </span>
            <span className='software-developer-4'>software developer</span>
          </div>
          <div className='developer-description'>
            <span className='im'>I’m </span>
            <span className='martin-bancroft'>Martin Bancroft</span>
            <span className='im-5'>
              , Recent Software Engineering graduate of the Skill City Software Engineer Bootcamp, eager to leverage my technical skills and passion for software development in a dynamic and innovative environment. I possess a strong foundation in building responsive web applications using HTML, CSS, React, and APIs. My proficiency in databases like MySQL and Microsoft SQL Server makes me a valuable asset for data-driven projects.
I'm excited to contribute my fresh perspective and technical abilities to a team that shares my passion for innovation.
            </span>
          </div>
          <button className='hire-me-button'>
            <a href="src\assets\Martin's CV.pdf" download>
              <span className='hire-me'>My CV</span>
            </a>
          </button>
        </div>
        <div className='picture'>
          <div className='flex-row'>
            <div className='plus' />
            <div className='cube'>
              <div className='line' />
              <div className='polygon' />
              <div className='line-6' />
              <div className='line-7' />
            </div>
          </div>
          <div className='flex-row-cb'>
            <div className='zigzags' />
            <div className='sample-user' />
            <div className='circles'>
              <div className='frame'>
                <div className='ellipse' />
                <div className='ellipse-8' />
                <div className='ellipse-9' />
                <div className='ellipse-a' />
                <div className='ellipse-b' />
              </div>
              <div className='frame-c'>
                <div className='ellipse-d' />
                <div className='ellipse-e' />
                <div className='ellipse-f' />
                <div className='ellipse-10' />
                <div className='ellipse-11' />
              </div>
              <div className='frame-12'>
                <div className='ellipse-13' />
                <div className='ellipse-14' />
                <div className='ellipse-15' />
                <div className='ellipse-16' />
                <div className='ellipse-17' />
              </div>
            </div>
            <div className='ellipse-18' />
          </div>
        </div>
      </div>
      <div className='projects-section' id='projects'>
        <div className='frame-19'>
          <div className='projects-title'>
            <div className='gears-svgrepo-com-1a'>
              <div className='group-1b'>
                <div className='group-1c'>
                  <div className='group-1d' />
                </div>
              </div>
            </div>
            <span className='projects-1e'>Projects</span>
          </div>
          <span className='select-projects'>A select number of projects</span>
        </div>
        <div className='projects-container'>
          <div className='project'>
            <div className='rectangle' />
            <div className='text'>
              <span className='social-media-template'>
                Made a social media manager template using HTML 5, CSS and JS.
              </span>
            </div>
            <a href="https://github.com/martinbanc/social-media-temp.git" target="_blank" rel="noopener noreferrer">
            <button className='button'>
              <span className='learn-more'>Learn More</span>
              <div className='arrow'>
                <div className='vector-1f' />
              </div>
            </button>
            </a>
          </div>
          <div className='challenge'>
            <div className='rectangle-20' />
            <div className='frame-21'>
              <span className='simple-card-page'>
                A texted based adventure game using Python.
              </span>
            </div>
            <a href="https://github.com/martinbanc/textBased_game" className='button-22'>
            
              <span className='learn-more-23'>Learn More</span>
              <div className='arrow-24'>
                <div className='vector-25' />
              </div>
    
            </a>
          </div>
          <div className='challenge-26'>
            <div className='rectangle-27' />
            <div className='frame-28'>
              <span className='ip-tracking-website'>
                Made an I.P address tracking website.
              </span>
            </div>
            <a href="https://github.com/martinbanc/IP_Tracker.git" target="_blank" rel="noopener noreferrer">
            <button className='button-29'>
              <span className='learn-more-2a'>Learn More</span>
              <div className='arrow-2b'>
                <div className='vector-2c' />
              
              </div>

              
            </button>
            </a>
          </div>
          
        </div>
        
      </div>
      <div className='contact-me-section' id='contact-me'></div>
      <div className='contact-section' id='contact'>
        <span className='contact-me-2d'>Contact me</span>
        <div className='contact'>
          <div className='man-standing-chats' />
          <div className='form'>
            <div className='input-box'>
              <input style={{width: '100%', height: '100%'}} type='email' className='enter-email-address' placeholder='Enter email address' />
            </div>
            <div className='input-box-2e'>
              <textarea style={{width: '100%', height: '100%'}} className='enter-message' placeholder='Enter message...'></textarea>
            </div>
            <button className='btn'>
              <span className='send-message'>Send Message</span>
              <div className='paper-plane' />
            </button>
          </div>
        </div>
      </div>
      <div className='footer-content'>
        <div className='socials'>
          <span className='social-media-links'>My social media links:</span>
          <div className='social-media'>
            <a href="https://www.linkedin.com/in/martin-bancroft/" target="_blank" rel="noopener noreferrer">
              <div className='linkedin-svgrepo-com'>
                <div className='vector-2f' />
              </div>
            </a>
            <div className='whatsapp-svgrepo-com' />
            <div className='twitter-svgrepo-com'>
              <div className='group-30'>
                <div className='vector-31' />
              </div>
            </div>
            <a href="mailto:martinban12@gmail.com">
              <div className='gmail-svgrepo-com' />
            </a>
          </div>
        </div>
        <div className='github'>
          <span className='more-projects'>More projects I’ve worked on</span>
          <div className='github-32'>
            <div className='github-svgrepo-com'>
              <div className='svgcleanerid' />
              <div className='group-33'>
                <div className='svgcleanerid-34' />
              </div>
              <div className='vector-35' />
              <div className='group-36'>
                <div className='vector-37' />
                <div className='vector-38' />
              </div>
              <div className='vector-39' />
              <div className='vector-3a' />
              <div className='vector-3b' />
            </div>
            <div className='martinbanc-on-github'>
              <span className='at'>@</span>
              <span className='martinbanc'>martinbanc</span>
              <span className='at-3c'> on github</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg' />
      <div className='skills-section' id='skills'></div>
      <div className='skills-section' id='skills'>
        <span className='skills-3d'>Skills</span>
        <div className='group-3e'>
          <div className='text-skills'>
            <span className='vast-experience'>
              I have a vast experience in the following web technologies:
            </span>
            <div className='skills-container' style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}></div>
            <div className='skills-3f'>
              <div className='skill'>
                <div className='group-40'>
                  <div className='html-logo-svgrepo-com' />
                  <div className='polygon-41' />
                </div>
                <span className='html'>HTML 5</span>
              </div>
              <div className='css'>
                <div className='group-42'>
                  <div className='css-logo-svgrepo-com' />
                  <div className='polygon-43' />
                </div>
                <span className='css-44'>CSS3</span>
              </div>
              <div className='python'>
                <div className='group-45'>
                  <div className='js-lo' />
                  <div className='polygon-46' />
                </div>
                <span className='javascript'>JavaScript</span>
              </div>
              
              <div className='python'>
                <div className='group-47'>
                  <div className='polygon-48' />
                  <div className='python-logo-svgrepo-com' />
                </div>
                <span className='python-49'>Python</span>
              </div>
              <div className='python'>
                <div className='group-47'>
                  <div className='polygon-48' />
                  <div className='react-logo-svgrepo-com' />
                </div>
                <span className='python-49'>React</span>
              </div>
            </div>
          </div>
          <div className='undraw-project-completed-woq' />
        </div>
      </div>
      <div className='blob-vector' />
      <div className='wave' />
    </div>
  );
}
