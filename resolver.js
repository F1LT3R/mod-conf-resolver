const path = require('path');

const type = ref => {
	return Array.isArray(ref) ? '_array' : `_${typeof ref}`;
};

const resolve = {
	_function: elem => {
		return elem;
	},

	_string: name => {
		const pluginMod = require(name);
		if (typeof pluginMod === 'function') {
			return pluginMod;
		}
		return false;
	},

	_object: item => {
		if (!{}.hasOwnProperty.call(item, 'module')) {
			throw new Error('Plugin object should have a module property');
		}

		const mod = resolve._string(item.module);

		if (item.template) {
			// mod.setTemplate(item.template);
		}

		if (item.options) {
			// mod.setOptions(item.options);
		}

		return mod;
	},

	_array: elem => {
		return elem.map(item => {
			return resolve[type(item)](item);
		});
	},

	_undefined: elem => {
		throw new Error(elem);
	}
};

const resolveConf = conf => {
	const liveConf = {};

	Reflect.ownKeys(conf).forEach(key => {
		const elem = conf[key];
		liveConf[key] = resolve[type(elem)](elem);
	});

	return liveConf;
};

const confFile = require(path.join(process.cwd(), 'conf.js'));
const app = resolveConf(confFile);
console.log('app:', app);
