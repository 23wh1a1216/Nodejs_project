import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container resume-container my-5">
      <header className="text-center mb-4 py-4 border-bottom border-primary">
        <h1 className="display-4 font-weight-bold text-primary">ASHRITHA GOURISHETTY</h1>
        <div className="d-flex flex-wrap justify-content-center align-items-center contact-info">
          <span className="mx-2">Hyderabad, Telangana</span>
          <span className="text-muted">|</span>
          <span className="mx-2">9347434628</span>
          <span className="text-muted">|</span>
          <span className="mx-2">ashritha.gourishetty@gmail.com</span>
        </div>
      </header>

      <section className="mb-4">
        <h2 className="text-primary mb-3 pb-2 border-bottom">SUMMARY</h2>
        <p className="lead">
          Dynamic and innovative student at BVRIT Hyderabad College of Engineering for Women, 
          skilled in team coordination and project management.Highly motivated and eager to learn new skills and 
          techniques to expand knowledge and contribute to the success of the organization. 
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-primary mb-3 pb-2 border-bottom">SKILLS</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0">Technical Skills</h3>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="badge bg-light text-dark me-2">✓</span>
                    C Language
                  </li>
                  <li className="mb-2">
                    <span className="badge bg-light text-dark me-2">✓</span>
                    Python
                  </li>
                  <li className="mb-2">
                    <span className="badge bg-light text-dark me-2">✓</span>
                    Java
                  </li>
                  <li className="mb-2">
                    <span className="badge bg-light text-dark me-2">✓</span>
                    HTML/CSS
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-header bg-primary text-white">
                <h3 className="h5 mb-0">Soft Skills</h3>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="badge bg-light text-dark me-2">✓</span>
                    Teamwork and Collaboration
                  </li>
                  <li className="mb-2">
                    <span className="badge bg-light text-dark me-2">✓</span>
                    Effective Communication
                  </li>
                  <li className="mb-2">
                    <span className="badge bg-light text-dark me-2">✓</span>
                    Idea Generation
                  </li>
                  <li className="mb-2">
                    <span className="badge bg-light text-dark me-2">✓</span>
                    Project and Time Management
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-primary mb-3 pb-2 border-bottom">EDUCATION</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="h5 text-dark">BACHELOR OF TECHNOLOGY IN INFORMATION TECHNOLOGY (2023-2027)</h3>
            <p className="text-muted mb-0">
              <i className="fas fa-university me-2"></i>
              BVRIT HYDERABAD College of Engineering for Women | Hyderabad
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="h5 text-dark">INTERMEDIATE - MPC (2021-2023)</h3>
            <p className="text-muted mb-0">
              <i className="fas fa-school me-2"></i>
              Narayana Jr College | Hyderabad
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="h5 text-dark">SECONDARY SCHOOL - (2013-2021)</h3>
            <p className="text-muted mb-0">
              <i className="fas fa-school me-2"></i>
              Hindu Public School | Hyderabad
            </p>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-primary mb-3 pb-2 border-bottom">COURSE COMPLETION CERTIFICATIONS</h2>
        <div className="card">
          <div className="card-body">
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <i className="fas fa-certificate text-primary me-2"></i>
                Joy of Computing using Python, NPTEL | IIT Madras | 2024
              </li>
              <li className="mb-2">
                <i className="fas fa-certificate text-primary me-2"></i>
                Data Visualization with Power BI and Tableau | Aditya University | 2024
              </li>
              <li className="mb-2">
                <i className="fas fa-certificate text-primary me-2"></i>
                C programming for Beginners | Scalar | 2024
              </li>
              <li className="mb-2">
                <i className="fas fa-certificate text-primary me-2"></i>
                Getting Started with Julia | Infosys | 2024
              </li>
              <li className="mb-2">
                <i className="fas fa-certificate text-primary me-2"></i>
                Pointers in C programming course | Infosys | 2023
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-primary mb-3 pb-2 border-bottom">LANGUAGES KNOWN</h2>
        <div className="d-flex flex-wrap gap-2">
          <span className="badge bg-primary">English</span>
          <span className="badge bg-primary">Telugu</span>
          <span className="badge bg-primary">Hindi</span>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-primary mb-3 pb-2 border-bottom">CONFERENCES AND EVENTS</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="h5 text-dark">PARTICIPANT | 7TH PURE EARTH CONFERENCE | 2023</h3>
            <p className="mb-0">
              Presented a research paper on the "Impact of Wind Energy," exploring its environmental 
              benefits and challenges, and contributed to discussions on sustainable energy solutions.
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="h5 text-dark">FAILATHON HACKATHON</h3>
            <p className="text-muted mb-2">
              BVRIT HYDERABAD COLLEGE OF ENGINEERING FOR WOMEN | HYDERABAD | 2024
            </p>
            <p className="mb-0">Gained skills in team foundation, coordination and idea generation.</p>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="h5 text-dark">DEMUX HACKATHON</h3>
            <p className="text-muted mb-2">
              B V RAJU INSTITUTE OF TECHNOLOGY | HYDERABAD | 2024
            </p>
            <p className="mb-0">
              Successfully developed a website prototype at the Demux Hackathon to aid farmers, 
              showcasing effective communication and technical proficiency in HTML and CSS.
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="h5 text-dark">SAWIT AI LEARNATHON</h3>
            <p className="text-muted mb-2">
              BVRIT HYDERABAD COLLEGE OF ENGINEERING FOR WOMEN | HYDERABAD | 2024
            </p>
            <p className="mb-0">Successfully completed the fundamentals of Generative AI.</p>
          </div>
        </div>
      </section>

      <section className="mb-4">
        <h2 className="text-primary mb-3 pb-2 border-bottom">PROJECTS</h2>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="h5 text-dark">YAHTZEE | 2024</h3>
            <p>
              Yahtzee is a dice game based on Poker. The object of the game is to roll certain 
              combinations of numbers with five dice. At each turn we throw dice trying to get highest 
              combination of numbers.
            </p>
            <div className="bg-light p-3 rounded">
              <strong>Technologies:</strong> Python, Pygame module is used for UI event handling and sound. 
              Random module is used to roll dice randomly. Object Oriented Programming classes are used 
              for choice and dice logic.
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="h5 text-dark">MOVIE TICKET BOOKING SYSTEM | 2024</h3>
            <p>
              Movie ticket booking system allows users to register, login, and book tickets while admins 
              can manage movies.
            </p>
            <div className="bg-light p-3 rounded">
              <strong>Technologies:</strong> Core Java, OOP concepts like Inheritance, Polymorphism are used.
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h3 className="h5 text-dark">SIMPLE STUDY SCHEDULER | 2025</h3>
            <p>
              This study scheduler helps users generate a study plan based on user information, subjects, 
              study hours, generated schedule. It randomly assigns subjects to time slots.
            </p>
            <div className="bg-light p-3 rounded">
              <strong>Technologies:</strong> Python, Tkinter GUI toolkit, Pillow PIL Image processing library, 
              ImageTk, Random module to generate randomized study schedules.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;