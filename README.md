import { TypeAnimation } from 'react-type-animation';

const Index = () => {
  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="portfolio-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">KESAVAN E</span>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#certifications" className="nav-link">Certifications</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="particles-bg">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="hero-content">
          {/* Left: Photo */}
          <div className="hero-left">
            <div className="hero-photo">
              <img
                src="/assets/kesavan.jpeg"
                alt="Kesavan E photo"
                className="profile-image"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="hero-right">
            <div className="hero-3d-icons">
              <div className="icon-3d icon-code"></div>
              <div className="icon-3d icon-design"></div>
              <div className="icon-3d icon-mobile"></div>
            </div>

            <h1 className="hero-title">
              <TypeAnimation
                sequence={[
                  'Data Scientist', 2500,
                  'ML Engineer', 2500,
                  'Data Analyst', 2500,
                  'AI Engineer', 2500,
                  'Data Engineer', 2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="title-line"
              />
            </h1>

            <p className="hero-subtitle">
              AI/ML Engineer and Power BI Developer with strong expertise in building accurate prediction models, interactive dashboards, and scalable end-to-end data solutions. Skilled in Python, deep learning, and real-time analytics, with hands-on experience delivering full-stack applications and impactful business insights. Focused on creating intelligent, reliable systems and dashboards that drive smart decision-making <br />

            </p>

            <div className="hero-buttons">
              <a href="#contact" className="cta-button primary">Contact Me</a>
              <a href="/assets/KESAVAN_RESUME.pdf" className="cta-button secondary" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/kesavan-elumalai/"
                className="social-link linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src="/assets/linkedin.png"
                  className="social-icon"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://github.com/kesavanelumalai"
                className="social-link github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img
                  src="/assets/github.png"
                  className="social-icon"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-blur-bg"></div>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-paragraph">
                I’m Kesavan E, a Data Science graduate with a strong foundation in Statistics and a passion for creating intelligent, real-world AI solutions. With a B.Sc. in Statistics and an M.Sc. in Data Science,
                I specialize in machine learning, deep learning, data analytics, and full-stack model deployment using Python, SQL, TensorFlow, Keras, FastAPI, Power BI, and Scikit-learn.
              </p>
              <p className="about-paragraph">
                I’ve built several impactful projects, including a hybrid BiLSTM + XGBoost stock prediction and recommendation system, fully integrated into a Flutter mobile application through a FastAPI backend,
                enabling real-time predictions for major Indian stocks. I have also developed LSTM and GRU-based forecasting models for Tesla stock data using over 3,400 points, focusing on accuracy, sequence modeling, and real-time insights.
              </p>
              <p className="about-paragraph">
                Alongside this, I work on data analytics and BI solutions, including a recently completed freelancing Power BI project where I built an interactive dashboard system for a client. The project was successfully implemented,
                and the client was highly satisfied—resulting in an ongoing request for monthly maintenance and updates, reflecting the quality and reliability of my work.
              </p>
              <p className="about-paragraph">
                My personal projects also include COVID-19 trend analysis, loan data exploration, and time-series statistical studies using SPSS, along with interactive reports using Power BI and Python. My work blends statistical reasoning,
                clean engineering practices, and deep learning techniques to deliver solutions that are accurate, scalable, and user-focused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="section-blur-bg"></div>
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            <div className="education-item">
              <div className="education-date">2023 - 2025</div>
              <div className="education-content">
                <h3 className="education-title">M.Sc. in Data Science</h3>
                <h4 className="education-institution">Bharathiar University, Coimbatore</h4>
                <p className="education-description">
                  This postgraduate program provided a strong foundation in both theoretical and applied aspects of data science.<br /><br />
                  <strong>Core Areas:</strong> Data Science, Statistics, Data Mining, Multivariate Data Analysis<br />
                  <strong>Foundational Skills:</strong> Python Programming, Probability and Statistics, DBMS, Matlab, R, Power BI<br />
                  <strong>Advanced Topics:</strong> Machine Learning, Deep Learning Techniques, Big Data Analytics, IoT, Data Privacy and Security<br /><br />
                  Throughout the program, I gained hands-on experience in building predictive models, performing statistical analysis, and working with large-scale datasets using modern tools and technologies like Python, SQL, TensorFlow, and more.
                </p>


              </div>
            </div>

            <div className="education-item">
              <div className="education-date">2020 - 2023</div>
              <div className="education-content">
                <h3 className="education-title">B.Sc. in Statistics</h3>
                <h4 className="education-institution">Government of Arts College, Coimbatore</h4>
                <p className="education-description">
                  This undergraduate program provided a strong foundation in statistical theory and applied methods, with exposure to programming, analytics, and mathematical modeling.<br /><br />
                  <strong>Core Areas:</strong> Descriptive Statistics, Probability and Distributions, Time Series & Index Numbers, Statistical Inference, Design of Experiments, Basic Sampling Theory, Statistical Quality Control<br />
                  <strong>Applied Skills:</strong> Elements of Econometrics, Operations Research, Actuarial Science, Psychological Statistics, Demographic Methods<br />
                  <strong>Tools & Technologies:</strong> C Programming for Statistical Analysis, Numerical Analysis, Optimization Techniques, Office Automation<br /><br />
                  Completed practical labs and a final project with viva voce, demonstrating strong applied analytical skills.
                </p>


              </div>
            </div>

            <div className="education-item">
              <div className="education-date">Mar 2020</div>
              <div className="education-content">
                <h3 className="education-title">12th Standard (HSC)</h3>
                <h4 className="education-institution">Government Higher Secondary School, Andipatti, Tiruvannamalai District</h4>
                <p className="education-description">
                  Completed Higher Secondary (Class 12) with a focus on Mathematics, Physics, Chemistry and Biology under the Tamil Nadu State Board.
                </p>

              </div>
            </div>

            <div className="education-item">
              <div className="education-date">Mar 2018</div>
              <div className="education-content">
                <h3 className="education-title">10th Standard (SSLC)</h3>
                <h4 className="education-institution">Governmen Higher Secondary School, Andipatti, Tiruvannamalai District</h4>
                <p className="education-description">
                  Completed Secondary Schooling (Class 10) under the Tamil Nadu State Board with core subjects in Tamil, English, Mathematics, Science, and Social Science.
                  <br />
                  Secured the School 2nd Rank in the final examinations.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-blur-bg"></div>
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-date">Aug 2025 - Present</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Artificial Intelligence Trainer </h3>
                <h4 className="timeline-company">Edukators Under Cultus Education and Technologies</h4>
                <p className="timeline-description">
                  Developed and delivered training sessions on foundational and advanced AI/ML concepts, helping learners build practical skills in machine learning, Python programming, and data analytics. Guided students through hands-on projects, including supervised learning models, deep learning fundamentals,
                  and data preprocessing workflows. Additionally, provided one-on-one mentorship, clarified complex topics, and assisted learners in building confidence to implement real-world AI applications.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">Freelance</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Power BI Devoleper</h3>
                <h4 className="timeline-company">Freelancing Project</h4>
                <p className="timeline-description">
                  Designed and developed a fully interactive Power BI dashboard system tailored to the client’s business needs, including data cleaning, modeling, and visual storytelling for clear decision-making insights. Delivered a complete end-to-end BI solution with automated updates and performance-optimized DAX measures.
                  The project was successfully implemented, and the client expressed high satisfaction—resulting in an ongoing request for monthly maintenance, enhancements, and support.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">

            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div className="project-image" style={{ backgroundImage: "url('/assets/attrition_prediction.png')" }}></div>
                  <h3 className="project-title">AI - Powered Attrition Prediction System</h3>
                  <p className="project-description"> Employees Attrition Prediction Using Python & Random Forest Classifier</p>
                </div>
                <div className="project-card-back">
                  <div className="project-details">
                    <h3>Attrition Prediction</h3>
                    <p>Built an employee attrition prediction model using Random Forest, achieving 87% accuracy after preprocessing and feature engineering.</p>
                    <div className="project-tech">
                      <span className="tech-tag">Data Science</span>
                      <span className="tech-tag">Machine Learning</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Feature Engineering</span>
                      <span className="tech-tag">Attrition Prediction</span>
                    </div>
                    <div className="project-links">
                      <a href="https://github.com/kesavanelumalai/AI-Powered-Attrition-Prediction-System" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div className="project-image-2" style={{ backgroundImage: "url('/assets/restaurant.jpeg')" }}></div>
                  <h3 className="project-title">Restaurant Rating Prediction</h3>
                  <p className="project-description">Restaurant Rating Prediction using Python & ML alogirthms</p>
                </div>
                <div className="project-card-back">
                  <div className="project-details">
                    <h3>Restaurant Prediction</h3>
                    <p>Built a restaurant rating predictor using Linear Regression and a cuisine classifier using Random Forest.
                      Developed a content-based restaurant recommendation system with interactive location mapping.</p>
                    <div className="project-tech">
                      <span className="tech-tag">Visualization tools</span>
                      <span className="tech-tag">python</span>
                      <span className="tech-tag">Scikit-Learn</span><span className="tech-tag">NLP</span>
                      <span className="tech-tag">Random Forest & Linear Regression</span>
                    </div>
                    <div className="project-links">
                      <a href="https://github.com/kesavanelumalai/Restaurant-ML-Project-Cognifyz" className="project-link">View Demo</a>
                      <a href="https://github.com/kesavanelumalai/Restaurant-ML-Project-Cognifyz" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div className="project-image-3" style={{ backgroundImage: "url('/assets/stockprice.jpeg')" }}></div>
                  <h3 className="project-title">Stock Price Prediction And Recommendation System</h3>
                  <p className="project-description">Recommendation System With BiLSTM + XGBoost using Flutter and FastAPI</p>
                </div>
                <div className="project-card-back">
                  <div className="project-details">
                    <h3>Stock Price Prediction And Recommendation System</h3>
                    <p>AI-powered stock price prediction and recommendation system using BiLSTM + XGBoost with real-time API integration, achieving high forecasting accuracy.
                      Built and deployed using Python, FastAPI, and Flutter for interactive mobile visualization.</p>
                    <div className="project-tech">
                      <span className="tech-tag">Deep Learning</span>
                      <span className="tech-tag">FastAPI</span>
                      <span className="tech-tag">Flutter</span>
                      <span className="tech-tag">TensorFlow</span>
                      <span className="tech-tag">XGBoost</span>
                    </div>
                    <div className="project-links">
                      <a href="https://github.com/kesavanelumalai/STOCK-PRICE-PREDICTION-ANDO-RECOMMENDATION" className="project-link">View Demo</a>
                      <a href="https://github.com/kesavanelumalai/STOCK-PRICE-PREDICTION-ANDO-RECOMMENDATION" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div className="project-image-4" style={{ backgroundImage: "url('/assets/tesla.png')" }}></div>
                  <h3 className="project-title">Tesla Stock Data Analysis</h3>
                  <p className="project-description">Data visualization with Python, Matplotlib, Plotly,Seaborn</p>
                </div>
                <div className="project-card-back">
                  <div className="project-details">
                    <h3>Tesla Stock Data Analysis</h3>
                    <p>Tesla Stock Data Analysis using LSTM and GRU models for time-series forecasting, achieving high prediction accuracy and trend analysis.
                      Focused on deep learning techniques with Python, Pandas, and Matplotlib for data preprocessing, visualization, and evaluation.</p>
                    <div className="project-tech">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Matplotlib</span>
                      <span className="tech-tag">Seaborn</span>
                      <span className="tech-tag">Pandas</span>
                      <span className="tech-tag">LSTM</span>
                      <span className="tech-tag">GRU</span>
                    </div>
                    <div className="project-links">
                      <a href="https://github.com/kesavanelumalai/TESLA-STOCK-DATA-ANALYSIS" className="project-link">View Demo</a>
                      <a href="https://github.com/kesavanelumalai/TESLA-STOCK-DATA-ANALYSIS" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-card-inner">
                <div className="project-card-front">
                  <div className="project-image-4" style={{ backgroundImage: "url('/assets/covid19.jpeg')" }}></div>
                  <h3 className="project-title">COVID-19 Trend Analysis</h3>
                  <p className="project-description">Data visualization and trend analysis using Python </p>
                </div>
                <div className="project-card-back">
                  <div className="project-details">
                    <h3>COVID - 19 and Loan Data Analysis</h3>
                    <p>COVID-19 & Loan Data Analysis using Python, applying statistical and ML techniques to clean, explore, and visualize data for meaningful insights.</p>
                    <div className="project-tech">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Matplotlib</span>
                      <span className="tech-tag">EDA</span>
                      <span className="tech-tag">Statistical Analysis</span>
                      <span className="tech-tag">Pandas</span>
                      <span className="tech-tag">Data Cleaning and Preprocessing</span>
                    </div>
                    <div className="project-links">
                      <a href="https://github.com/kesavanelumalai/TESLA-STOCK-DATA-ANALYSIS" className="project-link">View Demo</a>
                      <a href="https://github.com/kesavanelumalai/TESLA-STOCK-DATA-ANALYSIS" className="project-link">GitHub</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-blur-bg"></div>
        <div className="container">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3 className="category-title">Programming Languages</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-95"></div>
                  <h4 className="skill-name">Python</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">R</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span className="skill-percentage">65%</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Machine Learning & AI</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">Machine Learning Algorithms</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '93%' }}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">Supervised & Unsupervised Learning</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '93%' }}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">Deep Learning</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">Scikit-learn</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">TensorFlow</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-80"></div>
                  <h4 className="skill-name">Keras</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-75"></div>
                  <h4 className="skill-name">PyTorch</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">Convolutional Neural Networks (CNNs)</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">Model Evaluation</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Natural Language Processing (NLP)</h3>
              <div className="skills-grid">

                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">Large Language Models (LLMs)</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>

                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">Text Preprocessing</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '93%' }}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">Tokenization</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">Lemmatization</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">Sentiment Analysis</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">Named Entity Recognition (NER)</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-80"></div>
                  <h4 className="skill-name">Topic Modeling</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-75"></div>
                  <h4 className="skill-name">Transformers</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Data Analysis & Manipulation</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-95"></div>
                  <h4 className="skill-name">Pandas</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">NumPy</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '93%' }}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">SQL</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name"> Exploratory Data Analysis (EDA)</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '93%' }}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">Data Cleaning</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-80"></div>
                  <h4 className="skill-name">Data Wrangling</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                  <span className="skill-percentage">80%</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Data Visualization</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-95"></div>
                  <h4 className="skill-name">Matplotlib</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-80"></div>
                  <h4 className="skill-name">Seaborn</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-90"></div>
                  <h4 className="skill-name">Plotly</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-95"></div>
                  <h4 className="skill-name">Power BI</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                  <span className="skill-percentage">95%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-75"></div>
                  <h4 className="skill-name">Tableau</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-98"></div>
                  <h4 className="skill-name">Canva</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '98%' }}></div>
                  </div>
                  <span className="skill-percentage">98%</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Web & App Development</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">Django</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '93%' }}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">Streamlit</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '93%' }}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>

              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Statistics & Math Libraries</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">SciPy</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-80"></div>
                  <h4 className="skill-name">StatsModels</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-98"></div>
                  <h4 className="skill-name">Probability & Distributions</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '98%' }}></div>
                  </div>
                  <span className="skill-percentage">98%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-95"></div>
                  <h4 className="skill-name">Hypothesis Testing</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                  </div>
                  <span className="skill-percentage">95%</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Cloud & Dev Tools</h3>
              <div className="skills-grid">
                <div className="skill-card">
                  <div className="skill-icon skill-icon-85"></div>
                  <h4 className="skill-name">Anti Gravity Platform</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">Git</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '93%' }}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-93"></div>
                  <h4 className="skill-name">GitHub</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '93%' }}></div>
                  </div>
                  <span className="skill-percentage">93%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-98"></div>
                  <h4 className="skill-name">Jupyter Notebook</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '98%' }}></div>
                  </div>
                  <span className="skill-percentage">98%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-98"></div>
                  <h4 className="skill-name"> VS Code</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '98%' }}></div>
                  </div>
                  <span className="skill-percentage">98%</span>
                </div>
                <div className="skill-card">
                  <div className="skill-icon skill-icon-98"></div>
                  <h4 className="skill-name">Firebase</h4>
                  <div className="skill-level">
                    <div className="skill-progress" style={{ width: '98%' }}></div>
                  </div>
                  <span className="skill-percentage">98%</span>
                </div>
              </div>
            </div>


          </div>
        </div>

      </section>

      {/* Certificates Section */}
      <section id="certifications" className="certifications-section">
        <div className="section-blur-bg"></div>
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certificates-grid">


            <div className="certificate-card">
              <h4 className="certificate-title">Deloitte - Data Analytics Job Simulation</h4>
              <p className="certificate-org">Deloitte</p>
              <p className="certificate-date">Jul 2025</p>
              <a
                href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_A2G6oRzJ8WAaeowbF_1753936286372_completion_certificate.pdf"
                target="_blank"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>

            <div className="certificate-card">
              <h4 className="certificate-title">Internship Studio - Data Science Internship</h4>
              <p className="certificate-org">Internship Studio</p>
              <p className="certificate-date">Oct 2025</p>
              <a
                href="https://drive.google.com/file/d/1wOvZ3B4fbuh-3tFu5OiugxCIi8Ko7szw/view"
                target="_blank"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>

            <div className="certificate-card">
              <h4 className="certificate-title">IBacus Tech - Power BI Certification</h4>
              <p className="certificate-org">IBacus Tech</p>
              <p className="certificate-date">Jun 2024</p>
              <a
                href="https://drive.google.com/file/d/1JTj4h70ifflcQOyOdpm4L6khlwqTa_7-/view"
                target="_blank"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>

            <div className="certificate-card">
              <h4 className="certificate-title">Data Analytics With Python</h4>
              <p className="certificate-org">NPTEL</p>
              <p className="certificate-date">Apr 2024</p>
              <p className="credential-id">NPTEL24CS20S970100116</p>
              <a
                href="https://drive.google.com/file/d/14IM9GwGVTrt8vNB6ysPOBb6mSoIKrB9t/view"
                target="_blank"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>

            <div className="certificate-card">
              <h4 className="certificate-title">Artificial Intelligence Internship</h4>
              <p className="certificate-org">Novi Tech</p>
              <p className="certificate-date">Aug 2025</p>
              <a
                href="https://drive.google.com/file/d/1xUlpQ928veBJgX-WM6vS5pjh8SoeAYwv/view?usp=sharing"
                target="_blank"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>

            <div className="certificate-card">
              <h4 className="certificate-title">Data Analytics MasterClass</h4>
              <p className="certificate-org">Novi Tech</p>
              <p className="certificate-date">Aug 2025</p>
              <a
                href="https://drive.google.com/file/d/1amKvqXw9DvdhHI0Qbnka4vPEhba_45Cj/view?usp=sharing"
                target="_blank"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>


            <div className="certificate-card">
              <h4 className="certificate-title">Machine Learning Internship</h4>
              <p className="certificate-org">Novi Tech</p>
              <p className="certificate-date">Aug 2025</p>
              <a
                href="https://drive.google.com/file/d/1mCPBRMEL5aZqpYfeJhCf9psucS3jQEsb/view?usp=sharing"
                target="_blank"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>

            <div className="certificate-card">
              <h4 className="certificate-title">Data Analytics Internship</h4>
              <p className="certificate-org">Novi Tech</p>
              <p className="certificate-date">Aug 2025</p>
              <a
                href="https://drive.google.com/file/d/1Io9Fz3PRtZL6GlMkivMgU91sXCrurqCG/view?usp=sharing"
                target="_blank"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>

            <div className="certificate-card">
              <h4 className="certificate-title">Soft Skills Training</h4>
              <p className="certificate-org">Infosys BPM</p>
              <p className="certificate-date">Sep 2024</p>
              <a
                href="https://drive.google.com/file/d/1soPxidFEVhyK82ePuNDzj_KQ0I2J62pA/view"
                target=" blank"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>


            <div className="certificate-card">
              <h4 className="certificate-title">National Cadet Corps <br />   'C'- Certificate</h4>
              <p className="certificate-org">Ministry Of Defence</p>
              <p className="certificate-date">July 2023</p>
              <a
                href="https://drive.google.com/file/d/1skiDWC0OPxMLMzfLSGQNIYbOxMrMRZ06/view?usp=sharing"
                target="_blank"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>

            <div className="certificate-card">
              <h4 className="certificate-title">Soft Skill Training</h4>
              <p className="certificate-org">Tamil Nadu State Council For Higher Education</p>
              <p className="certificate-date">Apr 2023</p>
              <a
                href="https://drive.google.com/file/d/1sqvcza12IGTJfk0Z_6zX-H7Mp6xPdkqR/view?usp=sharing"
                target="_blank"
                className="view-certificate"
              >
                View Certificate
              </a>
            </div>

          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-subtitle">Let's work together</h3>
              <p className="contact-text">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>kesavan20021111@gmail.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+91 9361816131</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Coimbatore, Tamil Nadu</span>
                </div>
              </div>
            </div>
            <form
              className="contact-form"
              action="https://formspree.io/f/mjkqwgwp"
              method="POST"
            >
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" className="form-input" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" className="form-textarea" rows={5} required></textarea>
              </div>
              <button type="submit" className="form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
