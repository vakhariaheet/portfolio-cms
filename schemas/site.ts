export default {
  name: 'site',
  title: 'Site',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Frontend', value: 'frontend'},
                  {title: 'Backend', value: 'backend'},
                  {title: 'DevOps', value: 'devops'},
                  {title: 'Other', value: 'other'},
                ],
              },
            },
          ],
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'myskills_title',
      title: 'My Skills Title',
      type: 'string',
    },
    {
      name: 'projects_title',
      title: 'Projects Title',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
      options: {
        layout: 'tags',
      },
    },
  ],
}
