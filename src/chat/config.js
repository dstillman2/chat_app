const config = {
  initialNode: 1,
  isDraggable: true,
  hasCircularTabbing: true,
  minWidth: 350,
  minHeight: 400,
  title: 'Chat with us',
  theme: 'test-theme',

  nodes: {
    1: {
      type: 'survey',
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
              name: 'Existing ',
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
            {
              id: 'k3oalwks',
              type: 'textbox',
              label: 'Last Name',
              placeholder: 'ex. Ann',
              validate: true,
            },
          ],
        },
        {
          id: 'oaseofia',
          type: 'button',
          text: 'Chat Now',
          linkToNode: 2,
        },
      ],
    },

    2: {
      type: 'chat',
      width: 400,
      height: 470,
      content: [],
    },
  },
};

export default config;
