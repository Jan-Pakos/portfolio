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
const strongSkillsTitle = document.querySelector("#strong-skills").previousElementSibling;
const familiarSkillsTitle = document.querySelector("#familiar-skills").previousElementSibling;
const experienceTitle = document.querySelector(".projects .sectiontitle");
const educationTitle = document.querySelector(".education .sectiontitle");

// Project Titles and Descriptions
const projectTitles = document.querySelectorAll(".project-title");
const projectDescriptions = document.querySelectorAll(".project-description");

// Education Titles and Descriptions
const educationTitles = document.querySelectorAll(".education-title");
const educationDescriptions = document.querySelectorAll(".education-description");
const aboutme = document.querySelectorAll(".aboutme-text");


languageToggle.addEventListener("click", () => {
  if (languageText.textContent === "EN") {
    // Switch to Swedish
    languageText.textContent = "SE";
    languageSwitch.style.transform = "translateX(24px)"; // Move the switch to the right

    // Hero Section
    heroTitle.textContent = "Hej, jag heter";
    heroSubtitle.textContent = "och jag är en Mjukvaruutvecklare";

    // About Section
    aboutme.textContent = "Lite om mig";
    aboutText.textContent = "Jag är en dedikerad mjukvaruutvecklare med ett starkt fokus på att bygga moderna webbapplikationer. Min expertis inkluderar att skapa effektiva, skalbara och användarcentrerade lösningar. Medan jag specialiserar mig på backend-utveckling med Python och Java, är jag också skicklig på frontend- och fullstack-utveckling. Jag är öppen för att utforska möjligheter som ligger i linje med mina färdigheter och intressen. Dessutom är jag en amatörmässig fitnessentusiast och fotbollsspelare.";

    // Skills Section
    strongSkillsTitle.textContent = "Mina starkaste färdigheter";
    familiarSkillsTitle.textContent = "Jag är också bekant med";

    // Projects Section
    experienceTitle.textContent = "Min Erfarenhet";
    projectTitles[0].textContent = "Systemvetardagen.com Jobbfairsajt";
    projectDescriptions[0].textContent = "Omfattande plattform för jobbfair som betjänar universitetsstudenter och rekryterande företag med företagsprofiler och evenemangsinformation med ett tvåspråkigt gränssnitt.";
    projectTitles[1].textContent = "Privat E-postklient";
    projectDescriptions[1].textContent = "En strömlinjeformad webbaserad meddelandeplattform där användare kan skicka, ta emot och arkivera meddelanden på ett och samma ställe.";
    projectTitles[2].textContent = "Auktionswebbplats";
    projectDescriptions[2].textContent = "Auktionswebbplats som låter användare skapa konton, lista föremål för auktion, lägga bud och hantera sina auktionsaktiviteter.";
    projectTitles[3].textContent = "Hundregister";
    projectDescriptions[3].textContent = "Ett Java-program som låter användare registrera ägare och deras hundar och hålla reda på relationerna mellan dem, textbaserat gränssnitt.";

    // Education Section
    educationTitle.textContent = "Formell Utbildning och Kurser";
    educationTitles[0].textContent = "B.Sc. Data och Systemvetenskap";
    educationDescriptions[0].textContent = "Under dessa studier fick jag färdigheter i att designa och implementera program med hjälp av UML och Java. Dessutom förvärvade jag kunskaper inom användargränssnitt/användarupplevelse (UI/UX) och databasmetoder. Vidare lärde jag mig programmering för internet med Java.";
    educationTitles[1].textContent = "B.Sc. Företagsekonomi (Finans)";
    educationDescriptions[1].textContent = "Jag använde Microsoft Excel för finansiella beräkningar, PowerPoint för presentationer och Microsoft Word för samarbetsprojekt under mina studier. Min kursplan täckte ledarskap, finansiell statistik och redovisning. Jag använde också R-programmering för att bygga ARIMA-modeller på tidsseriedata. Jag skrev mitt examensarbete i finans, där jag analyserade historisk aktiedata för statistiskt signifikanta avvikelser från förväntningar.";
    educationTitles[2].textContent = "CS50's Introduction to Computer Science";
    educationDescriptions[2].textContent = "Lär ut algoritmer, datastrukturer, webbutveckling och mer, med hjälp av språk som C, Python, SQL och JavaScript.";
    educationTitles[3].textContent = "CS50's Web Programming with Python and JavaScript";
    educationDescriptions[3].textContent = "Fördjupar sig i webbutveckling med Python, JavaScript och SQL, med ramverk som Django, React och Bootstrap. Ämnen inkluderar databasdesign, skalbarhet, säkerhet och användarupplevelse.";

  } else {
    // Switch to English
    languageText.textContent = "EN";
    languageSwitch.style.transform = "translateX(0)"; // Move the switch to the left

    // Hero Section
    heroTitle.textContent = "Hello, my name is";
    heroSubtitle.textContent = "and I'm a Software Developer";

    // About Section
    aboutme.textContent = "About me";
    aboutText.textContent = "I am a dedicated software developer with a strong focus on building modern web applications. My expertise includes creating efficient, scalable, and user-centric solutions. While I specialize in backend development with Python and Java, I am also proficient in frontend and full-stack development. I am open to exploring opportunities that align with my skills and interests. Additionally, I am an amateur fitness enthusiast and football player.";

    // Skills Section
    strongSkillsTitle.textContent = "My strongest skills";
    familiarSkillsTitle.textContent = "I'm also familiar with";

    // Projects Section
    experienceTitle.textContent = "My Experience";
    projectTitles[0].textContent = "Systemvetardagen.com Job Fair Website";
    projectDescriptions[0].textContent = "Omfattande jobbmässaplattform som betjänar universitetsstudenter och rekryteringsföretag med företagsprofiler och evenemangsinformation med en tvåspråkig gränssnitt.";
    projectTitles[1].textContent = "Private Email Client";
    projectDescriptions[1].textContent = "A streamlined web-based messaging platform where users can send, receive, and archive messages all in one place.";
    projectTitles[2].textContent = "Auction Website";
    projectDescriptions[2].textContent = "Auction website built, allowing users to create accounts, list items for auction, place bids, and manage their auction activities.";
    projectTitles[3].textContent = "Dog Register";
    projectDescriptions[3].textContent = "A Java program which allows users to register owners and their dogs and keep track of the relations between them, text-based interface.";

    // Education Section
    educationTitle.textContent = "Formal Education and Courses";
    educationTitles[0].textContent = "B.Sc. Computer and Systems Science";
    educationDescriptions[0].textContent = "During these studies, I gained proficiency in designing and implementing programs using UML and Java. Additionally, I acquired knowledge in User Interface/User Experience (UI/UX) design and database methods. Furthermore, I learned programming for the internet using Java.";
    educationTitles[1].textContent = "B.Sc. Business Administration (Finance)";
    educationDescriptions[1].textContent = "I extensively used Microsoft Excel for financial calculations, PowerPoint for presentations, and Microsoft Word for collaborative writing during my studies. My curriculum covered management, financial statistics, and accounting. I also used R programming to build ARIMA models on time series data. Notably, I wrote my bachelor’s thesis in finance, analyzing historical stock data for statistically significant deviations from expectations.";
    educationTitles[2].textContent = "CS50's Introduction to Computer Science";
    educationDescriptions[2].textContent = "Teaches algorithms, data structures, web development, and more, using languages such as C, Python, SQL, and JavaScript.";
    educationTitles[3].textContent = "CS50's Web Programming with Python and JavaScript";
    educationDescriptions[3].textContent = "Dives into web development with Python, JavaScript, and SQL, using frameworks like Django, React, and Bootstrap. Topics include database design, scalability, security, and user experience.";
  }
});
  
