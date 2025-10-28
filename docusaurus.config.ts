import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'VaroPlugin Documentation',
  tagline: 'The VaroPlugin documentation.',
  favicon: 'img/varo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/varoplugin-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Almighty-Satan', // Usually your GitHub org/user name.
  projectName: 'varoplugin-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Almighty-Satan/varoplugin-docs/tree/master',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/varo.png',
    navbar: {
      title: 'Varo Plugin',
      logo: {
        alt: '',
        src: 'img/varo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'setupSidebar',
          position: 'left',
          label: 'Setup',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developerSidebar',
          position: 'left',
          label: 'Developers',
        },
        {
          href: 'https://github.com/CuukyOfficial/VaroPlugin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Download',
          items: [
            {
              label: 'SpigotMC',
              href: 'https://varoplugin.de',
            },
            {
              label: 'Modrinth',
              href: 'https://modrinth.com/plugin/varo'
            },
            {
              label: 'Hangar',
              href: 'https://hangar.papermc.io/VaroPlugin/Varo'
            },
            {
              label: 'Maven Repository',
              href: 'https://repo.varoplugin.de/'
            }
          ],
        },
        {
          title: 'Need Help?',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.varoplugin.de/',
            },
            {
              label: 'YouTube Video (German, Outdated)',
              href: 'https://www.youtube.com/watch?v=nNsZ7CB1l54',
            }
          ],
        },
        {
          title: 'Source',
          items: [
            {
              label: 'GitHub (VaroPlugin)',
              to: 'https://github.com/CuukyOfficial/VaroPlugin',
            },
            {
              label: 'GitHub (Docs)',
              href: 'https://github.com/Almighty-Satan/varoplugin-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Almighty-Satan. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark'
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
