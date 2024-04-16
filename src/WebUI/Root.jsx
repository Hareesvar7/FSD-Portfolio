import React from 'react'
import '../App.css';
import Typed from 'react-typing-effect';
import { Row, Col, Container } from 'react-bootstrap';
import { GitHub,LinkedIn, ArrowRightAltOutlined } from '@mui/icons-material';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import EmailIcon from '@mui/icons-material/Email';
import { LinearProgress } from '@mui/material'
import RGP from '../components/assets/img/RGP.jpg'
import ParticleContainer from '../components/Animation'
import { Parallax } from 'react-parallax';
import Footer from '../components/Footer';
import ResumeBG from '../components/assets/img/resumeBg2.jpg'
import RESUME from '../components/assets/Resume/HARIHARAN(FSD_RESUME).pdf'

function Root() {

  return (
    <>
      <ParticleContainer />
      <div className='Root'>
        <div className='Non-parallex'>
          <div className='heroImg'></div>
          {/******************************* TOP CONTAINER *************************************/}
          <div className="Hero d-flex flex-column justify-content-center">
            <div className='HeroBG'>

              <div className="container profileName">
                <h1>Hariharan N</h1>
                <Typed
                  className='typed-text'
                  text={["MERN Developer", "Web Developer"]}
                  speed={100}
                  eraseSpeed={100}
                />
                <div className="social-links">
                  <a href="https://github.com/Hareesvar7" target='blank'><GitHub /> </a>
                  <a href="https://www.linkedin.com/in/hareesvar7/" target='blank'><LinkedIn /> </a>
                  <a href="https://drive.google.com/drive/folders/1-mdIY3MTyVwrSsWy2gKeE2fOboM-giUt?usp=drive_link" target='blank'><FilePresentIcon/> </a>
                  <a href="mailto:hareesvar10@gmail.com"><EmailIcon /></a>
                </div>
                <div data-aos="zoom-in-down" className='scrolldown'>
                  <div class="mouse_scroll">
                    <div class="mouse">
                      <div class="wheel"></div>
                    </div>
                    <div>
                      <span class="m_scroll_arrows unu"></span>
                      <span class="m_scroll_arrows doi"></span>
                      <span class="m_scroll_arrows trei"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/******************************* ABOUT *************************************/}

          <div id="About" className="about py-5 my-5">
            <div className="container">
              <div className="RGTitle">
                <h2>About</h2>
                <div className='RGPic'>
                  <div>
                    <div class="outer-circle">
                      <div class="inner-circle">
                        <img src={RGP} alt='none' />
                      </div>
                    </div>
                  </div>
                </div>
                <p>Hey..!! I'm Hariharan </p>
              </div>
              <div >
                <div className="text-center content">
                  <div></div>
                  <h3> MERN Developer</h3>
                  <br />
                  <p>I  pursued computer science and engineering at "Amrita University,Coimbatore". Throughout my academics, I have had the opportunity to develop my skills and work experience, which have given me valuable experience and insights into web application Deveploment. I'm passionate about creating initiative and engaging user experiences through web design and development. I am always eager to learn new things and to take on new challenges, and I'm always looking for new challenges and stay up-to-date with the latest trends and technologies. I'm passionate about implementing my skills and experience to lead a healthy mission.</p>
                  <div data-aos="zoom-in" className='contentId my-5 d-flex align-item-center justify-content-around'>
                    <ul>
                      <li><strong>Birthday:</strong><p>12 May 2002</p></li>
                      <li><strong>Phone No:</strong><p>+91 9360357376</p></li>
                    </ul>
                    <ul>
                      <li><strong>Locality:</strong><p>Pollachi, Tamilnadu</p></li>
                      <li><strong>Email:</strong><p>hareesvar10@gmail.com</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/********************************* Perfectly Animiation *************************************/}
        {/********************************* SKILL *************************************/}
        <div className='skillsBg' data-aos="fade-up" data-aos-duration="1000" >
          <section id="skills" className="skills section-bg">
            <div className="container" >
              <div className="section-title">
                <h2>Skills</h2>
                <p>I am passionate about my ability to learn and develop more skills in web development.Currently I am learning both No code and low code technologies as an aditional skillset.I am always seeking new challenges and opportunities to learn and grow. Please feel free to browse my portfolio to see some of my work and accomplishments.</p>
              </div>
              <div className="row skills-content">
                <div className="col-lg-6">
                  <div className="progress">
                    <span className="skill">HTML & CSS<i className="val"></i></span>
                    <div className="progress-bar-wrap">
                      <LinearProgress variant='determinate' color='inherit' value={100} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">React js<i className="val"></i></span>
                    <div className="progress-bar-wrap">
                      <LinearProgress variant='determinate' color='inherit' value={100} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">Node js<i className="val"></i></span>
                    <div className="progress-bar-wrap">
                      <LinearProgress variant='determinate' color='inherit' value={100} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">Wordpress(Currently Learning)<i className="val"></i></span>
                    <div className="progress-bar-wrap">
                      <LinearProgress variant='determinate' color='inherit' value={100} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">sql & Mongo DB <i className="val"></i></span>
                    <div className="progress-bar-wrap">
                      <LinearProgress variant='determinate' color='inherit' value={100} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="progress">
                    <span className="skill"> version control system (Git, GitHub) <i className="val"></i></span>
                    <div className="progress-bar-wrap">
                      <LinearProgress variant='determinate' color='inherit' value={100} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">Bootstrap & Tailwind <i className="val"></i></span>
                    <LinearProgress variant='determinate' color='inherit' value={100} />
                  </div>
                  <div className="progress">
                    <span className="skill">Material UI <i className="val"></i></span>
                    <LinearProgress variant='determinate' color='inherit' value={100} />
                  </div>
                  <div className="progress">
                    <span className="skill">Webflow(Currently Learning) <i className="val"></i></span>
                    <LinearProgress variant='determinate' color='inherit' value={100} />
                  </div>
                  <div className="progress">
                    <span className="skill">Python<i className="val"></i></span>
                    <div className="progress-bar-wrap">
                      <LinearProgress variant='determinate' color='inherit' value={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/********************************* RESUME *************************************/}
        <div>
          <Parallax className='resumeBg' strength={600} bgImage={ResumeBG}>
            <section id="Resume" className="resume">
              <div className="container" >

                <div className="section-title">
                  <h2>Resume</h2>
                  <p>Possessing a strong blend of technical expertise, creative problem-solving skills, and a passion for innovation, I am committed to driving impactful results and exceeding expectations. Known for my adaptability, leadership, and collaborative spirit, I thrive in fast-paced environments and excel in cross-functional teams. </p>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="resume-title">Summary</h3>
                    <div className="resume-item ">
                      <h4>Hari Haran</h4>
                      <p><em>I'm a developer with 1 year of self practivce experience in the role of web development. I am experienced in various designing tools such as bootstrap, tailwind css, MUI and completed a MERN Certified Course</em></p>
                      <ul>
                        <li>hareesvar10@gmail.com</li>
                        <li>Pollachi, Tamil Nadu, India</li>
                        <li>+91 9360357376</li>
                      </ul>
                    </div>

                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                      <h4>UNDERGRADUATE</h4>
                      <h5>2019 - 2023</h5>
                      <p><em>Amrita University, Coimbatore, Tamil Nadu, India</em></p>
                      {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
                    </div>
                    <div className="resume-item">
                      <h4>Higher Education </h4>
                      <h5>12 th [2017 - 2019]</h5>
                      <p><em>NBNS National School[CBSE], Annur , Tamil Nadu, India  </em></p>
                      <p><em>415/500 </em></p>
                      <h5>10th [2017 - 2017]</h5>
                      <p><em>VSV School[CBSE], Pollachi , Tamil Nadu, India  </em></p>
                      <p><em>8.2 CGPA </em></p>
                      {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
                    </div>
                    <h3 className="resume-title">Experience</h3>
                    <div className="resume-item">
                      <h4>GUVI Internship</h4>
                      <h5>Full Stack Development Internship</h5>
                      <h5>July 2023 - Dec 2023</h5>
                      <ul>

                      <li>Designed and implemented responsive user interfaces with React.js, and improving and implementing responsive
designs for user satisfaction</li>
                      <li>Implemented microservices architecture using Node.js and Express,learning to improve API response time.</li>
                      <li>Learned to implement new features using React and Redux toolkit.</li>
                      <li>Optimized MongoDB database queries, reducing page load times and enhancing overall application performance.</li>
                      </ul>
                      {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
                    </div>
                    <h3 className="resume-title">Projects</h3>
                    <div className="resume-item">
                    <h4>UG Projects</h4>
                      <p><em> I have various experience in my UG group projects, which are as follows: </em></p>
                      <ul>
                        <li>Language Translation (From Hindhi To English using NLP with Colab)</li>
                        <li>Historical Documents Restroration (Deep Learning models to preserve Documents(Final Year Project))</li>
                        <li>Stock Manager (By using Deeplearning models we trained models with previous years data sets to predict using Reinforcement Learning)</li>
                      </ul>
                      {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="resume-title">PROJECTS</h3>
                    <div className="resume-item">
                      <h4>E Commerce Full Stack (MERN)</h4>
                      <p><em><a href='https://github.com/Hareesvar7/MERN-E-Commerce'target='blank'> Github source code</a></em></p>
                      <p><em><a href='https://mern-0fo7.onrender.com/' target='blank'> Deployed link</a></em></p>
                      <ul>
                        <li>Developed an of a E commerce using Node.js and atlas cloud.This project is based on my back end skill as it has 2
authorization and JWT authentication</li>
                        <li>Implementation of Authentication and Authorization for both seller(Admin) and Consumer for diffrent UI.</li>
                      </ul>
                    </div>
                    <div className="resume-item">
                      <h4>Fitness Logger Website(MERN)</h4>
                      <p><em><a href='https://github.com/Hareesvar7/Capstone-fittness' target='blank'>Github source code</a></em></p>
                      <p><em><a href='https://capstone-fittness.onrender.com/' target='blank'>Deployed Link</a></em></p>
                      <ul>
                        <li>Developed an of a Fitness logger using Node.js and atlas cloud and increased the speed of data retrieval with MVC
architecture.</li> 
                        <li>Designed and deployed a scalable REST API using Express.js and REST API, achieving a improvement in data
retrieval speed.</li>
                        <li>Learned Performance issues like slow loading times and inefficient API calls and to optimize techniques, including
caching, lazy loading, and database query optimization</li>
                      </ul>
                    </div>
                    <div className="resume-item">
                      <h4>Pet Clinic Dashbord</h4>
                      <p><em><a href='https://github.com/Hareesvar7/dashboard-react.git' target='blank'>Github Source Code</a></em></p>
                      <p><em><a href='https://iridescent-moonbeam-387379.netlify.app/.' target='blank'>Deployed Link</a></em></p>
                      <ul>
                        <li>A Web application to manage the client details of a pet clinic[UI based project].</li>
                        <li>Designed and implemented responsive user interfaces with React.js for both mobile and desktop, and improving and implementing responsive
design in the analatics part of client data</li>
                        <li>Created reusable components for Dashbord features to visually analyze client traffic[new users,payments per day,traffic of clients].</li>
                      </ul>
                    </div>

                    <div className="resume-item">
                      <h4>Login Page based on JWT Authentication</h4>
                      <p><em><a href='https://github.com/Hareesvar7/mern-authentication-jwt.git' target='blank'>Github Source Code</a></em></p>
                      <p><em><a href='https://statuesque-mochi-702441.netlify.app/' target='blank'>Deployed Link</a></em></p>
                      <ul>
                        <li>Designed an login page with bootstrap UI library for four CRUD operations related to Profile updations.</li>
                        <li>Created an backend Api with express and Mongodb with 5 routes for auth,login,register,profile and update profile.</li>
                        <li>Implemented JWT tokens for protected routes and endpoints.</li>
                      </ul>
                    </div>
                    <div className="resume-item">
                      <h4>Notes App with redux toolkit</h4>
                      <p><em><a href='https://github.com/Hareesvar7/reduxtoolkit-react-notes.git' target='blank'>Github Source Code</a></em></p>
                      <p><em><a href='https://effulgent-pothos-5b59ad.netlify.app/' target='blank'>Deployed Link</a></em></p>
                      <ul>
                        <li>Designed an notes app by implementation of redux toolkit for state management.</li>
                        <li>Created an database to store the user data into mongodb cluster.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Parallax>
        </div>
        {/********************************* EXPERTISE *************************************/}

        <div>
          <section id="Expertise" className="Expertise">
            <div className="container" >
              <div className="section-title">
                <h2>expertise</h2>
                <p>Currenty I am focusing on both MERN stack and low code technologies[wix,webflow].So I could contribute to the organization in web development.I am also learning newer tech stacks to improve my standards and for the contribution towards the organization.</p>
              </div>
              <div className="row justify-content-evenly">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-right">
                  <div className="icon-box iconbox-blue">
                    <div className="icon">
                      <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                      </svg>
                    </div>
                    <h4>MERN Stack</h4>
                    <p>“There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for”</p>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-left">
                  <div className="icon-box iconbox-orange ">
                    <div className="icon">
                      <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                      </svg>
                    </div>
                    <h4>UI & UX Design</h4>
                    <p>“UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.”</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-right">
                  <div className="icon-box iconbox-blue">
                    <div className="icon">
                      <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                      </svg>
                    </div>
                    <h4>Front End Developer</h4>
                    <p>““A user interface is like a joke. If you have to explain it, it’s not that good.””</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/********************************* DownloadCV *************************************/}
        <div data-aos="zoom-in" className='Enter'>
          <Container>
            <Row className='E-content mx-auto d-flex align-items-center'>
              <Col md={8} lg={8} className='E-text'>
                <h1>Wanna know more</h1>
                <p>Then download my CV to know my passion <ArrowRightAltOutlined /></p>
              </Col>
              <Col md={4} className='d-flex justify-content-end'>
                <div className='E-btn text-center'>
                  <a href={RESUME} download={true}>
                    <p>Download Here</p>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/********************************* FOOTER *************************************/}

        <Footer />

      </div>
    </>
  )
}

export default Root