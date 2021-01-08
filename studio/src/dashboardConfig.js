export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff876d6c60b75e8e39a5065',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fimvzm56',
                  apiId: '39e29bbf-5b73-40c1-95e3-573c7bb2b2ab'
                },
                {
                  buildHookId: '5ff876d7a40131f72f063e66',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bkshvunr',
                  apiId: '0b3c055f-bc74-4e1f-a7f0-9b25646864b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hiroyalty/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bkshvunr.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
