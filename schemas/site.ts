export default {
  name: 'site',
  title: 'Site',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero: Title',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero: Description',
      type: 'text',
    },
    {
      name: 'heroCoverImage',
      title: 'Hero: Cover image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroResume',
      title: 'Hero: Resume',
      type: 'file',
    },
    {
      name: 'heroCTA',
      title: 'Hero: CTA',
      type: 'string',
    },
    {
      name: 'heroTags',
      title: 'Hero: Tags',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'tagName',
              title: 'Tag: Name',
              type: 'string',
            },
            {
              name: 'tagType',
              title: 'Tag: Type',
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
      name: 'skillsTitle',
      title: 'My Skills: Title',
      type: 'string',
    },
    {
      name: 'projectsTitle',
      title: 'Projects: Title',
      type: 'string',
    },
    {
      name: 'contactTitle',
      title: 'Contact: Title',
      type: 'string',
    },
    {
      name: 'socials',
      title: 'Contact: Socials',
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
    {
      name: 'footerSholaks',
      title: 'Footer: Sholaks',
      type: 'array',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'sholak',
              title: 'Sholak',
              type: 'array',
              of: [
                {
                  type: 'string',
                }
              ],
            },
            {
              name: 'author',
              title: 'Footer: Sholak Author',
              type: 'string',
            },
            {
              name: 'translation',
              title: 'Footer: Sholak Translation',
              type: 'string',
            }
          ],
        }
      ]
    },
    
    {
      name: 'footerText',
      title: 'Footer: Text',
      type: 'string',
    },
  ],
}
