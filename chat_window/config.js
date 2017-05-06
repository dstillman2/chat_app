const config = {
  initialNode: 0,
  draggable: true,
  minWidth: 350,
  minHeight: 400,

  nodes: {
    0: {
      type: 'survey',
      title: 'XYZ Survey',
      theme: 'test-theme',
      width: 350,
      height: 470,
      content: [
        {
          id: 'aieojvxz',
          type: 'breadcrumbs',
          links: [
            {
              name: 'Home',
              linkTo: 2,
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
          id: 'a3ifjao2',
          type: 'heading',
          textNode: 'Please enter the information below:',
        },
        {
          id: '3nfsjkaef',
          type: 'form',
          fields: [
            {
              id: 'k3oalwkd',
              type: 'textbox',
              label: 'First Name',
              placeholder: 'ex. Mary',
              validate: true,
            },
          ],
        },
        {
          id: '3nfsjkaem',
          type: 'form',
          fields: [
            {
              id: 'k3oalwkd',
              type: 'textbox',
              label: 'Last Name',
              placeholder: 'ex. Ann',
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
