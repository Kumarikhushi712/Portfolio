import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Footer } from "./components/Footer/Footer";
import { Project } from "./components/Project/Project";
import { SkillCard } from "./components/Cards/";
import CertificateCard from "./components/Certificates/CertificateCard";


function App() {
  return (
    <>
      <Menu />
      <Header />

      <main>
        <section className="about" id="About">
          <div className="center">
            <figure className="about__imgContainer">
              <img className="about__img" src="./imgs/me3.png" alt="Me" />
            </figure>
            <article className="about__info">
              <h2 className="about__subtitle">Hello I am Khushi Kumari</h2>
              <h1 className="about__title">An Aspiring Developer</h1>
              <p className="about__parraf">I am a MERN Stack Developer and an aspiring Software Developer with a strong passion for Web Development. I am actively seeking internships and full-time opportunities to apply my skills, contribute to impactful projects, and grow in the tech industry. 
              </p>
              <button className="button" type="button">
                <a href="mailto:khushi087singh@gmail.com">
                  Send me an email
                </a>
              </button>
            </article>
          </div>
        </section>

        <section className="skills" id="Skills">
          <div className="skills__background z__1">
            <div className="bg__2"></div>
            <div className="bg__1"></div>
          </div>
          <div className="skills__roles center z__2">
            <article className="skills__roles__item bg__3 ">
              <figure>
                <img src="./svgs/roles_ux-ui.svg" alt="" />
              </figure>
              <div className="roles__text">
                <h2>Full-Stack Developer</h2>
                <p>
                This role involves developing both frontend and backend, managing databases, building APIs, ensuring performance, and collaborating with teams to create seamless web applications.
                </p>
              </div>
            </article>
            
            <article className="skills__roles__item bg__3">
              <figure>
                <img src="/svgs/roles_responsive.svg" alt="" />
              </figure>
              <div className="roles__text">
                <h2>Frontend Development</h2>
                <p>
                Creating responsive, fast, and visually appealing user interfaces using modern web technologies like React, JavaScript, HTML, and CSS.
                </p>
              </div>
            </article>

            <article className="skills__roles__item bg__3">
              <figure>
                <img src="./svgs/roles_programming.svg" alt="" />
              </figure>
              <div className="roles__text">
                <h2>API Integration & Development</h2>
                <p>Connecting websites to backend servers and external data to make apps dynamic and interactive.
                </p>
              </div>
            </article>
            
          </div>
          <div className="skills__experience center z__2">
            <div className="skills__experience__item __years">
              <span><figure><img src="./logos/college.png" alt="College" /></figure></span>
              <h2>Lovely Professional University, Punjab</h2>
              <h1>B.Tech, Computer Science and Engineering</h1>
            </div>
            <div className="skills__experience__item bg__3">
              <span>3+</span>
              <p>Languages</p>
            </div>
            <div className="skills__experience__item bg__3">
              <span>4</span>
              <p>Projects</p>
            </div>
            <div className="skills__experience__item bg__3">
              <span>10+</span>
              <p>Skills</p>
            </div>
            <div className="skills__experience__item bg__3">
              <span>10+</span>
              <p>Certificates</p>
            </div>
          </div>
          <h2 className="skills__techs center z__2">Tech Stack</h2>
          <div className="skills__techs center z__2">
            <SkillCard name="HTML" icon="html" />
            <SkillCard name="CSS" icon="css" />
            <SkillCard name="JS" icon="js" />
            <SkillCard name="Git" icon="git" />
            <SkillCard name="Github" icon="github" />
            <SkillCard name="React JS" icon="react" />
            <SkillCard name="Node JS" icon="node" />
            <SkillCard name="Tailwind CSS" icon="tailwind" />
            <SkillCard name="MongoDB" icon="mongodb" />
            <SkillCard name="Express JS" icon="express" />
          </div>
        </section>

        <section className="projects bg__1" id="Projects">
          <article className="projects__info center">
            <div className="projects__info__text">
              <h2>FEATURED PROJECTS</h2>
              <p>Here you can see my principal projects</p>
            </div>
            <button className="button inactive" type="button">
              <a href="/projects">View all</a>
            </button>
          </article>
          <div className="projects__box center">
            <Project
              img="./imgs/projects/All-About-Space.png"
              project="All-About-Space"
              repo="https://github.com/Kumarikhushi712/All-About-Space/tree/main"
              live="https://all-about-space-seven.vercel.app/"
            />
            {/* <Project
              img="./imgs/projects/BMW.png"
              project="BMW-Sales-Dashboard"
              repo="https://github.com/sheelganvir/BMW-Sales-Dashboard"
              live="https://github.com/sheelganvir/BMW-Sales-Dashboard"
            /> */}
            
            <Project
              img="./imgs/projects/rtn.png"
              project="Spin-Spend(An Expense Tracker)"
              repo="https://github.com/Kumarikhushi712/Spinspend-A-Expense-Tracer-"
              live="https://spinspend-a-expense-tracer-1.onrender.com/"
            />
            {/* <Project
              img="./imgs/projects/OLA.png"
              project="OLA-DashX"
              repo="https://github.com/sheelganvir/OLA-DashX"
              live="https://github.com/sheelganvir/OLA-DashX"
            /> */}
            <Project
              img="./imgs/projects/auth.png"
              project="Hospital-Management-System"
              repo="https://github.com/Kumarikhushi712/Hospital-management-system/tree/master"
              live="https://drive.google.com/file/d/1TEAUVz1NOVOKhG11qeNC47_C8xmSiTU1/view?usp=sharing"
            />
            {/* <Project
              img="./imgs/projects/alignment.png"
              project="Alignment-Checker-ChromeExtension"
              repo="https://github.com/sheelganvir/Alignment-Checker-ChromeExtension"
              live="https://drive.google.com/file/d/1lh-FvjS8aUPxKaK2cT5tl05duvjaxvtQ/view?usp=drive_link"
            /> */}
            {/* <Project
              img="./imgs/projects/My-Music-Player.png"
              project="My-Music-Player"
              repo="https://github.com/sheelganvir/My-Music-Player"
              live="https://my-music-player-zeta.vercel.app/"
            /> */}
            
            {/* <Project
              img="./imgs/projects/file_sharing.png"
              project="File-Sharing-Application"
              repo="https://github.com/sheelganvir/File-Sharing-Application"
              live="https://file-sharing-application-thop.vercel.app/"
            /> */}

            {/* <Project
              img="./imgs/projects/gmail-clone.png"
              project="Gmail-Clone"
              repo="https://github.com/sheelganvir/Gmail-Clone"
              live="https://gmail-ten.vercel.app/"
            /> */}
            
            {/* <Project
              img="./imgs/projects/youtube.jpg"
              project="MyYoutube-Clone"
              repo="https://github.com/sheelganvir/MyYoutube-Clone"
              live="/"
            /> */}
            
            {/* <Project
              img="./imgs/projects/pwskills.png"
              project="PWSkills-Clone"
              repo="https://github.com/sheelganvir/PWskills-homepage"
              live="https://sheelganvir.github.io/PWskills-homepage/"
            /> */}
            {/* <Project
              img="./imgs/projects/simon.png"
              project="The-Simon-Game"
              repo="https://github.com/sheelganvir/The-Simon-Game"
              live="https://sheelganvir.github.io/The-Simon-Game/"
            /> */}
            
            <Project
              img="./imgs/projects/Old-portfolio.png"
              project="Portfolio"
              repo="https://github.com/Kumarikhushi712/Portfolio"
              live=""
            />
            
            
            
          </div>
        </section>


<section className="certificates bg__1" id="Certificates">
  <article className="certificates__info center">
    <div className="certificates__info__text">
      <h2>CERTIFICATES & CERTIFICATIONS</h2>
      <p>These reflect my continuous learning and technical growth.</p>
    </div>
  </article>

  <div className="certificates__box center">
    <CertificateCard
      img="./imgs/certificates/java.png"
      title="Java Programming"
      platform="Board Infinity · July 2024"
      link="https://drive.google.com/file/d/1V5esCoXz_IEsfLjZGpzi-zhXEtb35-80/view?usp=sharing"
    />
    <CertificateCard
      img="./imgs/certificates/genai.png"
      title="Responsible & Safe GenAI"
      platform="NPTEL · Nov 2024"
      link="https://drive.google.com/file/d/1kUIasIaO6ugDlcDHSGQhfJ4Qvx7_6HVw/view?usp=sharing"
    />
    <CertificateCard
      img="./imgs/certificates/dsa.png"
      title="Mastering DSA in C/C++"
      platform="Udemy · Mar 2024"
      link="https://www.udemy.com/certificate/UC-cabb85b3-e9c6-4779-96f5-df246d1485c5/"
    />
    <CertificateCard
      img="./imgs/certificates/frontend.png"
      title="HTML, CSS, JS for Web Developers"
      platform="Coursera · May 2024"
      link="https://www.coursera.org/account/accomplishments/verify/JYWLZMGLLYX5"
    />
    <CertificateCard
      img="./imgs/certificates/backend.png"
      title="Serverside JavaScript with NodeJS"
      platform="Coursera, May 2024"
      link="https://www.coursera.org/account/accomplishments/verify/YCAZQMDMRUHW"
    />
  </div>
</section>




        <section className="contact bg__2">
          <div>
            <div className="contact__box center bg__3 z__2">
              <article className="contact__text">
                <h3>Lets work on your next project</h3>
                <p>
                  You can send me an email where you can explain the detail of
                  your project
                </p>
              </article>
              <button className="button" type="button">
                <a href="mailto:khushi087singh@gmail.com">Contact</a>
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export { App };
