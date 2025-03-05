module.exports = {
  siteUrl: 'https://www.guardcore.co.ke', // Replace with your domain
  generateRobotsTxt: true,
  exclude: ['/dashboard/*'],
  transform: async (config, path) => {
    if (path === '/') {
      return { priority: 1.0, changefreq: 'daily' }
    }
    if (path.startsWith('/solutions')) {
      return { priority: 0.9, lastmod: new Date().toISOString() }
    }
    return config;
  }
};
