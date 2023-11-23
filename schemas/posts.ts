export default {
    name: 'post',
    title: 'Post',
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
        name: 'excerpt',
        title: 'Excerpt',
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
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'category' }] }],
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'tag' }] }],
      },
    ],
  };
  