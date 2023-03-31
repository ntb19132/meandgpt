import './App.css';

function App() {
  return (
    <div className="me-and-gpt">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <h1><i className="fas fa-brain"></i> Me and GPT</h1>
      <p>Welcome to the "Me and GPT" page! This page is dedicated to exploring the world of artificial intelligence and its applications in everyday life.</p>

      <div className="motto">
        <h2><i className="fas fa-hands-helping"></i> Our Motto: Democratized AI for All</h2>
        <p>We believe that artificial intelligence should be accessible and beneficial to everyone. By democratizing AI, we aim to create a world where technology empowers individuals and communities, fosters creativity, and solves real-world problems. Our motto, "Democratized AI for All," represents our commitment to making AI technology and its advantages available to people from all walks of life.</p>
      </div>

      <div className="gpt-section">
        <h2><i className="fas fa-robot"></i> About GPT</h2>
        <p>Generative Pre-trained Transformer (GPT) is a cutting-edge AI model developed by OpenAI. It is designed to generate human-like text based on given input. GPT has been used in various applications, such as chatbots, content generation, code assistance, and more.</p>
      </div>

      <div className="my-experience">
        <h2><i className="fas fa-laptop-code"></i> My Experience with GPT</h2>
        <p>I have been using GPT for various tasks, such as content generation, programming help, and more. Its ability to understand context and generate coherent text has been a great asset in my projects. It has improved my productivity and helped me explore new ideas.</p>
      </div>

      <div className="resources">
        <h2><i className="fas fa-book"></i> Learn More About GPT</h2>
        <ul>
          <li><a href="https://openai.com/research" target="_blank" rel="noopener noreferrer">OpenAI Research</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Generative_Pre-trained_Transformer" target="_blank" rel="noopener noreferrer">GPT on Wikipedia</a></li>
          <li><a href="https://openai.com/blog" target="_blank" rel="noopener noreferrer">OpenAI Blog</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;