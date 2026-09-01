module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'type-enum': [0],
    'header-pattern': [2, 'always', /^TICKET-\d+:\s.+$/],
  },
};
