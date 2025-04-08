function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach((section) => {
    section.style.display = 'none';
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
    updateSectionContent(sectionId);
  }
}

function updateSectionContent(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  switch (sectionId) {
    case 'career':
      section.innerHTML = `
        <h2>Career Objective</h2>
        <p>Highly motivated B.Tech student specializing in Full Stack Development with experience in Python, JavaScript, and Web Technologies. Strong background in building scalable applications, APIs, and data-driven solutions. Seeking opportunities to apply technical expertise in a collaborative and innovative environment.</p>
      `;
      break;

    case 'education':
      section.innerHTML = `
        <h2>Education</h2>
        <ul>
          <li><strong>B.Tech (CSE)</strong> - MOHAN BABU UNIVERSITY (2022 - Present) — 8.15 CGPA</li>
          <li><strong>Intermediate (12th)</strong> - NARAYANA JUNIOR COLLEGE (2020–2022) — 57.3%</li>
          <li><strong>10th (SSC)</strong> - VISION E.M. SCHOOL (2015–2020) — 83.17%</li>
        </ul>
      `;
      break;

    case 'technical':
      section.innerHTML = `
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> Java (Intermediate), Python (Basic), C++ (Basic)</li>
          <li><strong>Front-end:</strong> HTML, CSS (Intermediate), JavaScript (Basic), Bootstrap, PHP (Basic)</li>
          <li><strong>Back-end:</strong> Node.js (Basic), MySQL (Basic)</li>
          <li><strong>Frameworks/Libraries:</strong> React.js (Basic), Pandas (Basic)</li>
          <li><strong>Tools:</strong> VS Code, Git</li>
          <li><strong>Data Science & ML:</strong> Jupyter Notebook, Google Colab</li>
        </ul>
      `;
      break;

    case 'softskills':
      section.innerHTML = `
        <h2>Soft Skills</h2>
        <ul>
          <li>✔ Problem-Solving</li>
          <li>✔ Communication</li>
          <li>✔ Teamwork</li>
          <li>✔ Adaptability</li>
          <li>✔ Time Management</li>
        </ul>
      `;
      break;

    case 'internships':
      section.innerHTML = `
        <h2>Internships</h2>
        <ul>
          <li>
            <strong>AI & ML Intern – APSSDC (Remote)</strong><br>
            <em>June 2024 – July 2024</em><br>
            Skills: Python, Pandas, NumPy, Scikit-Learn, IBM SkillsBuild, Data Preprocessing
          </li>
          <br>
          <li>
            <strong>Data Science Intern – Prodigy Infotech (Remote)</strong><br>
            <em>June 2024</em><br>
            Skills: Python, Pandas, Matplotlib, Seaborn, Scikit-Learn, ML Algorithms, Data Visualization
          </li>
          <br>
          <li>
            <strong>Software Engineering Intern – Walmart Global Tech (Virtual)</strong><br>
            <em>Dec 2024 – Jan 2025</em>
          </li>
          <li>
            <strong>Software Engineering Intern – Accenture Tech (Virtual)</strong><br>
            <em>Jan 2025</em>
          </li>
        </ul>
      `;
      break;

    case 'certifications':
      section.innerHTML = `
        <h2>Certifications</h2>
        <p>Details coming soon...</p>
      `;
      break;

    case 'social':
      section.innerHTML = `
        <h2>Social Links</h2>
        <p>Details coming soon...</p>
      `;
      break;

    case 'contact':
      section.innerHTML = `
        <h2>Contact</h2>
        <p>Details coming soon...</p>
      `;
      break;

    default:
      section.innerHTML = `<p>Content loading...</p>`;
  }
}

// Show Career Objective by default
window.onload = function () {
  showSection('career');
};
