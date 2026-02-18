// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my selected cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-conference-acceptance-resam-requirements-elicitation-and-specification-for-deep-learning-anomaly-models-with-applications-to-uav-flight-controllers-was-accepted-to-the-30th-ieee-international-requirements-engineering-conference-re-2022",
          title: 'Conference acceptance: “RESAM: Requirements Elicitation and Specification for Deep-Learning Anomaly Models with Applications...',
          description: "",
          section: "News",},{id: "news-conference-acceptance-towards-an-annotated-all-weather-dataset-of-flight-logs-for-small-uncrewed-aerial-system-was-accepted-to-aiaa-aviation-2023-️",
          title: 'Conference acceptance: “Towards an Annotated All-Weather Dataset of Flight Logs for Small Uncrewed...',
          description: "",
          section: "News",},{id: "news-project-milestone-notre-dame-was-selected-for-a-nasa-university-leadership-initiative-uli-award-led-by-my-advisor-prof-jane-cleland-huang-the-multi-university-sade-effort-is-a-multi-million-multi-year-collaboration-advancing-safe-transparent-suas-authorization-for-controlled-airspace",
          title: 'Project milestone: Notre Dame was selected for a NASA University Leadership Initiative (ULI)...',
          description: "",
          section: "News",},{id: "news-workshop-acceptance-an-environmentally-complex-requirement-for-safe-separation-distance-between-uavs-was-accepted-to-ieee-rew-2024-envire",
          title: 'Workshop acceptance: “An Environmentally Complex Requirement for Safe Separation Distance Between UAVs” was...',
          description: "",
          section: "News",},{id: "news-conference-acceptance-automated-on-entry-decision-making-for-utm-zones-based-on-reputations-and-certifications-was-accepted-to-aiaa-aviation-forum-and-ascend-2025",
          title: 'Conference acceptance: “Automated On-Entry Decision-Making for UTM Zones Based on Reputations and Certifications”...',
          description: "",
          section: "News",},{id: "news-conference-acceptance-questrl-a-q-amp-amp-a-framework-for-designing-trustworthy-reinforcement-learning-systems-was-accepted-to-ieee-re-2025",
          title: 'Conference acceptance: “QUESTRL: A Q&amp;amp;amp;A Framework for Designing Trustworthy Reinforcement Learning Systems” was...',
          description: "",
          section: "News",},{id: "news-conference-acceptance-evaluating-reinforcement-learning-safety-and-trustworthiness-in-cyber-physical-systems-was-accepted-to-ieee-acm-cain-2025",
          title: 'Conference acceptance: “Evaluating Reinforcement Learning Safety and Trustworthiness in Cyber-Physical Systems” was accepted...',
          description: "",
          section: "News",},{id: "news-conference-acceptance-validating-terrain-models-in-digital-twins-for-trustworthy-suas-operations-was-accepted-to-acm-ieee-models-c-2025",
          title: 'Conference acceptance: “Validating Terrain Models in Digital Twins for Trustworthy sUAS Operations” was...',
          description: "",
          section: "News",},{id: "news-journal-acceptance-multi-source-plume-tracing-via-multi-agent-reinforcement-learning-under-common-uav-faults-was-accepted-to-machine-learning-with-applications-mlwa",
          title: 'Journal acceptance: “Multi-source Plume Tracing via Multi-agent Reinforcement Learning under Common UAV-faults” was...',
          description: "",
          section: "News",},{id: "news-preprint-update-cognitive-guardrails-for-open-world-decision-making-in-autonomous-drone-swarms-is-now-available-on-arxiv",
          title: 'Preprint update: “Cognitive Guardrails for Open-World Decision Making in Autonomous Drone Swarms” is...',
          description: "",
          section: "News",},{id: "news-conference-acceptance-cognition-envelopes-for-bounded-ai-reasoning-in-autonomous-uas-operations-was-accepted-to-ieee-acm-cain-in-rio-de-janeiro-brazil",
          title: 'Conference acceptance: “Cognition Envelopes for Bounded AI Reasoning in Autonomous UAS Operations” was...',
          description: "",
          section: "News",},{id: "news-conference-acceptance-coverage-path-planning-for-holonomic-uavs-via-uniaxial-feasible-gap-severity-guided-decomposition-was-accepted-to-icra-2026-see-you-in-vienna-austria",
          title: 'Conference acceptance: “Coverage Path Planning for Holonomic UAVs via Uniaxial-Feasible, Gap-Severity Guided Decomposition”...',
          description: "",
          section: "News",},{id: "projects-coverage-path-planning-for-holonomic-uavs",
          title: 'Coverage Path Planning for Holonomic UAVs',
          description: "Gap-severity guided decomposition for complete, efficient, and robust coverage.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/0_coverage-path-planning/";
            },},{id: "projects-sade-zone-nasa-uli",
          title: 'SADE Zone (NASA ULI)',
          description: "Safety-aware drone authorization and reputation for controlled airspace.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_sade-zone-uli/";
            },},{id: "projects-multi-agent-reinforcement-learning-for-plume-tracing",
          title: 'Multi-Agent Reinforcement Learning for Plume Tracing',
          description: "Fault-aware, uncertainty-tolerant MARL for multi-source plume localization.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_multi-agent-plume-tracing/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/alarcon91", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=LBmWfggAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-7829-7088", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/TonyAlarcon", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
