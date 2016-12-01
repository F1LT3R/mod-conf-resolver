# Mod Conf Resolver

This is a somplifier conf resolver. The previous version was too complex and
in hindsight, the benefits of deep configurations may not outweigh the effort
in configuring them. I could not see any advantage over just looking at the
nested configuration and copying the properties, and installing the packages
in the local repo.

Conf:

```javascript?ts=4
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
  	// options: {}
    module: 'module-1',
    template: 'partials/template-1.html'
  }
};
```

Output:

```javascript
// node resolver.js

app: {
	foo: [Function],
  bar: [Function: bar],
  baz: [
  	[Function],
  	[Function],
  	[Function]
  ],
  qux: [Function]
}
```