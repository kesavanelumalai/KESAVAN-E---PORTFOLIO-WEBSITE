import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, MapPin, ArrowUpRight, Download, Menu, X } from 'lucide-react';

const GH = 'https://github.com/kesavanelumalai/';
const LI = 'https://www.linkedin.com/posts/kesavan-elumalai_';

const nav = ['about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];

const focus = [
  ['Computer Vision & Medical Imaging', 'Training classification, detection and segmentation models on MRI, CT and X-ray data using PyTorch and cloud GPUs.'],
  ['LLMs & RAG', 'Retrieval-augmented apps with embeddings, FAISS and Hugging Face models, served through FastAPI.'],
  ['End-to-end delivery', 'From data cleaning and cross-validated training to evaluation, APIs and simple web apps.'],
];

const skills: [string, string[]][] = [
  ['Languages', ['Python', 'SQL', 'R']],
  ['Machine Learning', ['Scikit-learn', 'Feature Engineering', 'Hyperparameter Tuning', 'Cross-Validation', 'Model Evaluation', 'XGBoost']],
  ['Deep Learning & Vision', ['PyTorch', 'TensorFlow', 'Keras', 'CNN', 'LSTM / GRU', 'YOLOv8', 'OpenCV', 'Segmentation', 'Transfer Learning']],
  ['NLP & LLMs', ['RAG', 'FAISS', 'Embeddings', 'Prompt Engineering', 'Hugging Face', 'NLTK', 'spaCy', 'Ollama', 'Fine-tuning']],
  ['Data & Visualization', ['Pandas', 'NumPy', 'EDA', 'Matplotlib', 'Seaborn', 'Plotly', 'Power BI', 'Tableau']],
  ['Statistics', ['SciPy', 'StatsModels', 'Hypothesis Testing', 'Probability']],
  ['Deployment & Tools', ['FastAPI', 'Streamlit', 'Django', 'Docker', 'MLflow', 'Weights & Biases', 'Git / GitHub', 'Cloud GPU', 'GCP', 'Firebase']],
];

const experience = [
  {
    date: 'Feb 2026 – Present', role: 'Software Developer Trainee', org: 'Mazo Solutions Pvt Ltd.',
    points: [
      'Build and train deep learning models for medical image classification, detection and segmentation on cloud GPUs.',
      'Develop end-to-end ML pipelines: preprocessing, cross-validated training, inference and evaluation.',
      'Tune models with threshold optimization and pseudo-labeling, measured by precision, recall, F1 and mAP.',
      'Write technical documentation so training pipelines can be reproduced and maintained.',
    ],
  },
  {
    date: 'Aug 2025 – Feb 2026', role: 'Artificial Intelligence Trainer', org: 'Edukators · Vetri Nichayam Scheme (with Cultus Education & Technology)',
    points: [
      'Trained 100+ students in Python, machine learning and deep learning.',
      'Guided 20+ end-to-end ML projects and mentored learners one-on-one.',
    ],
  },
  {
    date: 'Freelance', role: 'Power BI Developer', org: 'Client project',
    points: [
      'Delivered an interactive Power BI dashboard with data cleaning, modeling and optimized DAX measures.',
      'The client now retains me for monthly maintenance and enhancements.',
    ],
  },
];

type P = { t: string; d: string; tags: string[]; gh: string; demo?: string };
const featured: P[] = [
  { t: 'PDF Question-Answering with RAG', d: 'Offline RAG app that answers from uploaded PDFs with page-level citations and an "I don\'t know" fallback. Chunking, MiniLM embeddings, FAISS search, FLAN-T5, FastAPI and a web UI.', tags: ['RAG', 'FAISS', 'FastAPI', 'Hugging Face'], gh: GH + 'RAG' },
  { t: 'AI Resume Screening & ATS Scoring', d: 'Compares a PDF resume with a job description and returns an ATS match score with matched and missing skills. NLP pipeline with FastAPI and Streamlit interfaces.', tags: ['NLP', 'NLTK', 'FastAPI', 'Streamlit'], gh: GH + 'AI-RESUME-SCREENER' },
  { t: 'Real-Time Object Detection & Logging', d: 'YOLOv8 on live video at ~25 FPS. Logs each object\'s first appearance, saves cropped evidence and cuts duplicate detections by ~40%.', tags: ['YOLOv8', 'OpenCV', 'Computer Vision'], gh: GH + 'Time-Based-Real-Time-Object-Detection-and-Logging-System', demo: LI + 'artificialintelligence-computervision-deeplearning-ugcPost-7423278879772966912-zDiP' },
  { t: 'Real-Time Age & Emotion Detection', d: 'CNN-based system that detects faces from a webcam and predicts age group and facial emotion live.', tags: ['CNN', 'OpenCV', 'Deep Learning'], gh: GH + 'AGE-EMOTION-DETECTION', demo: LI + 'deeplearning-computervision-ai-ugcPost-7420485050481266690-_soJ' },
];
const more: P[] = [
  { t: 'Employee Attrition Prediction', d: 'Random Forest model with 87% accuracy after preprocessing and feature engineering.', tags: ['Random Forest', 'Python'], gh: GH + 'AI-Powered-Attrition-Prediction-System' },
  { t: 'Restaurant Rating Prediction', d: 'Rating regressor, cuisine classifier and a content-based recommender with location mapping.', tags: ['Scikit-learn', 'NLP'], gh: GH + 'Restaurant-ML-Project-Cognifyz' },
  { t: 'Stock Price Prediction App', d: 'BiLSTM + XGBoost model behind a FastAPI backend and Flutter app. Built for learning, not financial advice.', tags: ['BiLSTM', 'XGBoost', 'Flutter'], gh: GH + 'STOCK-PRICE-PREDICTION-ANDO-RECOMMENDATION' },
  { t: 'Tesla Stock Forecasting', d: 'LSTM and GRU forecasting on 3,400+ historical data points, with trend visualisation.', tags: ['LSTM', 'GRU', 'Plotly'], gh: GH + 'TESLA-STOCK-DATA-ANALYSIS' },
  { t: 'COVID-19 & Loan Data Analysis', d: 'Cleaning, EDA and statistical analysis with clear visual insights.', tags: ['EDA', 'Pandas', 'Matplotlib'], gh: GH + 'Covid_Data-Loan_Data-Analysis' },
];

const education = [
  ['2023 – 2025', 'M.Sc. Data Science', 'Bharathiar University, Coimbatore', 'Statistics, data mining, machine learning, deep learning, big data analytics.'],
  ['2020 – 2023', 'B.Sc. Statistics', 'Government Arts College, Coimbatore', 'Probability, statistical inference, time series, design of experiments, econometrics.'],
  ['Mar 2020', 'Higher Secondary (HSC)', 'Government Higher Secondary School, Andipatti', 'Maths, Physics, Chemistry, Biology · Tamil Nadu State Board.'],
  ['Mar 2018', 'Secondary School (SSLC)', 'Government Higher Secondary School, Andipatti', 'School 2nd Rank · Tamil Nadu State Board.'],
];

const D = 'https://drive.google.com/file/d/';
const certs: [string, string, string, string][] = [
  ['Data Analytics Job Simulation', 'Deloitte (Forage)', 'Jul 2025', 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_A2G6oRzJ8WAaeowbF_1753936286372_completion_certificate.pdf'],
  ['Data Science Internship', 'Internship Studio', 'Oct 2025', D + '1wOvZ3B4fbuh-3tFu5OiugxCIi8Ko7szw/view'],
  ['Artificial Intelligence Internship', 'Novi Tech', 'Aug 2025', D + '1xUlpQ928veBJgX-WM6vS5pjh8SoeAYwv/view?usp=sharing'],
  ['Machine Learning Internship', 'Novi Tech', 'Aug 2025', D + '1mCPBRMEL5aZqpYfeJhCf9psucS3jQEsb/view?usp=sharing'],
  ['Data Analytics Internship', 'Novi Tech', 'Aug 2025', D + '1Io9Fz3PRtZL6GlMkivMgU91sXCrurqCG/view?usp=sharing'],
  ['Data Analytics MasterClass', 'Novi Tech', 'Aug 2025', D + '1amKvqXw9DvdhHI0Qbnka4vPEhba_45Cj/view?usp=sharing'],
  ['Power BI Certification', 'IBacus Tech', 'Jun 2024', D + '1JTj4h70ifflcQOyOdpm4L6khlwqTa_7-/view'],
  ['Data Analytics with Python', 'NPTEL · NPTEL24CS20S970100116', 'Apr 2024', D + '14IM9GwGVTrt8vNB6ysPOBb6mSoIKrB9t/view'],
  ["NCC 'C' Certificate", 'Ministry of Defence', 'Jul 2023', D + '1skiDWC0OPxMLMzfLSGQNIYbOxMrMRZ06/view?usp=sharing'],
  ['Soft Skills Training', 'Infosys BPM', 'Sep 2024', D + '1soPxidFEVhyK82ePuNDzj_KQ0I2J62pA/view'],
  ['Soft Skills Training', 'TN State Council for Higher Education', 'Apr 2023', D + '1sqvcza12IGTJfk0Z_6zX-H7Mp6xPdkqR/view?usp=sharing'],
];

const Card = ({ p }: { p: P }) => (
  <article className="card project reveal">
    <div className="bar"><i /><i /><i /><code>{p.gh.split('/').pop()}</code></div>
    <h3>{p.t}</h3>
    <p>{p.d}</p>
    <div className="tags">{p.tags.map((x) => <span key={x}>{x}</span>)}</div>
    <div className="links">
      <a href={p.gh} target="_blank" rel="noopener noreferrer"><Github size={16} /> Code</a>
      {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer">Demo <ArrowUpRight size={16} /></a>}
    </div>
  </article>
);

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="section">
    <div className="wrap">
      <h2 className="reveal"><span>{String(nav.indexOf(id) + 1).padStart(2, '0')}</span>{title}</h2>
      {children}
    </div>
  </section>
);

const Index = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="site">
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#home" className="logo">Kesavan<b>.</b></a>
          <nav className={open ? 'links-nav open' : 'links-nav'}>
            {nav.map((n) => <a key={n} href={'#' + n} onClick={() => setOpen(false)}>{n}</a>)}
          </nav>
          <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="wrap hero-in">
          <div className="hero-text">
            <p className="hello">&gt; hi, I'm Kesavan E<i className="caret" /></p>
            <h1>
              <TypeAnimation sequence={['Machine Learning Engineer', 2200, 'Data Scientist', 2200, 'AI Engineer', 2200]} speed={50} repeat={Infinity} wrapper="span" />
            </h1>
            <p className="sub">I build machine learning systems for computer vision, medical imaging and LLM applications. Currently a Software Developer Trainee at Mazo Solutions, with an M.Sc. in Data Science and a B.Sc. in Statistics.</p>
            <div className="cta">
              <a className="btn primary" href="#contact">Contact me</a>
              <a className="btn ghost" href="/assets/Kesavan_E_Resume.pdf" target="_blank" rel="noopener noreferrer"><Download size={16} /> Resume</a>
            </div>
            <div className="social">
              <a href="https://www.linkedin.com/in/kesavan-elumalai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href="https://github.com/kesavanelumalai" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
              <a href="mailto:kesavan20021111@gmail.com" aria-label="Email"><Mail /></a>
            </div>
          </div>
          <div className="photo"><img src="/assets/kesavan.jpeg" alt="Kesavan E" /><span className="chip c1">PyTorch</span><span className="chip c2">YOLOv8</span><span className="chip c3">RAG</span></div>
        </div>
        <div className="wrap stats">
          {[['8+', 'projects completed'], ['1+', 'year of experience'], ['100+', 'students trained']].map(([a, b]) => (
            <div key={b}><strong>{a}</strong><span>{b}</span></div>
          ))}
        </div>
      </section>

      <Section id="about" title="About">
        <p className="lead reveal">I'm a machine learning engineer who enjoys taking a model from raw data to a working API or app. At Mazo Solutions I train deep learning models for medical imaging tasks; outside work I build projects in RAG, NLP and real-time computer vision. My statistics background keeps me focused on validation and honest evaluation.</p>
        <div className="grid3">
          {focus.map(([t, d]) => <div className="card reveal" key={t}><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="skills">
          {skills.map(([g, items]) => (
            <div className="card reveal" key={g}>
              <h3>{g}</h3>
              <div className="tags">{items.map((x) => <span key={x}>{x}</span>)}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="timeline">
          {experience.map((e) => (
            <div className="tl reveal" key={e.role}>
              <span className="date">{e.date}</span>
              <h3>{e.role}</h3>
              <h4>{e.org}</h4>
              <ul>{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid2">{featured.map((p) => <Card key={p.t} p={p} />)}</div>
        <h3 className="sub-h reveal">More projects</h3>
        <div className="grid2 more">{more.map((p) => <Card key={p.t} p={p} />)}</div>
      </Section>

      <Section id="education" title="Education">
        <div className="timeline">
          {education.map(([d, t, o, x]) => (
            <div className="tl reveal" key={t}>
              <span className="date">{d}</span><h3>{t}</h3><h4>{o}</h4><p>{x}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="certifications" title="Certifications">
        <div className="grid2 certs">
          {certs.map(([t, o, d, u]) => (
            <a className="card cert reveal" href={u} target="_blank" rel="noopener noreferrer" key={t + o}>
              <span className="date">{d}</span><h3>{t}</h3><p>{o}</p><em>View certificate <ArrowUpRight size={14} /></em>
            </a>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="contact">
          <div className="reveal">
            <p className="lead">Have a role, project or question? I'd be glad to hear from you.</p>
            <p className="line"><Mail size={18} /> kesavan20021111@gmail.com</p>
            <p className="line"><MapPin size={18} /> Coimbatore, Tamil Nadu, India</p>
          </div>
          <form className="card reveal" action="https://formspree.io/f/mjkqwgwp" method="POST">
            <input name="name" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Your email" required />
            <textarea name="message" rows={5} placeholder="Your message" required />
            <button className="btn primary" type="submit">Send message</button>
          </form>
        </div>
      </Section>

      <footer className="foot">© {new Date().getFullYear()} Kesavan E</footer>
    </div>
  );
};

export default Index;