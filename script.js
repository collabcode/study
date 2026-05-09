const steps = [
  { title: "1) Orientation & Setup", goal: "Install tools and understand the DS+GenAI roadmap.",
    learn:["Set up Python, VS Code, Git, and Jupyter so your learning environment is stable.","Understand the lifecycle: problem framing → data collection → modeling → deployment.","For GenAI work, also think about evaluation, cost, and safety from day one."],
    notes:["Install Python, VS Code, Git, Anaconda/Miniconda.","Learn Jupyter, virtual environments, and GitHub workflow.","Understand the data science lifecycle and where GenAI fits."],
    videos:[
      ["Data Science with Python Full Course 2026 (Simplilearn)","https://www.youtube.com/watch?v=S5jc7THQD6k"],
      ["Git & GitHub Tutorial 2025 (freeCodeCamp)","https://www.youtube.com/watch?v=RGOj5yH7evk"]
    ],
    quiz:["Why do we use virtual environments?","Name two differences between Git and GitHub."]
  },
  { title: "2) Python for Data Science", goal: "Gain practical Python fluency for analysis and ML.",
    learn:["Python is your main implementation language; focus on writing readable and testable code.","Pandas + NumPy help you clean and transform data faster than manual loops.","Visualization libraries help you find patterns before modeling."],
    notes:["Data types, control flow, functions, OOP basics.","NumPy, Pandas, Matplotlib/Seaborn.","Data cleaning and feature engineering fundamentals."],
    videos:[ ["Python for Data Science Full Course 2026 (Nicholas Renotte)","https://www.youtube.com/watch?v=bPrmA1SEN2k"],["Pandas Full Course 2026 (Amit Thinks)","https://www.youtube.com/watch?v=yFoVs3_wvPo"] ],
    quiz:["When should you prefer vectorized operations over loops?","What is the difference between loc and iloc in Pandas?"]
  },
  { title: "3) Statistics & Math Foundation", goal:"Build intuition for probability, distributions and linear algebra.",
    learn:["Statistics helps you reason about uncertainty and avoid overconfident conclusions.","Linear algebra powers transformations behind embeddings and neural networks.","Use hypothesis testing carefully; practical significance matters alongside statistical significance."],
    notes:["Descriptive/inferential stats.","Hypothesis testing and confidence intervals.","Linear algebra and calculus intuition for ML."],
    videos:[["Statistics for Data Science 2025 (CampusX)","https://www.youtube.com/watch?v=xxpc-HPKN28"],["Linear Algebra for Machine Learning 2025 (freeCodeCamp)","https://www.youtube.com/watch?v=JnTa9XtvmfI"]],
    quiz:["What does a p-value indicate?","Why are eigenvectors useful in PCA?"]
  },
  { title: "4) SQL + Data Wrangling", goal:"Query, join and aggregate datasets from relational databases.",
    learn:["SQL is non-negotiable for analysts and data scientists in business environments.","Good joins and aggregations reduce downstream modeling mistakes.","Window functions are powerful for trend and cohort analysis."],
    notes:["SELECT, WHERE, GROUP BY, JOINS, subqueries.","Window functions for analytics.","Build EDA-ready datasets."],
    videos:[["SQL for Data Analytics – Intermediate + Project (2025)","https://www.youtube.com/watch?v=QKIGsShyEsQ"],["Advanced SQL for Data Analysis 2025 (Data With Baraa)","https://www.youtube.com/watch?v=VFIuIjswMKM"]],
    quiz:["Difference between INNER JOIN and LEFT JOIN?","What is a window function?"]
  },
  { title: "5) EDA + Visualization", goal:"Perform exploratory analysis and communicate insights.",
    learn:["EDA reveals data quality issues and relationship signals before modeling.","Choose charts by intent: comparison, distribution, correlation, trend.","Narratives should connect data findings to business decisions."],
    notes:["Univariate/bivariate analysis.","Handling missing values, outliers, skew.","Business storytelling with charts."],
    videos:[["Data Analysis with Python 2025 (freeCodeCamp)","https://www.youtube.com/watch?v=GPVsHOlRBBI"],["Seaborn Full Tutorial 2025 (CodeWithHarry)","https://www.youtube.com/watch?v=6GUZXDef2U0"]],
    quiz:["When should you use box plots?","How do you detect multicollinearity quickly?"]
  },
  { title: "6) Machine Learning Core", goal:"Train, evaluate and improve predictive models.",
    learn:["Start with baseline models and iterate using reproducible experiments.","Pick evaluation metrics based on business impact, not convenience.","Avoid leakage and use cross-validation to estimate true performance."],
    notes:["Supervised vs unsupervised learning.","Model evaluation metrics.","Cross-validation, bias-variance, pipelines."],
    videos:[["Machine Learning Full Course 2025 (Simplilearn)","https://www.youtube.com/watch?v=ukzFI9rgwfU"],["Machine Learning for Everybody 2025 (freeCodeCamp)","https://www.youtube.com/watch?v=i_LwzRVP7bg"]],
    quiz:["F1-score vs accuracy: when to prefer F1?","What does cross-validation protect against?"]
  },
  { title: "7) Deep Learning Fundamentals", goal:"Understand neural networks and training mechanics.",
    learn:["Neural nets learn layered representations from raw signals.","Training dynamics depend on data quality, architecture, optimizer, and regularization.","Understand overfitting controls before scaling model size."],
    notes:["ANN, CNN, RNN basics.","Optimization, regularization, overfitting control.","PyTorch or TensorFlow workflow."],
    videos:[["Deep Learning Full Course 2025 (freeCodeCamp)","https://www.youtube.com/watch?v=VyWAvY2CF9c"],["PyTorch 2.0 Full Course 2025 (AssemblyAI)","https://www.youtube.com/watch?v=c36lUUr864M"]],
    quiz:["Why do we use activation functions?","What is dropout?" ]
  },
  { title: "8) Generative AI & LLMs", goal:"Master prompt engineering, LLM APIs and evaluation.",
    learn:["LLMs generate text token-by-token from learned probability distributions.","Prompt design, context control, and output schema improve reliability.","Evaluation should include quality, latency, cost, and safety."],
    notes:["LLM architecture intuition (transformers, tokens, embeddings).","Prompting patterns, structured output, guardrails.","Model evaluation: latency, cost, accuracy, hallucination."],
    videos:[["Generative AI Full Course 2026 (Simplilearn)","https://www.youtube.com/watch?v=pdptvazno"],["Essential AI Skills for 2026","https://www.youtube.com/watch?v=jm2jBW462bU"]],
    quiz:["What causes hallucinations in LLM outputs?","When should you use JSON schema constrained outputs?"]
  },
  { title: "9) RAG, Vector DBs & Agents", goal:"Build real GenAI applications grounded on enterprise data.",
    learn:["RAG improves factuality by grounding generation on retrieved documents.","Embedding quality and chunking strategy strongly affect answer quality.","Agents orchestrate multi-step tool usage but require guardrails and monitoring."],
    notes:["Embeddings and semantic search.","RAG pipeline design and chunking strategies.","Agentic workflows and tool calling."],
    videos:[["Agentic AI Full Course 2026 (Simplilearn)","https://www.youtube.com/watch?v=2R-niMsB0QY"],["RAG Systems with LangChain 2025 (freeCodeCamp)","https://www.youtube.com/watch?v=sVcwVQRHIc8"]],
    quiz:["Why can RAG reduce hallucinations?","What is chunk overlap and why is it used?"]
  },
  { title: "10) MLOps + GenAI Ops", goal:"Deploy, monitor and iterate production-grade systems.",
    learn:["Model performance degrades in production due to drift and changing behavior.","Operational excellence requires observability, CI/CD, and rollback strategies.","GenAI systems additionally need prompt/version tracking and safety checks."],
    notes:["Model packaging, APIs, Docker basics.","Evaluation and observability dashboards.","Cost/safety monitoring and feedback loops."],
    videos:[["MLOps Full Course 2025 (Simplilearn)","https://www.youtube.com/watch?v=9GclA6x9Rvw"],["Docker & Kubernetes for ML Engineers 2025","https://www.youtube.com/watch?v=Wf2eSG3owoA"]],
    quiz:["Why monitor drift?","Name one GenAI safety metric."]
  },
  { title: "11) Portfolio + Capstone", goal:"Create job-ready projects and interview narratives.",
    learn:["A strong portfolio proves applied skill better than certificates alone.","Tell project stories: problem, data, approach, results, trade-offs.","Include reproducibility docs and deployment links where possible."],
    notes:["Build 2 classical DS projects + 2 GenAI apps.","Write clear READMEs with architecture diagrams.","Practice DS/ML/GenAI interview questions and case studies."],
    videos:[["Data Science Portfolio in 2026 (Alex The Analyst)","https://www.youtube.com/watch?v=I6hV7x8d5i8"],["End-to-End GenAI Project 2025 (Krish Naik)","https://www.youtube.com/watch?v=dXxQ0LR-3Hg"]],
    quiz:["What makes a capstone project recruiter-friendly?","How do you explain model trade-offs to non-technical stakeholders?"]
  }
];

const key = "ds_genai_progress_v1";
const done = JSON.parse(localStorage.getItem(key) || "[]");
let current = 0;
let activeTab = "learn";

const stepList = document.getElementById("stepList");
const stepTitle = document.getElementById("stepTitle");
const stepGoal = document.getElementById("stepGoal");
const stepLearnText = document.getElementById("stepLearnText");
const stepNotes = document.getElementById("stepNotes");
const stepVideos = document.getElementById("stepVideos");
const stepQuiz = document.getElementById("stepQuiz");
const ytPlayer = document.getElementById("ytPlayer");

function toEmbedUrl(url){
  try {
    const u = new URL(url);
    if(u.hostname.includes("youtu.be")) return `https://www.youtube.com/embed/${u.pathname.replace("/", "")}`;
    const v = u.searchParams.get("v");
    if(v) return `https://www.youtube.com/embed/${v}`;
  } catch {}
  return "";
}

function renderList(){
  stepList.innerHTML = "";
  steps.forEach((s, i)=>{
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.className = `${i===current?"active":""} ${done.includes(i)?"done":""}`;
    b.innerHTML = `${s.title} ${done.includes(i)?'<span class="badge">✓ done</span>':''}`;
    b.onclick = ()=>{ current=i; activeTab="learn"; render(); };
    li.appendChild(b);
    stepList.appendChild(li);
  });
}

function setTab(tab){
  activeTab = tab;
  document.querySelectorAll(".tab").forEach(el=>el.classList.toggle("active", el.dataset.tab===tab));
  document.querySelectorAll(".tab-panel").forEach(el=>el.classList.toggle("active", el.id===`panel-${tab}`));
  document.getElementById("prevBtn").textContent = tab === "learn" ? "← Previous Topic" : "← Previous";
  document.getElementById("nextBtn").textContent = tab === "quiz" ? "Next Topic →" : "Next →";
}

function render(){
  const s = steps[current];
  stepTitle.textContent = s.title;
  stepGoal.textContent = s.goal;
  stepLearnText.innerHTML = s.learn.map(p=>`<p>${p}</p>`).join("");
  stepNotes.innerHTML = s.notes.map(n=>`<li>${n}</li>`).join("");
  stepVideos.innerHTML = s.videos.map(v=>`<a href="${v[1]}" target="_blank" rel="noreferrer">${v[0]}</a>`).join("<br>");
  stepQuiz.innerHTML = s.quiz.map(q=>`<p><q>${q}</q><input type="text" placeholder="Write your answer" style="width:100%"></p>`).join("");

  ytPlayer.src = toEmbedUrl(s.videos[0][1]);

  const pct = Math.round((done.length/steps.length)*100);
  document.getElementById("progressBar").style.width = `${pct}%`;
  document.getElementById("progressText").textContent = `${pct}% completed (${done.length}/${steps.length})`;

  renderList();
  setTab(activeTab);
}

document.querySelectorAll(".tab").forEach(btn => btn.onclick = () => setTab(btn.dataset.tab));

document.getElementById("markDone").onclick = ()=>{
  if(!done.includes(current)){
    done.push(current);
    localStorage.setItem(key, JSON.stringify(done));
  }
  render();
};

document.getElementById("prevBtn").onclick = ()=>{
  if(activeTab === "watch") return setTab("learn");
  if(activeTab === "quiz") return setTab("watch");
  if(current > 0){
    current--;
    activeTab = "learn";
    render();
  }
};

document.getElementById("nextBtn").onclick = ()=>{
  if(activeTab === "learn") return setTab("watch");
  if(activeTab === "watch") return setTab("quiz");
  if(current < steps.length - 1){
    current++;
    activeTab = "learn";
    render();
  }
};

render();
