export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '608191b2fb1d015e06b7422b',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-gpb1occ7',
                  apiId: 'c76ad5b6-db05-4e69-9665-7005d780c990'
                },
                {
                  buildHookId: '608191b3b906ec63c6bc5373',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-ycxcxtuu',
                  apiId: '5527bfd3-7494-4df2-b7c1-6aa8cef5d3db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sampathkumar29/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-ycxcxtuu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
