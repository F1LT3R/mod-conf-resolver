module.exports = {
  foo: 'module-1',

  bar: () => {
    return 'this is bar';
  },

  baz: [
    'module-1',
    'module-1',
    {
    	options: {a: 1, b: 2},
      module: 'module-1',
      template: 'partials/template-1.html'
    }
  ],

  qux: {
    module: 'module-1',
    template: 'partials/template-1.html'
  }
};
