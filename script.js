const steps = [
  { title: "1) Orientation & Setup", goal: "Install tools and understand the DS+GenAI roadmap.",
    notes:["Install Python, VS Code, Git, Anaconda/Miniconda.","Learn Jupyter, virtual environments, and GitHub workflow.","Understand the data science lifecycle and where GenAI fits."],
    videos:[
      ["Python Full Course (freeCodeCamp)","https://www.youtube.com/watch?v=rfscVS0vtbw"],
      ["Git & GitHub Crash Course (Traversy)","https://www.youtube.com/watch?v=SWYqp7iY_Tc"]
    ],
    quiz:["Why do we use virtual environments?","Name two differences between Git and GitHub."]
  },
  { title: "2) Python for Data Science", goal: "Gain practical Python fluency for analysis and ML.",
    notes:["Data types, control flow, functions, OOP basics.","NumPy, Pandas, Matplotlib/Seaborn.","Data cleaning and feature engineering fundamentals."],
    videos:[["NumPy Full Course (Keith Galli)","https://www.youtube.com/watch?v=QUT1VHiLmmI"],["Pandas Full Course (freeCodeCamp)","https://www.youtube.com/watch?v=vmEHCJofslg"]],
    quiz:["When should you prefer vectorized operations over loops?","What is the difference between loc and iloc in Pandas?"]
  },
  { title: "3) Statistics & Math Foundation", goal:"Build intuition for probability, distributions and linear algebra.",
    notes:["Descriptive/inferential stats.","Hypothesis testing and confidence intervals.","Linear algebra and calculus intuition for ML."],
    videos:[["StatQuest Probability & Statistics Playlist","https://www.youtube.com/@statquest/playlists"],["Linear Algebra for ML (freeCodeCamp)","https://www.youtube.com/watch?v=i8FukKfMKCI"]],
    quiz:["What does a p-value indicate?","Why are eigenvectors useful in PCA?"]
  },
  { title: "4) SQL + Data Wrangling", goal:"Query, join and aggregate datasets from relational databases.",
    notes:["SELECT, WHERE, GROUP BY, JOINS, subqueries.","Window functions for analytics.","Build EDA-ready datasets."],
    videos:[["SQL Full Course (freeCodeCamp)","https://www.youtube.com/watch?v=HXV3zeQKqGY"],["SQL Window Functions (Alex The Analyst)","https://www.youtube.com/watch?v=Ww71knvhQ-s"]],
    quiz:["Difference between INNER JOIN and LEFT JOIN?","What is a window function?"]
  },
  { title: "5) EDA + Visualization", goal:"Perform exploratory analysis and communicate insights.",
    notes:["Univariate/bivariate analysis.","Handling missing values, outliers, skew.","Business storytelling with charts."],
    videos:[["Data Analysis with Python (freeCodeCamp)","https://www.youtube.com/watch?v=r-uOLxNrNk8"],["Seaborn Tutorial (Kaggle)","https://www.youtube.com/watch?v=GcXcSZ0gQps"]],
    quiz:["When should you use box plots?","How do you detect multicollinearity quickly?"]
  },
  { title: "6) Machine Learning Core", goal:"Train, evaluate and improve predictive models.",
    notes:["Supervised vs unsupervised learning.","Model evaluation metrics.","Cross-validation, bias-variance, pipelines."],
    videos:[["Machine Learning Course (Google Developers)","https://www.youtube.com/watch?v=KNAWp2S3w94"],["ML Full Course (freeCodeCamp)","https://www.youtube.com/watch?v=NWONeJKn6kc"]],
    quiz:["F1-score vs accuracy: when to prefer F1?","What does cross-validation protect against?"]
  },
  { title: "7) Deep Learning Fundamentals", goal:"Understand neural networks and training mechanics.",
    notes:["ANN, CNN, RNN basics.","Optimization, regularization, overfitting control.","PyTorch or TensorFlow workflow."],
    videos:[["PyTorch for Deep Learning (Daniel Bourke)","https://www.youtube.com/watch?v=V_xro1bcAuA"],["Neural Networks (3Blue1Brown)","https://www.youtube.com/watch?v=aircAruvnKk"]],
    quiz:["Why do we use activation functions?","What is dropout?" ]
  },
  { title: "8) Generative AI & LLMs", goal:"Master prompt engineering, LLM APIs and evaluation.",
    notes:["LLM architecture intuition (transformers, tokens, embeddings).","Prompting patterns, structured output, guardrails.","Model evaluation: latency, cost, accuracy, hallucination."],
    videos:[["Generative AI for Beginners (Microsoft)","https://www.youtube.com/watch?v=mEsleV16qdo"],["LLMs in One Video (Andrej Karpathy)","https://www.youtube.com/watch?v=zjkBMFhNj_g"]],
    quiz:["What causes hallucinations in LLM outputs?","When should you use JSON schema constrained outputs?"]
  },
  { title: "9) RAG, Vector DBs & Agents", goal:"Build real GenAI applications grounded on enterprise data.",
    notes:["Embeddings and semantic search.","RAG pipeline design and chunking strategies.","Agentic workflows and tool calling."],
    videos:[["RAG Explained (IBM Technology)","https://www.youtube.com/watch?v=T-D1OfcDW1M"],["LangChain Crash Course","https://www.youtube.com/watch?v=lG7Uxts9SXs"]],
    quiz:["Why can RAG reduce hallucinations?","What is chunk overlap and why is it used?"]
  },
  { title: "10) MLOps + GenAI Ops", goal:"Deploy, monitor and iterate production-grade systems.",
    notes:["Model packaging, APIs, Docker basics.","Evaluation and observability dashboards.","Cost/safety monitoring and feedback loops."],
    videos:[["MLOps End-to-End (Weights & Biases)","https://www.youtube.com/watch?v=06-AZXmwHjo"],["Docker Tutorial (freeCodeCamp)","https://www.youtube.com/watch?v=fqMOX6JJhGo"]],
    quiz:["Why monitor drift?","Name one GenAI safety metric."]
  },
  { title: "11) Portfolio + Capstone", goal:"Create job-ready projects and interview narratives.",
    notes:["Build 2 classical DS projects + 2 GenAI apps.","Write clear READMEs with architecture diagrams.","Practice DS/ML/GenAI interview questions and case studies."],
    videos:[["Data Science Portfolio Tips (Ken Jee)","https://www.youtube.com/watch?v=xppn2xol6Ys"],["End-to-End ML Project (Krish Naik)","https://www.youtube.com/watch?v=KjQjJqjfHEw"]],
    quiz:["What makes a capstone project recruiter-friendly?","How do you explain model trade-offs to non-technical stakeholders?"]
  }
];

const key = "ds_genai_progress_v1";
const done = JSON.parse(localStorage.getItem(key) || "[]");
let current = 0;

const stepList = document.getElementById("stepList");
const stepTitle = document.getElementById("stepTitle");
const stepGoal = document.getElementById("stepGoal");
const stepNotes = document.getElementById("stepNotes");
const stepVideos = document.getElementById("stepVideos");
const stepQuiz = document.getElementById("stepQuiz");

function renderList(){
  stepList.innerHTML = "";
  steps.forEach((s, i)=>{
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.className = `${i===current?"active":""} ${done.includes(i)?"done":""}`;
    b.innerHTML = `${s.title} ${done.includes(i)?'<span class="badge">✓ done</span>':''}`;
    b.onclick = ()=>{ current=i; render(); };
    li.appendChild(b);
    stepList.appendChild(li);
  });
}

function render(){
  const s = steps[current];
  stepTitle.textContent = s.title;
  stepGoal.textContent = s.goal;
  stepNotes.innerHTML = s.notes.map(n=>`<li>${n}</li>`).join("");
  stepVideos.innerHTML = s.videos.map(v=>`<a href="${v[1]}" target="_blank" rel="noreferrer">${v[0]}</a>`).join("");
  stepQuiz.innerHTML = s.quiz.map(q=>`<p><q>${q}</q><input type="text" placeholder="Write your answer" style="width:100%"></p>`).join("");

  const pct = Math.round((done.length/steps.length)*100);
  document.getElementById("progressBar").style.width = `${pct}%`;
  document.getElementById("progressText").textContent = `${pct}% completed (${done.length}/${steps.length})`;

  renderList();
}

document.getElementById("markDone").onclick = ()=>{
  if(!done.includes(current)){
    done.push(current);
    localStorage.setItem(key, JSON.stringify(done));
  }
  render();
};

render();
