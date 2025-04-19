export default {
  name: 'achievement',
  title: 'Achievement',
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
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },

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
}