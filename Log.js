// Registering component in log-component.js
AFRAME.registerComponent('log', {
    schema: {
      message: {type: 'string', default: 'Hello, Wordl!'}
    },
    init: function () {
        console.log(this.data.message);
      }
  });

