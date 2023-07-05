// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Korpusy.pl',
  tagline: 'Wszystko o korpusach językowych',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.korpusy.pl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ipipan', // Usually your GitHub org/user name.
  projectName: 'korpusy', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-informatyczne',
        path: 'docs-informatyczne',
        routeBasePath: 'docs-informatyczne',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-narzedzia',
        path: 'docs-narzedzia',
        routeBasePath: 'docs-narzedzia',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            'https://github.com/ipipan/korpusy/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            'https://github.com/ipipan/korpusy/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Korpusy.pl',
        logo: {
          alt: 'Korpusy.pl',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Korpusy dla językoznawców',
          },
          {
            to: '/docs-informatyczne/intro',    // ./docs-api/Intro.md
            label: 'Korpusy informatyczne',
            position: 'left',
            activeBaseRegex: `/docs-informatyczne/`,
          },
          {
            to: '/docs-narzedzia/intro',    // ./docs-api/Intro.md
            label: 'Narzędzia korpusowe',
            position: 'left',
            activeBaseRegex: `/docs-narzedzia/`,
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ipipan/korpusy/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Korpusy',
            items: [
              {
                label: 'Korpusy dla językoznawców',
                to: '/docs/intro',
              },
              {
                label: 'Korpusy informatyczne',
                to: '/docs-informatyczne/intro',
              },
              {
                label: 'Narzędzia korpusowe',
                to: '/docs-narzedzia/intro',
              },
            ],
          },
          {
            title: 'Społeczność',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/lingwistyka.komputerowa/',
              },
              //{
              //  label: 'Discord',
              //  href: 'https://discordapp.com/invite/docusaurus',
              //},
              {
                label: 'Twitter',
                href: 'https://twitter.com/ZIL_IPIPAN',
              },
            ],
          },
          {
            title: 'Inne',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ipipan',
              },
              {
                label: 'Hugging Face',
                href: 'https://huggingface.co/ipipan',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Instytut Podstaw Informatyki PAN. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
