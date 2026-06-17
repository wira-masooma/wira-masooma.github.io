export const projects = [
  {
    title: "NeurIPS Open Polymer Prediction",
    org: "Kaggle Competition",
    period: "Jun 2025 – Sep 2025",
    summary:
      "Built machine-learning models to predict five key polymer properties from molecular structure, competing in the NeurIPS 2025 open-science challenge on Kaggle.",
    highlights: [
      "Implemented Linear & Non-linear SVR, Random Forests, and Graph Neural Networks",
      "Engineered molecular fingerprint features using RDKit for SMILES-based inputs",
      "Benchmarked models across five regression targets with cross-validated evaluation",
    ],
    stack: ["PyTorch Geometric", "RDKit", "scikit-learn", "NumPy", "pandas"],
    link: "",
    featured: true,
  },
  {
    title: "3D Protein Structure Prediction",
    org: "UCL Computational Biology",
    period: "Mar 2025 – May 2025",
    summary:
      "Developed a computational pipeline to predict 3D protein conformations from amino-acid sequences, integrating energy minimisation with structural bioinformatics tools.",
    highlights: [
      "Built an end-to-end pipeline from sequence alignment to 3D coordinate generation",
      "Integrated PyMOL for molecular visualisation and structural validation",
      "Applied energy-based scoring functions to rank predicted conformations",
    ],
    stack: ["Python", "BioPython", "PyMOL", "NumPy", "Structural Biology"],
    link: "",
    featured: true,
  },
];
