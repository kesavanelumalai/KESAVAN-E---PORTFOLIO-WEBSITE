import { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, MapPin, ArrowUpRight, Download, Menu, X, Phone, MessageCircle, Copy, Check } from 'lucide-react';

const GH = 'https://github.com/kesavanelumalai/';
const LI = 'https://www.linkedin.com/posts/kesavan-elumalai_';

const nav = ['about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];

// Contact details used by the Hire me popup. Edit here, or delete a row below.
const CONTACT = { email: 'kesavan20021111@gmail.com', phone: '+919361816131', phoneShow: '+91 93618 16131' };

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
    date: 'Feb 2026 – Present', role: 'Software Developer Trainee', org: 'Mazo Solutions Pvt Ltd.', logo: '/assets/logos/mazo.jpg',
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


const BG = { density: 1 / 15000, maxNodes: 110, link: 150, speed: 0.22, mouseRadius: 190, pulseEvery: 700, cyan: '34,211,238', violet: '167,139,250' };
type Dot = { x: number; y: number; vx: number; vy: number; r: number; hue: 0 | 1 };
type Pl = { a: number; b: number; t: number };

const AnimatedBackground = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas ? canvas.getContext('2d') : null;
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, dpr = 1, raf = 0, last = 0, lastPulse = 0;
    let nodes: Dot[] = [];
    let pulses: Pl[] = [];
    const mouse = { x: -9999, y: -9999, on: false };
    const rgba = (hue: 0 | 1, a: number) => 'rgba(' + (hue ? BG.violet : BG.cyan) + ',' + a + ')';

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(BG.maxNodes, Math.round(w * h * BG.density));
      nodes = Array.from({ length: count }, () => {
        const ang = Math.random() * Math.PI * 2;
        const sp = BG.speed * (0.4 + Math.random() * 0.8);
        return { x: Math.random() * w, y: Math.random() * h, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
          r: 1.2 + Math.random() * 1.8, hue: (Math.random() < 0.25 ? 1 : 0) as 0 | 1 };
      });
      pulses = [];
    };

    const draw = (dt: number, now: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx * dt; n.y += n.vy * dt;
        if (n.x < -20) n.x = w + 20; else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20; else if (n.y > h + 20) n.y = -20;
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 > BG.link * BG.link) continue;
          const k = 1 - Math.sqrt(d2) / BG.link;
          let boost = 0;
          if (mouse.on) {
            const mx = (a.x + b.x) / 2 - mouse.x, my = (a.y + b.y) / 2 - mouse.y;
            const md = Math.sqrt(mx * mx + my * my);
            if (md < BG.mouseRadius) boost = (1 - md / BG.mouseRadius) * 0.45;
          }
          ctx.strokeStyle = rgba(a.hue, 0.14 * k + boost * k);
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      for (const n of nodes) {
        let glow = 0;
        if (mouse.on) {
          const dx = n.x - mouse.x, dy = n.y - mouse.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < BG.mouseRadius) glow = 1 - d / BG.mouseRadius;
        }
        ctx.fillStyle = rgba(n.hue, 0.45 + glow * 0.5);
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + glow * 2.2, 0, Math.PI * 2); ctx.fill();
        if (glow > 0.15) {
          ctx.fillStyle = rgba(n.hue, glow * 0.12);
          ctx.beginPath(); ctx.arc(n.x, n.y, 16 + glow * 14, 0, Math.PI * 2); ctx.fill();
        }
      }
      if (now - lastPulse > BG.pulseEvery && nodes.length > 2 && pulses.length < 14) {
        lastPulse = now;
        const a = Math.floor(Math.random() * nodes.length);
        let best = -1, bestD = BG.link * BG.link;
        for (let j = 0; j < nodes.length; j++) {
          if (j === a) continue;
          const dx = nodes[a].x - nodes[j].x, dy = nodes[a].y - nodes[j].y, d2 = dx * dx + dy * dy;
          if (d2 < bestD && Math.random() < 0.5) { bestD = d2; best = j; }
        }
        if (best >= 0) pulses.push({ a, b: best, t: 0 });
      }
      pulses = pulses.filter((p) => p.t < 1);
      for (const p of pulses) {
        p.t += dt * 0.012;
        const a = nodes[p.a], b = nodes[p.b];
        if (!a || !b) continue;
        const x = a.x + (b.x - a.x) * p.t, y = a.y + (b.y - a.y) * p.t;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 14);
        g.addColorStop(0, 'rgba(255,255,255,' + 0.9 * (1 - p.t * 0.4) + ')');
        g.addColorStop(0.25, rgba(0, 0.55));
        g.addColorStop(1, rgba(0, 0));
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 14, 0, Math.PI * 2); ctx.fill();
      }
    };

    const loop = (now: number) => {
      const dt = Math.min(48, now - last) / 16.67 || 1;
      last = now; draw(dt, now); raf = requestAnimationFrame(loop);
    };
    const start = () => { cancelAnimationFrame(raf); last = performance.now(); raf = requestAnimationFrame(loop); };
    const stop = () => cancelAnimationFrame(raf);
    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.on = true; };
    const onLeave = () => { mouse.on = false; };
    const onResize = () => { build(); if (reduce) draw(0, 0); };
    const onVis = () => { if (document.hidden) stop(); else if (!reduce) start(); };

    build();
    if (reduce) draw(0, 0); else start();
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-aurora"><i className="a1" /><i className="a2" /><i className="a3" /></div>
      <canvas ref={ref} className="bg-net" />
      <div className="bg-vignette" />
    </div>
  );
};


const NeuralCursor = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const cx = canvas ? canvas.getContext('2d') : null;
    if (!canvas || !cx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const lead = reduce ? 1 : 0.45, follow = reduce ? 1 : 0.32;
    if (fine) document.documentElement.classList.add('nc');
    let raf = 0, on = false, hov = false, typing = false, a = 0, lastTouch = 0;
    const m = { x: 0, y: 0 };
    const chain = Array.from({ length: 10 }, () => ({ x: 0, y: 0 }));
    let ripples: { x: number; y: number; t: number }[] = [];

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const glow = (x: number, y: number, rad: number) => {
      const g = cx.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, 'rgba(255,255,255,1)');
      g.addColorStop(0.25, 'rgba(34,211,238,.6)');
      g.addColorStop(1, 'rgba(34,211,238,0)');
      cx.fillStyle = g;
      cx.beginPath(); cx.arc(x, y, rad, 0, Math.PI * 2); cx.fill();
    };
    const frame = () => {
      cx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      a = Math.max(0, Math.min(1, a + (on ? 0.25 : -0.05)));
      if (a > 0.01 && !typing) {
        cx.globalAlpha = a;
        chain[0].x += (m.x - chain[0].x) * lead;
        chain[0].y += (m.y - chain[0].y) * lead;
        for (let i = 1; i < chain.length; i++) {
          chain[i].x += (chain[i - 1].x - chain[i].x) * follow;
          chain[i].y += (chain[i - 1].y - chain[i].y) * follow;
        }
        cx.lineWidth = 1.2;
        for (let i = 1; i < chain.length; i++) {
          cx.strokeStyle = 'rgba(34,211,238,' + 0.6 * (1 - i / chain.length) + ')';
          cx.beginPath(); cx.moveTo(chain[i - 1].x, chain[i - 1].y); cx.lineTo(chain[i].x, chain[i].y); cx.stroke();
        }
        for (let i = chain.length - 1; i > 0; i--) {
          cx.fillStyle = (i % 3 === 0 ? 'rgba(167,139,250,' : 'rgba(34,211,238,') + 0.8 * (1 - i / chain.length) + ')';
          cx.beginPath(); cx.arc(chain[i].x, chain[i].y, 2.6 * (1 - i / chain.length) + 0.6, 0, Math.PI * 2); cx.fill();
        }
        glow(chain[0].x, chain[0].y, hov ? 22 : 15);
        if (hov) {
          cx.strokeStyle = 'rgba(34,211,238,.7)'; cx.lineWidth = 1.5;
          cx.beginPath(); cx.arc(chain[0].x, chain[0].y, 20, 0, Math.PI * 2); cx.stroke();
        }
        cx.globalAlpha = 1;
      }
      ripples = ripples.filter((r) => r.t < 1);
      for (const r of ripples) {
        r.t += 0.035;
        cx.strokeStyle = 'rgba(34,211,238,' + 0.7 * (1 - r.t) + ')';
        cx.lineWidth = 2;
        cx.beginPath(); cx.arc(r.x, r.y, 8 + r.t * 46, 0, Math.PI * 2); cx.stroke();
      }
      raf = (on || a > 0.01 || ripples.length) ? requestAnimationFrame(frame) : 0;
    };
    const ensure = () => { if (!raf) raf = requestAnimationFrame(frame); };
    const ripple = (x: number, y: number) => { if (!typing) ripples.push({ x, y, t: 0 }); ensure(); };
    const begin = (x: number, y: number, target: EventTarget | null) => {
      if (!on || a < 0.05) chain.forEach((c) => { c.x = x; c.y = y; });
      m.x = x; m.y = y; on = true;
      const t = target as HTMLElement | null;
      hov = !!(t && t.closest && t.closest('a,button,[role="button"],.card'));
      typing = !!(t && t.closest && t.closest('input,textarea'));
      ensure();
    };

    const onMouseMove = (e: MouseEvent) => { if (Date.now() - lastTouch < 800) return; begin(e.clientX, e.clientY, e.target); };
    const onMouseDown = (e: MouseEvent) => { if (Date.now() - lastTouch < 800) return; ripple(e.clientX, e.clientY); };
    const onLeave = () => { on = false; };
    const onTouchStart = (e: TouchEvent) => {
      lastTouch = Date.now();
      const t = e.touches[0];
      if (!t) return;
      begin(t.clientX, t.clientY, e.target);
      ripple(t.clientX, t.clientY);
    };
    const onTouchMove = (e: TouchEvent) => {
      lastTouch = Date.now();
      const t = e.touches[0];
      if (!t) return;
      m.x = t.clientX; m.y = t.clientY; on = true; ensure();
    };
    const onTouchEnd = () => { lastTouch = Date.now(); on = false; };

    size();
    window.addEventListener('resize', size);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('touchcancel', onTouchEnd, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove('nc');
      window.removeEventListener('resize', size);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
    };
  }, []);
  return <canvas ref={ref} className="nc-canvas" aria-hidden="true" />;
};

const Index = () => {
  const [open, setOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [copied, setCopied] = useState('');
  const [active, setActive] = useState('home');
  const navRef = useRef<HTMLElement>(null);
  const [ink, setInk] = useState({ left: 0, width: 0, on: false });

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);


  useEffect(() => {
    const spy = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['home', ...nav].forEach((id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    const place = () => {
      const a = navRef.current?.querySelector<HTMLElement>('a.on');
      setInk((p) => (a ? { left: a.offsetLeft, width: a.offsetWidth, on: true } : { ...p, on: false }));
    };
    place();
    window.addEventListener('resize', place);
    return () => window.removeEventListener('resize', place);
  }, [active]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const c = (e.target as HTMLElement).closest<HTMLElement>('.card');
      if (!c) return;
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', e.clientX - r.left + 'px');
      c.style.setProperty('--my', e.clientY - r.top + 'px');
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);


  useEffect(() => {
    if (!hireOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setHireOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [hireOpen]);

  const copy = async (text: string, key: string) => {
    try { await navigator.clipboard.writeText(text); }
    catch { const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); document.execCommand('copy'); t.remove(); }
    setCopied(key);
    setTimeout(() => setCopied(''), 1800);
  };

  const hireRows = [
    { key: 'mail', icon: <Mail size={20} />, label: 'Send an email', value: CONTACT.email, copy: CONTACT.email, ext: false,
      href: 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent('Hiring enquiry from your portfolio') + '&body=' + encodeURIComponent('Hi Kesavan,\n\nI would like to discuss a project or role.\n\nName:\nCompany:\nWhat I need:\n') },
    { key: 'call', icon: <Phone size={20} />, label: 'Call me', value: CONTACT.phoneShow, copy: CONTACT.phone, ext: false, href: 'tel:' + CONTACT.phone },
    { key: 'wa', icon: <MessageCircle size={20} />, label: 'WhatsApp', value: 'Chat with me', copy: '', ext: true,
      href: 'https://wa.me/' + CONTACT.phone.replace('+', '') + '?text=' + encodeURIComponent('Hi Kesavan, I found your portfolio and would like to talk.') },
  ];

  return (
    <div className="site">
      <AnimatedBackground />
      <NeuralCursor />
      <div className="progress" aria-hidden="true" />
      {hireOpen && (
        <div className="hm-back" onClick={() => setHireOpen(false)}>
          <div className="hm" role="dialog" aria-modal="true" aria-labelledby="hm-title" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="hm-x" aria-label="Close" onClick={() => setHireOpen(false)}><X size={18} /></button>
            <p className="hello">&gt; open to opportunities</p>
            <h3 id="hm-title">Let's work together</h3>
            <p className="hm-sub">Choose whichever is easiest for you.</p>
            {hireRows.map((r) => (
              <div className="hm-row" key={r.key}>
                <a className="hm-main" href={r.href} target={r.ext ? '_blank' : undefined} rel={r.ext ? 'noopener noreferrer' : undefined}>
                  <span className="hm-ic">{r.icon}</span>
                  <span><b>{r.label}</b><small>{r.value}</small></span>
                </a>
                {r.copy && (
                  <button type="button" className="hm-copy" onClick={() => copy(r.copy, r.key)}>
                    {copied === r.key ? <><Check size={15} /> Copied</> : <><Copy size={15} /> Copy</>}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="top-social">
              <a href="https://www.linkedin.com/in/kesavan-elumalai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href="https://github.com/kesavanelumalai" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
              <a href="mailto:kesavan20021111@gmail.com" aria-label="Email"><Mail /></a>
            </div>
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#home" className="logo">Kesavan<b>.</b></a>
          <nav ref={navRef} className={open ? 'links-nav open' : 'links-nav'}>
            <span className={ink.on ? 'ink show' : 'ink'} style={{ left: ink.left, width: ink.width }} aria-hidden="true" />
            {nav.map((n) => (
              <a key={n} href={'#' + n} className={active === n ? 'on' : undefined} onClick={() => setOpen(false)}>{n}</a>
            ))}
            <a href="#contact" role="button" className="hire" onClick={(e) => { e.preventDefault(); setOpen(false); setHireOpen(true); }}>Hire me</a>
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
            <p className="sub">I turn messy data into reliable, production-ready machine learning solutions. As an end-to-end engineer, I own the entire lifecycle—from data cleaning and model training to deployment and evaluation. Whether building applications in computer vision, NLP, or LLMs, my background in statistics ensures that my results are always rigorous, measurable, and built to scale.</p>
            <div className="cta">
              <a className="btn primary" href="#contact">Contact me</a>
              <a className="btn ghost" href="/assets/Kesavan_E_Data_Scientist.pdf" target="_blank" rel="noopener noreferrer"><Download size={16} /> Resume</a>
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
              {e.logo && <span className="co-logo"><img src={e.logo} alt={e.org + ' logo'} /></span>}
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