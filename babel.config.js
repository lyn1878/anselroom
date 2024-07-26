module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 'ALL', // This setting ensures all blog posts are displayed
          blogSidebarCount: 'ALL', // Ensures all posts are displayed in the sidebar
          blogSidebarTitle: 'All Blog Posts',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
