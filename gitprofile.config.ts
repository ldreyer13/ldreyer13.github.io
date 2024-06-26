// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ldreyer13', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ldreyer13/Projects'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Mitochondrial calcium uptake 1 (Micu1) gene found to be expressed in pancreatic B-cells',
          description:
            'Our research suggests that Micu1 is expressed in pancreatic B-cells, potentially acting as a co-regulator of the insulin gene alongside Pdx1 and NeuroD1.',
          imageUrl:
            '',
          link: '',
        },
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Layla Dreyer',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://ldreyer13.github.io',
    phone: '',
    email: 'layladreyer13@gmail.com',
  },
  resume: {
    fileUrl:
      'https://github.com/ldreyer13/ldreyer13.github.io/raw/main/pdf/LdreyerCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'CPR', 'First Aid', 'Medication Technician'
  ],
  experiences: [
    {
      company: 'Belmare Senior Living',
      position: 'Medication Technician',
      from: 'June 2023',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Covenant Care',
      position: 'Patient Care Attendant',
      from: 'May 2023',
      to: 'August 2023',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'CSU Stanislaus',
      degree: 'BS',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'CSU Chico',
      degree: 'BS in Progress',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [
    {
      title: 'Effects of short-term experimental manipulation of captive social environment on uropygial gland microbiome and preen oil volatile composition',
      conferenceName: '',
      journalName: 'Frontiers in Ecology and Evolution',
      authors: 'Danielle J. Whittaker, Amruth Atyam, Nathan A. Burroughs, Jonathan M. Greenberg, Travis J. Hagey, Milos V. Novotny, Helena A. Soini, Kevin R. Theis, Tricia A. Van Laar, and Joel W. G. Slade',
      link: 'https://www.frontiersin.org/articles/10.3389/fevo.2022.1027399/full',
      description:
        'Avian preen oil, secreted by the uropygial gland, is an important source of volatile compounds that convey information about the sender’s identity and quality, making preen oil useful for the recognition and assessment of potential mates and rivals. Although intrinsic factors such as hormone levels, genetic background, and diet can affect preen oil volatile compound composition, many of these compounds are not the products of the animal’s own metabolic processes, but rather those of odor-producing symbiotic microbes. Social behavior affects the composition of uropygial microbial communities, as physical contact results in microbe sharing. We experimentally manipulated social interactions in captive dark-eyed juncos (Junco hyemalis) to assess the relative influence of social interactions, subspecies, and sex on uropygial gland microbial composition and the resulting preen oil odor profiles',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'emerald',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
