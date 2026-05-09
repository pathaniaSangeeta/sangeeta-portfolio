export default function Portfolio() {
  const projects = [
    {
      title: 'NvisionU',
      description: 'AI & Learning Platform development using Laravel and scalable backend systems.',
      link: 'https://nvisionu.com/'
    },
    {
      title: 'Smallab Learning Resources',
      description: 'LMS platform with backend modules, APIs, and learning workflows.',
      link: 'https://resources.smallablearning.com/'
    },
    {
      title: 'The Construction Platform',
      description: 'Construction management platform with scalable Laravel architecture.',
      link: 'https://theconstructionplatform.com/'
    },
    {
      title: 'Desk CRM',
      description: 'CRM & reporting system with APIs and workflow management.',
      link: 'https://desk.kitlabs.us/login'
    },
    {
      title: 'Support Ticket System',
      description: 'Client support and ticket management platform.',
      link: 'https://support.kitlabs.us/login'
    },
    {
      title: 'My Digital Card',
      description: 'Digital business card and smart identity platform.',
      link: 'https://mydigitalcard.kitlabs.us/'
    }
  ];

  const skills = [
    'Laravel',
    'PHP',
    'REST APIs',
    'MySQL',
    'JavaScript',
    'Angular',
    'OpenAI APIs',
    'Git',
    'Postman',
    'CRM Development',
    'SaaS Applications',
    'AI Chatbots'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-blue-400 font-semibold tracking-widest uppercase mb-4">
              Laravel Full Stack Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Building <span className="text-blue-400">Scalable</span> Web Solutions
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Full Stack Developer with 4+ years of experience building CRM systems,
              LMS platforms, REST APIs, SaaS products, and AI-powered applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/sangeeta-pathania-57781821a/"
                target="_blank"
                className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl font-semibold"
              >
                LinkedIn
              </a>

              <a
                href="mailto:sangeeta09pathania12@gmail.com"
                className="border border-slate-600 hover:border-blue-400 transition px-6 py-3 rounded-2xl font-semibold"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Tech Stack</h2>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-800 hover:bg-slate-700 transition rounded-2xl px-4 py-3 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Projects I’ve Worked On</h2>
          <p className="text-slate-400 text-lg">
            Real-world SaaS, CRM, LMS, and AI-integrated platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-blue-400 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="inline-block bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-2xl font-semibold"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Open To New Opportunities
          </h2>

          <p className="text-lg mb-8 text-white/90 leading-relaxed">
            Looking for Backend Developer, Laravel Developer, Full Stack Developer,
            and AI-integrated web application opportunities.
          </p>

          <a
            href="mailto:sangeeta09pathania12@gmail.com"
            className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition inline-block"
          >
            Let’s Connect
          </a>
        </div>
      </section>
    </div>
  );
}
