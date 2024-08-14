import './App.css';
import TTT from './tictactoe/TTT.jsx';
import cs50x from './certifications/cs50x.png';
import cs50w from './certifications/cs50w.png';

function App() {
  return (
    <div id="main-div">
      <h1 style={{ textAlign: 'center' }}>Pinny Chopp</h1>
      <h2 style={{ textAlign: 'center' }}>Software Developer</h2>
      <hr />
      <h2>Overview</h2>
      <p style={{ textAlign: 'center' }}>
        This site is designed to showcase my skills, experiences, and projects in a clean and user-friendly manner. It is a straightforward React and Vite application deployed on GitHub Pages. You can view the source code <a target='_blank' href='https://github.com/Zevijee/job-resume'>here</a>.
      </p>
      <h2>Courses/Certifications</h2>
      <h4>CS50's Introduction to Computer Science - <a href='https://cs50.harvard.edu/x/2024' target='_blank'>CS50x</a></h4>
      <p>this course goes over the basics of computer science and programming. It covers topics such as algorithms, data structures, and web development.</p>
      <a target='_blank' href='https://github.com/Zevijee/course-projects/tree/main/cs50'>course projects</a>
      <h5>Noteable Projects:</h5>
      <ul>
        <li><a target='_blank' href='https://github.com/Zevijee/course-projects/blob/main/cs50/tideman/tideman.c'>Tideman</a></li>
        <li><a target='_blank' href='https://github.com/Zevijee/course-projects/blob/main/cs50/runoff/runoff.c'>Runoff</a></li>
        <li><a target='_blank' href='https://github.com/Zevijee/course-projects/blob/main/cs50/inheritance/inheritance.c'>Inheritance</a></li>
      </ul>
      <p>All of the projects listed above are written in C. The course also covers Python, SQL, JavaScript, HTML, and CSS.</p>
      <p>This project <a target='_blank' href='https://github.com/Zevijee/course-projects/tree/main/cs50/final%20project'>Cs50x final Project</a>, is written in Lua and uses the Love2D game engine. Im sharing these specific projects because they show my ability to learn new languages and frameworks.</p>
      <h5>Certification</h5>
      <img src={cs50x} className='certification' alt='CS50x Certificate' />
      <hr />
      <h5>CS50's Web Programming with Python and JavaScript - <a href='https://cs50.harvard.edu/web/2020' target='_blank'>CS50w</a></h5>
      <p>This course goes over the basics of web development. It covers topics such as HTML, CSS, JavaScript, and SQL. But the main focus is the development of web applications rather than the syntax of the languages. it uses the Django framework for the backend, and vanilla JavaScript, HTML, and CSS for the frontend.</p>
      <a target='_blank' href='https://github.com/Zevijee/course-projects/tree/main/cs50%20web'>course projects</a>
      <h5>Certification</h5>
      <img src={cs50w} className='certification' alt='CS50x Certificate' />
      <h5>CS50's to Artificial Intelligence with Python - <a href='https://cs50.harvard.edu/ai/2024' target='_blank'>CS50ai</a></h5>
      <p>This course covers the basics of artificial intelligence. It covers topics such as machine learning, neural networks, and natural language processing.</p>
      <a target='_blank' href='https://github.com/Zevijee/course-projects/tree/main/cs50%20ai'>course projects</a>
      <h5>Noteable Projects:</h5>
      <ul>
        <li><a target='_blank' href='https://github.com/Zevijee/course-projects/tree/main/cs50%20ai/tictactoe'>Tic-Tac-Toe</a> - This project is the inspiration for the Tic-Tac-Toe project listed below.</li>
        <li><a target='_blank' href='https://github.com/Zevijee/course-projects/tree/main/cs50%20ai/minesweeper'>Minesweeper</a></li>
        <li><a target='_blank' href='https://github.com/Zevijee/course-projects/blob/main/cs50%20ai/heredity/heredity.py'>Heredity</a></li>
      </ul>
      <p>This course was the most challenging of the three. It covers Machine Learning, Neural Networks, and Natural Language Processing.</p>
      <h5>Certification</h5>
      <img src={cs50w} className='certification' alt='CS50x Certificate' />
      <hr />
      <h2>Professional Experience</h2>
      <h4>Intern/Helpdesk</h4>
      <p>I interned at a IT company called <a href='https://www.diadnetworks.com/' target='_blank'>Tritech / Diad Networks</a> I worked helpdesk there for almost a year</p>
      <h4>Fleelance Web Development</h4>
      <p>I developed custom CRM-like systems for a real estate company called DebtFreeSolutions. This is the most significant project I have worked on. While I cannot share the code as it belongs to the company, I would be happy to demonstrate the product in person.</p>
      <h2>Resume Project</h2>
      <div id={'projects'}>
        <div id={'tic-tac-toe'}>
          <h4>Tic-Tac-Toe</h4>
          <p>
            This project features a Tic-Tac-Toe game where players can compete against a computer opponent. Just hit a box and wait the computer go next. The frontend is developed using React, while the AI computations are handled by an AWS Lambda function written in Python. You can view the React code <a target='_blank' href='https://github.com/Zevijee/job-resume/tree/main/src/tictactoe'>here</a> and the Lambda function code <a target='_blank' href='https://github.com/Zevijee/job-resume/blob/main/TTT.py'>here</a>.
          </p>
          <TTT />
        </div>
      </div>
    </div>
  );
}

export default App;
