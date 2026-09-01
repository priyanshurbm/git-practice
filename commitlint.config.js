module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'ticket-format': (parsed) => {
          const pattern = /^TICKET-\d+:\s.+$/;
          return [
            pattern.test(parsed.header),
            'Commit must match TICKET-123: Description',
          ];
        },
      },
    },
  ],
  rules: {
    'header-max-length': [2, 'always', 72],
    'type-enum': [0],
    'type-empty': [0],
    'subject-empty': [0],
    'ticket-format': [2, 'always'],
  },
};
