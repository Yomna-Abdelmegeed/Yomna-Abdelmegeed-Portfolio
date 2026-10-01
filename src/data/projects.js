// Central project data. Update titles, descriptions, links, and images here —
// every project card on the site reads from this file.
const base = import.meta.env.BASE_URL;

const projects = [
  {
    id: "academiax",
    title: "AcademiaX",
    subtitle: "Smart Academic Management System",
    badge: "Graduation Project",
    description:
      "AcademiaX is an all-in-one digital ecosystem designed to streamline, centralize, and modernize university academic operations. Built entirely with Flutter, it provides a unified experience across mobile and web platforms for Students, Instructors, and Administrators.",
    highlights: [
      "Secure authentication with JWT-based session management",
      "Role-based access for students, instructors & admins",
      "Course material distribution — video & PDF content",
      "Assignment submission with AI-powered plagiarism detection",
      "Live video classrooms using Agora RTC",
      "Interactive quizzes and instructor grading dashboards",
      "Announcements and community commenting",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "REST APIs",
      "Dio",
      "BLoC/Cubit",
      "Firebase",
      "GoRouter",
      "GetIt",
      "Clean Architecture",
      "MVVM",
      "Git",
      "GitHub",
    ],
    image: `${base}images/projects/academiax.png`,
    screenshots: [`${base}images/projects/academiax.png`],
    githubUrl: "https://github.com/Yomna-Abdelmegeed/academiax",
    featured: true,
  },
  {
    id: "cookjar",
    title: "CookJar",
    subtitle: "Recipe Discovery & Collection App",
    description:
      "CookJar turns recipe discovery into a small daily ritual. Instead of scrolling endlessly through a recipe feed, users tap Shake the Jar and get a random recipe pulled straight from the jar — with the option to reshake, view full details, or save it to their personal collection for later.",
    technologies: [
      "Flutter",
      "Dart",
      "Clean Architecture",
      "REST API",
      "Firebase Authentication",
      "Hive",
      "Cubit",
      "Git/GitHub",
    ],
    image: `${base}images/projects/cookjar.png`,
    screenshots: [`${base}images/projects/cookjar.png`],
    githubUrl: "https://github.com/Yomna-Abdelmegeed/cookjar",
    featured: true,
  },
  {
    id: "flasho",
    title: "Flasho",
    subtitle: "Flashcard Quiz App",
    description:
      "Flasho is a Flutter flashcard study application built as a clean MVP. Users can create their own study decks, add flashcards, and review them in a distraction-free study mode with Show/Hide Answer and Previous/Next navigation. Fully offline, with local data persistence via SharedPreferences.",
    technologies: [
      "Flutter",
      "Dart",
      "MVVM",
      "Cubit",
      "Repository Pattern",
      "SharedPreferences",
      "Feature-based Architecture",
    ],
    image: `${base}images/projects/flasho.gif`,
    screenshots: [`${base}images/projects/flasho.gif`],
    githubUrl:
      "https://github.com/Yomna-Abdelmegeed/CodeAlpha_FlashcardQuizApp",
    featured: true,
  },
  {
    id: "dailyquote",
    title: "DailyQuote",
    subtitle: "Random Quote Generator",
    description:
      "DailyQuote delivers a fresh quote whenever you need one, with the ability to favorite, copy, and share quotes through a clean and testable architecture.",
    technologies: [
      "Flutter",
      "Dart",
      "MVVM",
      "Cubit/BLoC",
      "Repository Pattern",
      "Dio",
      "REST API",
    ],
    image: `${base}images/projects/dailyquote.png`,
    screenshots: [`${base}images/projects/dailyquote.png`],
    githubUrl:
      "https://github.com/Yomna-Abdelmegeed/CodeAlpha_RandomQuoteGenerator",
    featured: false,
  },
  {
    id: "quran-app",
    title: "Quran App",
    subtitle: "Quran, Hadith & Islamic Companion",
    description:
      "A beautifully crafted Flutter application bringing together the Holy Quran, Hadith, Tasbeeh, Islamic Radio, and Azkar — all wrapped in an elegant, dark-themed UI.",
    technologies: [
      "Flutter",
      "Dart",
      "Dio",
      "SharedPreferences",
      "Repository Pattern",
      "Clean Separation of Concerns",
    ],
    image: `${base}images/projects/quran-app.png`,
    screenshots: [`${base}images/projects/quran-app.png`],
    githubUrl: "https://github.com/Yomna-Abdelmegeed/Quran_APP",
    featured: false,
  },
];

export default projects;
