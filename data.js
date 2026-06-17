/* ============================================================================
   data.js  —  THIS IS THE ONLY FILE YOU NEED TO EDIT TO ADD CONTENT.
   ----------------------------------------------------------------------------
   To add a new job, project, award, or skill: copy an existing { ... } block,
   paste it into the matching array, change the text, and save. The website
   rebuilds those cards automatically. You never touch the HTML or CSS.
   ============================================================================ */

/* ---------------------------------------------------------------------------
   1. PROFILE  — your name, tagline, and links (used in hero, nav, footer)
   --------------------------------------------------------------------------- */
const profile = {
  name: "Wira Masooma Zaidi",
  // The big hero headline + supporting line
  headline: "Decoding Biology with Computation.",
  subtext:
    "Hi, I'm Wira. I leverage Machine Learning and Data Science to solve complex biochemical problems.",
  // Short label under your name in the nav
  role: "Computational Biology · Machine Learning",
  location: "London, UK",
  email: "wiramasoomazaidi@gmail.com",
  linkedin: "https://linkedin.com/in/wira-masooma-zaidi/",
  // Path to your photo. Drop the file in assets/images/profile/ and update the name.
  photo: "assets/images/profile/wira.jpg",
  // Path to your CV. Drop the PDF in the resume/ folder and update the name.
  resume: "resume/Wira_Masooma_Zaidi_Resume.pdf",
};

/* ---------------------------------------------------------------------------
   2. SKILLS  — shown as pills in the About section. Just add/remove strings.
   --------------------------------------------------------------------------- */
const skills = [
  "Python", "PyTorch", "TensorFlow", "scikit-learn", "R",
  "Machine Learning", "Deep Learning", "Data Analytics",
  "Protein Dynamics", "RDKit", "NumPy", "pandas",
  "C++", "SQL", "MATLAB", "Statistics",
];

/* ---------------------------------------------------------------------------
   3. EDUCATION  — rendered as a vertical timeline. Newest first.
   --------------------------------------------------------------------------- */
const education = [
  {
    school: "University College London",
    degree: "MSci Biochemistry",
    period: "2023 – 2027",
    location: "London, UK",
    note: "Graduating Jun 2027. Bridging wet-lab biochemistry with computation and machine learning.",
  },
  {
    school: "Habib University",
    degree: "BSc Computer Science",
    period: "2022 – 2023",
    location: "Karachi, Pakistan",
    note: "GPA 3.5/4.0. Transferred to UCL to pursue the biology–computation intersection.",
  },
];

/* ---------------------------------------------------------------------------
   4. EXPERIENCE  — interactive cards. Add a new role by copying a block.
       metric:  the headline number you want to stand out (optional)
       points:  bullet list of what you did
   --------------------------------------------------------------------------- */
const experience = [
  {
    role: "Product Manager (Virtual Intern)",
    org: "IEUK",
    period: "Jul 2025",
    location: "United Kingdom",
    metric: "+15% retention",
    points: [
      "Built a 6-month product roadmap from user feedback, boosting retention 15% and engagement 20%.",
      "Led a team of 3 engineers and 1 UI/UX designer to deliver 5 features while keeping the platform stable.",
      "Prioritized initiatives that raised user satisfaction 25% and enabled early monetization.",
    ],
  },
  {
    role: "Python Boot Camp Lead",
    org: "UCL Computer Science Society",
    period: "Sep 2024 – Jun 2026",
    location: "London, UK",
    metric: "9-week program",
    points: [
      "Planned and ran a 9-week Python course for undergraduate and postgraduate students from diverse backgrounds.",
      "Designed challenging problem sets and an end-of-term project, earning consistently positive feedback.",
      "Covered data structures and algorithms — lists, dictionaries, and sorting algorithms.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "University College London",
    period: "Jun 2024 – Aug 2025",
    location: "London, UK",
    metric: "R package",
    points: [
      "Built an R package to analyze microbiome data.",
      "Coded statistical functions and used identity matching to analyze microbial data and phylogeny.",
      "Tech stack: R.",
    ],
  },
  {
    role: "Management Lead",
    org: "Google Developer Student Club",
    period: "Aug 2022 – Jun 2023",
    location: "Karachi, Pakistan",
    metric: "600+ participants",
    points: [
      "Hosted workshops on Flutter, HTML, JavaScript, and OOP — guiding 600+ participants per session.",
      "Organized one of the country's largest hackathons, with 500+ CS students across beginner and advanced tracks.",
      "Launched an initiative introducing women in rural Pakistan to programming, promoting women in STEM.",
    ],
  },
];

/* ---------------------------------------------------------------------------
   5. PROJECTS  — the centerpiece gallery.
       featured: true  -> renders as a large case-study card
       stack:          -> tech pills shown on the card
       image:          -> put a thumbnail in assets/images/projects/ (optional)
       link:           -> Kaggle / GitHub URL (optional; leave "" to hide button)
   --------------------------------------------------------------------------- */
const projects = [
  {
    title: "NeurIPS Open Polymer Prediction",
    org: "Kaggle",
    period: "Jun 2025 – Sep 2025",
    featured: true,
    summary:
      "Built and optimized models to predict five polymer properties in the Kaggle NeurIPS Open Polymer Prediction Challenge, comparing classical ML against deep learning.",
    highlights: [
      "Implemented Linear & Non-linear SVR, Random Forests, and Graph Neural Networks to capture descriptor-based and structural features.",
      "Used RDKit for molecular feature extraction and PyTorch Geometric for GNN development.",
      "Hands-on feature engineering, model evaluation, and performance comparison across approaches.",
    ],
    stack: ["PyTorch Geometric", "RDKit", "GNNs", "NumPy", "pandas", "scikit-learn"],
    image: "assets/images/projects/polymer.jpg",
    link: "",
  },
  {
    title: "Prediction of Sequence & 3D Structure of Proteins",
    org: "Habib University",
    period: "Jan 2023 – Jun 2023",
    featured: true,
    summary:
      "Predicted the layer position of amino acids in proteins with over 90% accuracy using only 4 of thousands of amino-acid properties.",
    highlights: [
      "Achieved >90% accuracy using a minimal, carefully selected feature set.",
      "Selected to represent Pakistan internationally at the Undergraduate Research Symposium.",
      "Built on data structures and algorithms — Dijkstra, graphs, trees, and sorting.",
    ],
    stack: ["Python", "Algorithms", "Graphs", "Data Structures"],
    image: "assets/images/projects/protein.jpg",
    link: "",
  },
  {
    title: "Machine Learning on Real-World Datasets",
    org: "University College London",
    period: "Feb 2025 – Apr 2025",
    featured: false,
    summary:
      "Applied regression and classification models to synthetic, genetic, and automotive datasets, focusing on regularization, interpretability, and cross-validation.",
    highlights: [
      "Worked with Polynomial, LASSO, and Logistic regression.",
      "Emphasized model selection, feature scaling, and reproducibility.",
    ],
    stack: ["Python", "scikit-learn", "Regression", "Classification"],
    image: "",
    link: "",
  },
];

/* ---------------------------------------------------------------------------
   6. AWARDS  — shown in the pink banner. Add an object to add an award.
   --------------------------------------------------------------------------- */
const awards = [
  {
    title: "150% Scholarship — UCL",
    detail: "Awarded to just 10 students worldwide.",
  },
  {
    title: "100% Scholarship — Habib University",
    detail: "Full merit scholarship for Computer Science.",
  },
  {
    title: "Perfect GPA — 4.33 / 4.33",
    detail: "Honours Roll across high school.",
  },
  {
    title: "1st Place — UCL BioSciences Module",
    detail: "Protein Purification project; data analysis in Python & Excel.",
  },
  {
    title: "100% Scholarship — Cedar A-Level College",
    detail: "Full scholarship for A-Levels.",
  },
];
