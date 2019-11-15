export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5dcee6729f0e169e1fd85116',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n7u7ocjc',
                  apiId: '822c18f9-1df3-4a4e-bc0a-344cce7cc69a'
                },
                {
                  buildHookId: '5dcee672888bd421e957a28c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pagm8hpv',
                  apiId: 'a486a307-631f-4e50-b97c-4e67fc2c63bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaredjgebel/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pagm8hpv.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
