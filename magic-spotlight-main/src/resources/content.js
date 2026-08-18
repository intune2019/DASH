const person = {
  name: "Selene Yu",
  title: "Founder",
  about: "Solo founder. Creator successful products.",
  location: "Europe/Lisbon" // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
}

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:support@once-ui.com`,
  },
];

// social links
const sameAs = {
  threads: "https://www.threads.com/@once_ui",
  linkedin: "https://www.linkedin.com/company/once-ui/",
  discord: "https://discord.com/invite/5EyAQ4eNdS",
};

// default schema data
const schema = {
  logo: "/images/avatar.jpg",
  type: "Person",
  name: person.name,
  jobTitle: person.title,
  description: person.about,
  email: "support@once-ui.com",
};

const seo = {
  home: {
    title: "Selene Yu: Launch your first business",
    description: "Build your solo business and live on your own terms. Start your journey today.",
    path: "/",
    image: "/images/og/home.jpg",
  },
  about: {
    title: "About - Selene Yu",
    description: "Solo founder. Creator of Once UI and the Design Engineers Club.",
    path: "/about",
    image: "/images/og/about.jpg",
  },
  blog: {
    title: "Blog - Selene Yu",
    description: "Learn the skills you need to become an independent creator. Everything you need to know about design, development and business.",
    path: "/blog",
    image: "/images/og/blog.jpg",
  }
}

export { social, person, schema, sameAs, seo };
