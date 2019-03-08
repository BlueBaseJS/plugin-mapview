const { storybookWebpackConfigs } = require('@bluebase/cli-essentials');

module.exports = ({ config, mode }) => {

	config = storybookWebpackConfigs(null, null, config);

	return config;
};
