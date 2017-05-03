const config = {
  initialNode: 0,

  nodes: {
    0: {
      type: 'survey',
      title: 'XYZ Survey',
      theme: 'test-theme',
      draggable: true,
      width: 350,
      height: 470,
      content: [
        {
          id: 'a3ifjao2',
          type: 'heading',
          textNode: 'Which Mobile topic would you like help with?',
        },
        {
          id: 'aieojvxz',
          type: 'breadcrumbs',
          links: [
            {
              name: 'Home',
              linkTo: 1,
            },
            {
              name: 'Existing Service',
              linkTo: 1,
            },
            {
              name: 'Mobile',
              linkTo: 1,
            },
          ],
        },
        {
          id: '3nfsjkaef',
          type: 'form',
          fields: [
            {
              id: 'k3oalwkd',
              type: 'textbox',
              label: 'Label',
              placeholder: 'placeholder',
              validate: true,
            },
          ],
        },
      ],
    },

    1: {
      type: 'guide',
      title: 'YZ Guide',
      width: 500,
      height: 650,
      content: [],
    },
  },
};

export default config;
