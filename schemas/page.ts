// // schemas/document.js
export default {
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'text',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200,
        },
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
      },
      {
        name: 'featuredImage',
        title: 'Featured Image',
        type: 'image',
      },
      {
        name: 'seo',
        title: 'SEO',
        type: 'seo',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'author',
      },
    ],
  };
