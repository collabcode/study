const steps = [
  { title: "1) Orientation & Setup", goal: "Install tools and understand the DS+GenAI roadmap.",
    learn:["Set up Python, VS Code, Git, and Jupyter so your learning environment is stable.","Understand the lifecycle: problem framing → data collection → modeling → deployment.","For GenAI work, also think about evaluation, cost, and safety from day one."],
    notes:["Install Python, VS Code, Git, Anaconda/Miniconda.","Learn Jupyter, virtual environments, and GitHub workflow.","Understand the data science lifecycle and where GenAI fits."],
    videos:[
      ["Python Full Course (freeCodeCamp)","https://www.youtube.com/watch?v=rfscVS0vtbw"],
      ["Git & GitHub Crash Course (Traversy)","https://www.youtube.com/watch?v=SWYqp7iY_Tc"]
    ],
    quiz:["Why do we use virtual environments?","Name two differences between Git and GitHub."]
  },
  { title: "2) Python for Data Science", goal: "Gain practical Python fluency for analysis and ML.",
    learn:["Python is your main implementation language; focus on writing readable and testable code.","Pandas + NumPy help you clean and transform data faster than manual loops.","Visualization libraries help you find patterns before modeling."],
    notes:["Data types, control flow, functions, OOP basics.","NumPy, Pandas, Matplotlib/Seaborn.","Data cleaning and feature engineering fundamentals."],
    videos:[ ["NumPy Full Course (Keith Galli)","https://www.youtube.com/watch?v=QUT1VHiLmmI"],["Pandas Full Course (freeCodeCamp)","https://www.youtube.com/watch?v=vmEHCJofslg"] ],
    quiz:["When should you prefer vectorized operations over loops?","What is the difference between loc and iloc in Pandas?"]
  },
  { title: "3) Statistics & Math Foundation", goal:"Build intuition for probability, distributions and linear algebra.",
    learn:["Statistics helps you reason about uncertainty and avoid overconfident conclusions.","Linear algebra powers transformations behind embeddings and neural networks.","Use hypothesis testing carefully; practical significance matters alongside statistical significance."],
    notes:["Descriptive/inferential stats.","Hypothesis testing and confidence intervals.","Linear algebra and calculus intuition for ML."],
    videos:[["StatQuest Probability & Statistics Playlist","https://www.youtube.com/@statquest/playlists"],["Linear Algebra for ML (freeCodeCamp)","https://www.youtube.com/watch?v=i8FukKfMKCI"]],
    quiz:["What does a p-value indicate?","Why are eigenvectors useful in PCA?"]
  },
  { title: "4) SQL + Data Wrangling", goal:"Query, join and aggregate datasets from relational databases.",
    learn:["SQL is non-negotiable for analysts and data scientists in business environments.","Good joins and aggregations reduce downstream modeling mistakes.","Window functions are powerful for trend and cohort analysis."],
    notes:["SELECT, WHERE, GROUP BY, JOINS, subqueries.","Window functions for analytics.","Build EDA-ready datasets."],
    videos:[["SQL Full Course (freeCodeCamp)","https://www.youtube.com/watch?v=HXV3zeQKqGY"],["SQL Window Functions (Alex The Analyst)","https://www.youtube.com/watch?v=Ww71knvhQ-s"]],
    quiz:["Difference between INNER JOIN and LEFT JOIN?","What is a window function?"]
  },
  { title: "5) EDA + Visualization", goal:"Perform exploratory analysis and communicate insights.",
    learn:["EDA reveals data quality issues and relationship signals before modeling.","Choose charts by intent: comparison, distribution, correlation, trend.","Narratives should connect data findings to business decisions."],
    notes:["Univariate/bivariate analysis.","Handling missing values, outliers, skew.","Business storytelling with charts."],
    videos:[["Data Analysis with Python (freeCodeCamp)","https://www.youtube.com/watch?v=r-uOLxNrNk8"],["Seaborn Tutorial (Kaggle)","https://www.youtube.com/watch?v=GcXcSZ0gQps"]],
    quiz:["When should you use box plots?","How do you detect multicollinearity quickly?"]
  },
  { title: "6) Machine Learning Core", goal:"Train, evaluate and improve predictive models.",
    learn:["Start with baseline models and iterate using reproducible experiments.","Pick evaluation metrics based on business impact, not convenience.","Avoid leakage and use cross-validation to estimate true performance."],
    notes:["Supervised vs unsupervised learning.","Model evaluation metrics.","Cross-validation, bias-variance, pipelines."],
    videos:[["Machine Learning Course (Google Developers)","https://www.youtube.com/watch?v=KNAWp2S3w94"],["ML Full Course (freeCodeCamp)","https://www.youtube.com/watch?v=NWONeJKn6kc"]],
    quiz:["F1-score vs accuracy: when to prefer F1?","What does cross-validation protect against?"]
  },
  { title: "7) Deep Learning Fundamentals", goal:"Understand neural networks and training mechanics.",
    learn:["Neural nets learn layered representations from raw signals.","Training dynamics depend on data quality, architecture, optimizer, and regularization.","Understand overfitting controls before scaling model size."],
    notes:["ANN, CNN, RNN basics.","Optimization, regularization, overfitting control.","PyTorch or TensorFlow workflow."],
    videos:[["PyTorch for Deep Learning (Daniel Bourke)","https://www.youtube.com/watch?v=V_xro1bcAuA"],["Neural Networks (3Blue1Brown)","https://www.youtube.com/watch?v=aircAruvnKk"]],
    quiz:["Why do we use activation functions?","What is dropout?" ]
  },
  { title: "8) Generative AI & LLMs", goal:"Master prompt engineering, LLM APIs and evaluation.",
    learn:["LLMs generate text token-by-token from learned probability distributions.","Prompt design, context control, and output schema improve reliability.","Evaluation should include quality, latency, cost, and safety."],
    notes:["LLM architecture intuition (transformers, tokens, embeddings).","Prompting patterns, structured output, guardrails.","Model evaluation: latency, cost, accuracy, hallucination."],
    videos:[["Generative AI for Beginners (Microsoft)","https://www.youtube.com/watch?v=mEsleV16qdo"],["LLMs in One Video (Andrej Karpathy)","https://www.youtube.com/watch?v=zjkBMFhNj_g"]],
    quiz:["What causes hallucinations in LLM outputs?","When should you use JSON schema constrained outputs?"]
  },
  { title: "9) RAG, Vector DBs & Agents", goal:"Build real GenAI applications grounded on enterprise data.",
    learn:["RAG improves factuality by grounding generation on retrieved documents.","Embedding quality and chunking strategy strongly affect answer quality.","Agents orchestrate multi-step tool usage but require guardrails and monitoring."],
    notes:["Embeddings and semantic search.","RAG pipeline design and chunking strategies.","Agentic workflows and tool calling."],
    videos:[["RAG Explained (IBM Technology)","https://www.youtube.com/watch?v=T-D1OfcDW1M"],["LangChain Crash Course","https://www.youtube.com/watch?v=lG7Uxts9SXs"]],
    quiz:["Why can RAG reduce hallucinations?","What is chunk overlap and why is it used?"]
  },
  { title: "10) MLOps + GenAI Ops", goal:"Deploy, monitor and iterate production-grade systems.",
    learn:["Model performance degrades in production due to drift and changing behavior.","Operational excellence requires observability, CI/CD, and rollback strategies.","GenAI systems additionally need prompt/version tracking and safety checks."],
    notes:["Model packaging, APIs, Docker basics.","Evaluation and observability dashboards.","Cost/safety monitoring and feedback loops."],
    videos:[["MLOps End-to-End (Weights & Biases)","https://www.youtube.com/watch?v=06-AZXmwHjo"],["Docker Tutorial (freeCodeCamp)","https://www.youtube.com/watch?v=fqMOX6JJhGo"]],
    quiz:["Why monitor drift?","Name one GenAI safety metric."]
  },
  { title: "11) Portfolio + Capstone", goal:"Create job-ready projects and interview narratives.",
    learn:["A strong portfolio proves applied skill better than certificates alone.","Tell project stories: problem, data, approach, results, trade-offs.","Include reproducibility docs and deployment links where possible."],
    notes:["Build 2 classical DS projects + 2 GenAI apps.","Write clear READMEs with architecture diagrams.","Practice DS/ML/GenAI interview questions and case studies."],
    videos:[["Data Science Portfolio Tips (Ken Jee)","https://www.youtube.com/watch?v=xppn2xol6Ys"],["End-to-End ML Project (Krish Naik)","https://www.youtube.com/watch?v=KjQjJqjfHEw"]],
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
