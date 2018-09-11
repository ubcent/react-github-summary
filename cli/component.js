const fs = require('fs');

const args = require('minimist')(process.argv.slice(2), {
    alias: {
        name: 'n',
    },
});

const { name } = args;

const PATH_COMPONENT = require('path').join(__dirname, '..', 'src', 'components', name);
const PATH_COMPONENT_JSX = require('path').join(
    __dirname, '..', 'src', 'components', name, `${name}.jsx`,
);
const PATH_COMPONENT_TEST = require('path').join(
    __dirname, '..', 'src', 'components', name, `${name}.test.js`,
);
const PATH_COMPONENT_CSS = require('path').join(
    __dirname, '..', 'src', 'components', name, `${name}.css`,
);
const PATH_COMPONENT_JS = require('path').join(
    __dirname, '..', 'src', 'components', name, 'index.js',
);

fs.mkdirSync(PATH_COMPONENT);

fs.writeFileSync(
    PATH_COMPONENT_JSX,
    `import './${name}.css';

import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

class ${name} extends PureComponent {
    static propTypes = {};
    static defaultProps = {};
    render() {
        return <div className="summary-${name.toLowerCase()}" />;
    }
}
export default ${name};
`,
);

fs.writeFileSync(
    PATH_COMPONENT_TEST,
  `import React from 'react';
import { shallow } from 'enzyme';

import ${name} from 'components/${name}';

test('TODO', () => {});
`,
);

fs.writeFileSync(
    PATH_COMPONENT_CSS,
    `.summary-${name.toLowerCase()} {
    display: block;
}
`,
);

fs.writeFileSync(
    PATH_COMPONENT_JS,
    `export default from './${name}';
`,
);
