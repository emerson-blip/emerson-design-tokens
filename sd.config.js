import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

// Register Tokens Studio transforms
register(StyleDictionary);

export default {
  source: ['tokens.json'],
  platforms: {
    // CSS Custom Properties
    css: {
      transformGroup: 'tokens-studio',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    },
    // SCSS Variables
    scss: {
      transformGroup: 'tokens-studio',
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables'
        }
      ]
    },
    // JavaScript/TypeScript
    js: {
      transformGroup: 'tokens-studio',
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6'
        },
        {
          destination: 'tokens.json',
          format: 'json/nested'
        }
      ]
    }
  }
};
