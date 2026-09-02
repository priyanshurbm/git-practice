module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(TICKET-\d+): (.+)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  rules: {
    'header-max-length': [2, 'always', 72],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
  },
};
