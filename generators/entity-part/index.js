/**
 * Entity module.
 * @module entity
 */

const BaseSubGenerator = require('../_base/BaseSubGenerator');

const DESTINATION_FOLDER = 'entities';

const TEMPLATES = {
  files: ['index.js'],
};

const NAMED_TEMPLATES = {
  files: [
    'actions.js',
    'actionTypes.js',
    'documentation.yml',
    'dto.js',
    'inject.js',
    'record.js',
    'reducer.js',
    'schema.js',
    'selectors.js',
    'utils.js',
  ],
  units: [
    'actions.unit.js',
    'actionTypes.unit.js',
    'dto.unit.js',
    'reducer.unit.js',
    '__mocks__/utils.js',
    'schema.unit.js',
    'selectors.unit.js',
    'utils.unit.js',
  ],
};

/**
 * Entity's part generator class.
 *
 * @extends BaseSubGenerator
 * @type {module.EntityGenerator}
 */
module.exports = class EntityPartGenerator extends BaseSubGenerator {
  /**
   * Setup.
   *
   * @param {string|Array} args - Arguments at initialization.
   * @param {Object} opts - Options at initialization.
   */
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    this.mainArgument(
      'entity',
      "Entity's part's name. Use CamelCase for it. You may use `featureName/EntityPartName` to create sub-entity part.",
    );
  }

  /**
   * Initialize.
   */
  initializing() {
    this.setDestination(DESTINATION_FOLDER);
    super.initializing();
  }

  /**
   * Install.
   */
  install() {
    super.install(['immutable', 'reselect', 'redux-saga', 'axios', 'ajv'], {
      save: true,
    });
  }

  /**
   * Method for "writing" phase of yeaoman generator.
   */
  writing() {
    this.writeTemplates(TEMPLATES);
    this.writeNamedTemplates(NAMED_TEMPLATES);
  }
};
