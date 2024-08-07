import './App.css';
import VisualizeSort from './mergeSort/VisualizeMain.jsx';
import TTT from './tictactoe/TTT.jsx';
import cs50x from './certifications/cs50x.png';
import cs50w from './certifications/cs50w.png';

function App() {
  return (
    <div id="main-div">
      <h1 style={{textAlign: 'center'}}>Pinny Chopp</h1>
      <h2 style={{textAlign: 'center'}}>Software Developer</h2>
      <hr />
      <h2>Overview</h2>
      <p style={{textAlign: 'center'}}>
        This site is designed to showcase my skills, experiences, and projects in a clean and user-friendly manner. It is a straightforward React and Vite application deployed on GitHub Pages. You can view the source code <a>here</a>.
      </p>
      <h2>Resume Projects</h2>
      <div id={'projects'}>
        <div id={'merge-sort'}>
          <div style={{textAlign: 'center', justifyContent: 'center'}}>
            <h5>Visualize sort algorithms.</h5>
            <p>
              This project is a visualization of the merge sort algorithm. It is built with React. You can view the source code <a>here</a>.
            </p>
            <VisualizeSort />
          </div>
        </div>
          <div id={'tic-tac-toe'}>
            <h4>Tic-Tac-Toe</h4>
            <p>
            This project features a Tic-Tac-Toe game where players can compete against a computer opponent. The frontend is developed using React, while the AI computations are handled by an AWS Lambda function written in Python. You can view the React code <a>here</a> and the Lambda function code <a>here</a>.
            </p>
            <TTT />
          </div>
      </div>
      <h2>Courses/Certifications</h2>
      <h4>CS50's Introduction to Computer Science - <a href='https://cs50.harvard.edu/x/2024' target='_blank'>CS50x</a></h4>
      <p>this course goes over the basics of computer science and programming. It covers topics such as algorithms, data structures, and web development.</p>
      <a>course projects</a>
      <h5>Noteable Projects:</h5>
      <ul>
        <li><a>Speller</a> - a program that checks the spelling of words against a dictionary</li>
        <li><a>Filter</a> - a program that applies filters to images</li>
        <li><a>Recover</a>- a program that recovers deleted images from a memory card</li>
      </ul>
      <h5>Certification</h5>
      <img src={cs50x} className='certification' alt='CS50x Certificate' />
      <hr />
      <h5>CS50's Web Programming with Python and JavaScript - <a href='https://cs50.harvard.edu/web/2020' target='_blank'>CS50w</a></h5>
      <p>This course covers the basics of web development. It covers topics such as HTML, CSS, JavaScript, and SQL.</p>
      <a>course projects</a>
      <h5>Noteable Projects:</h5>
      <p>I believe this website is more impressive than any of the projects in the course. The source code for this site can be found <a href="#">here</a>.</p>
      <p>The course does demonstrate different aspects of web development, that arent covered in this site, such as:</p>
      <ul>
        <li>django</li>
        <li>SQL</li>
        <li>Session Management</li>
        <li>More backend development this site is more frontend</li>
      </ul>
      <h5>Certification</h5>
      <img src={cs50w} className='certification' alt='CS50x Certificate' />
      <h5>CS50's to Artificial Intelligence with Python - <a href='https://cs50.harvard.edu/ai/2024' target='_blank'>CS50ai</a></h5>
      <p>This course covers the basics of artificial intelligence. It covers topics such as machine learning, neural networks, and natural language processing.</p>
      <a>course projects</a>
      <h5>Noteable Projects:</h5>
      <ul>
        <li>PageRank</li>
        <li>Hermes</li>
        <li>Shopping</li>
      </ul>
      <h5>Certification</h5>
      <img src={cs50w} className='certification' alt='CS50x Certificate' />
      <hr />
      <h2>Professional Experience</h2>
      <h4>Intern/Helpdesk</h4>
      <p>I interned at a IT company called <a href='https://www.diadnetworks.com/' target='_blank'>Tritech/Diad</a> Networks i worked helpdesk there for almost a year</p>
      <h4>Fleelance Web Development</h4>
      <p>I developed custom CRM-like systems for a real estate company called DebtFreeSolutions. This is the most significant project I have worked on. While I cannot share the code as it belongs to the company, I would be happy to demonstrate the product in person.</p>
      </div>
  );
}

export default App;
