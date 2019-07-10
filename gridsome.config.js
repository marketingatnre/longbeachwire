module.exports = {
  siteName: 'The Long Beach Wire',
  siteDescription: 'Get the latest scoop on everything Long Beach',
  siteUrl: 'https://lbwire.com',
  plugins: [
     {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'news/*.md',
        typeName: 'NewsPost',
        refs: {
          author: 'Author', 
          tags: { 
            typeName: 'Tag',
            route: '/tag/:slug',
            create: true
          }
        },
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        }
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'authors/*.md',
        typeName: 'Author',
        route: '/author/:title'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: '000000000000'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  }
}
