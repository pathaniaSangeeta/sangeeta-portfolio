<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sangeeta Pathania | Portfolio</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    body {
      background: #07111f;
      color: white;
      line-height: 1.6;
    }

    .container {
      width: 90%;
      max-width: 1200px;
      margin: auto;
    }

    header {
      padding: 80px 0;
      text-align: center;
    }

    header h1 {
      font-size: 52px;
      margin-bottom: 20px;
    }

    header span {
      color: #3b82f6;
    }

    header p {
      color: #cbd5e1;
      max-width: 800px;
      margin: auto;
      font-size: 20px;
    }

    .btn {
      display: inline-block;
      margin-top: 30px;
      background: #2563eb;
      color: white;
      padding: 14px 28px;
      border-radius: 12px;
      text-decoration: none;
      font-weight: bold;
    }

    section {
      padding: 60px 0;
    }

    h2 {
      text-align: center;
      font-size: 38px;
      margin-bottom: 40px;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      justify-content: center;
    }

    .skill {
      background: #111c2d;
      padding: 14px 24px;
      border-radius: 12px;
      border: 1px solid #1e293b;
    }

    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
    }

    .card {
      background: #111c2d;
      padding: 25px;
      border-radius: 20px;
      border: 1px solid #1e293b;
    }

    .card h3 {
      margin-bottom: 15px;
      color: #60a5fa;
    }

    .card p {
      color: #cbd5e1;
      margin-bottom: 20px;
    }

    .card a {
      color: white;
      text-decoration: none;
      background: #2563eb;
      padding: 10px 18px;
      border-radius: 10px;
      display: inline-block;
    }

    footer {
      text-align: center;
      padding: 40px 0;
      color: #94a3b8;
    }
  </style>
</head>
<body>

  <header>
    <div class="container">
      <h1>Sangeeta <span>Pathania</span></h1>
      <p>
        Laravel Full Stack Developer with 4+ years of experience building CRM systems,
        LMS platforms, REST APIs, SaaS applications, and AI-powered solutions.
      </p>

      <a class="btn" href="https://www.linkedin.com/in/sangeeta-pathania-57781821a/" target="_blank">
        Connect on LinkedIn
      </a>
    </div>
  </header>

  <section>
    <div class="container">
      <h2>Tech Stack</h2>

      <div class="skills">
        <div class="skill">Laravel</div>
        <div class="skill">PHP</div>
        <div class="skill">REST APIs</div>
        <div class="skill">MySQL</div>
        <div class="skill">JavaScript</div>
        <div class="skill">Angular</div>
        <div class="skill">OpenAI APIs</div>
        <div class="skill">Git</div>
        <div class="skill">Postman</div>
        <div class="skill">AI Chatbots</div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <h2>Projects</h2>

      <div class="projects">

        <div class="card">
          <h3>NvisionU</h3>
          <p>AI & Learning Platform development using Laravel and scalable backend systems.</p>
          <a href="https://nvisionu.com/" target="_blank">Visit Project</a>
        </div>

        <div class="card">
          <h3>Smallab Learning Resources</h3>
          <p>LMS platform with backend modules, APIs, and learning workflows.</p>
          <a href="https://resources.smallablearning.com/" target="_blank">Visit Project</a>
        </div>

        <div class="card">
          <h3>The Construction Platform</h3>
          <p>Construction management platform with scalable Laravel architecture.</p>
          <a href="https://theconstructionplatform.com/" target="_blank">Visit Project</a>
        </div>

        <div class="card">
          <h3>Desk CRM</h3>
          <p>CRM & reporting system with APIs and workflow management.</p>
          <a href="https://desk.kitlabs.us/login" target="_blank">Visit Project</a>
        </div>

        <div class="card">
          <h3>Support Ticket System</h3>
          <p>Client support and ticket management platform.</p>
          <a href="https://support.kitlabs.us/login" target="_blank">Visit Project</a>
        </div>

        <div class="card">
          <h3>My Digital Card</h3>
          <p>Digital business card and smart identity platform.</p>
          <a href="https://mydigitalcard.kitlabs.us/" target="_blank">Visit Project</a>
        </div>

      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>© 2026 Sangeeta Pathania | Laravel Full Stack Developer</p>
    </div>
  </footer>

</body>
</html>
