// Data
const strongSkills = [
    { name: "Python", icon: "./assets/icons/python.svg" },
    { name: "Django", icon: "./assets/icons/django.svg" },
    { name: "SQL", icon: "./assets/icons/sql.svg" },
    { name: "Java", icon: "./assets/icons/java.svg" },
    { name: "HTML", icon: "./assets/icons/html.svg" },
    { name: "CSS", icon: "./assets/icons/css.svg" }
  ];
  
  const familiarSkills = [
    { name: "Typescript", icon: "./assets/icons/typescript.svg" },
    { name: "React", icon: "./assets/icons/react.svg" },
    { name: "C", icon: "./assets/icons/c.svg" },
    { name: "Git", icon: "./assets/icons/git.svg" },
    { name: "R", icon: "./assets/icons/r.svg" },
    { name: "Flask", icon: "./assets/icons/flask.svg" }
  ];
  
  // Render Skills
  const renderSkills = (skills, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = skills
      .map(
        (skill) => `
          <div class="skill-card">
            <img src="${skill.icon}" alt="${skill.name}" class="skill-icon">
            <span>${skill.name}</span>
          </div>
        `
      )
      .join("");
  };
  
  renderSkills(strongSkills, "strong-skills");
  renderSkills(familiarSkills, "familiar-skills");
  
  // Typing Animation for Name
  const typedName = document.getElementById("typed-name");
  const text = "<h1>Jan Pakos</h1>"; // Your name
  let index = 0;
  
  const type = () => {
    if (index < text.length) {
      typedName.textContent += text.charAt(index); // Add one character at a time
      index++;
      setTimeout(type, 150); // Delay between each character
    }
  };
  
  // Start the typing animation when the page loads
  type();
  
  // Language Toggle
  const languageToggle = document.getElementById("language-toggle");
  const languageSwitch = document.getElementById("language-switch");
  const languageText = document.getElementById("language-text");
  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  const aboutText = document.getElementById("about-text");
  
  languageToggle.addEventListener("click", () => {
    if (languageText.textContent === "EN") {
      languageText.textContent = "SE";
      languageSwitch.style.transform = "translateX(24px)"; // Move the switch to the right
      heroTitle.textContent = "Hej, jag heter";
      heroSubtitle.textContent = "och jag är en Mjukvaruutvecklare";
      aboutText.textContent = "Jag är en dedikerad mjukvaruutvecklare med ett starkt fokus på att bygga moderna webbapplikationer. Min expertis inkluderar att skapa effektiva, skalbara och användarcentrerade lösningar. Medan jag specialiserar mig på backend-utveckling med Python och Java, är jag också skicklig på frontend- och fullstack-utveckling. Jag är öppen för att utforska möjligheter som ligger i linje med mina färdigheter och intressen. Dessutom är jag en amatörmässig fitnessentusiast och fotbollsspelare.";
    } else {
      languageText.textContent = "EN";
      languageSwitch.style.transform = "translateX(0)"; // Move the switch to the left
      heroTitle.textContent = "Hello, my name is";
      heroSubtitle.textContent = "and I'm a Software Developer";
      aboutText.textContent = "I am a dedicated software developer with a strong focus on building modern web applications. My expertise includes creating efficient, scalable, and user-centric solutions. While I specialize in backend development with Python and Java, I am also proficient in frontend and full-stack development. I am open to exploring opportunities that align with my skills and interests. Additionally, I am an amateur fitness enthusiast and football player.";
    }
  });
  