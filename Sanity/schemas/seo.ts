export default{
    name:"seo",
    title:"SEO",
    type:"object",
    fields: [
                  {
                    name: 'canonical',
                    title: 'Canonical',
                    type: 'string',
                  },
                  {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                  },
                  {
                    name: 'metaDesc',
                    title: 'Meta Description',
                    type: 'text',
                  },
                  {
                    name: 'opengraphTitle',
                    title: 'OpenGraph Title',
                    type: 'string',
                  },
                  {
                    name: 'opengraphDescription',
                    title: 'OpenGraph Description',
                    type: 'text',
                  },
                  {
                    name: 'opengraphImage',
                    title: 'OpenGraph Image',
                    type: 'image',
                  },
                ],
}