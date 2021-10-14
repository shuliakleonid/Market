module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: [
          "tsconfig.*?.json",
          './tsconfig.json'
        ],
        createDefaultProgram: true
      },
      plugins: ['@angular-eslint/template','import'],
      extends: [
        "plugin:@angular-eslint/recommended",
        "airbnb-typescript/base"
      ]
    },
    {
      files: ["*.component.html"],
      extends: [
        "plugin:@angular-eslint/template/recommended",
        'plugin:prettier/recommended'
      ],
      rules: {
        "max-len": ["error", { "code": 140 }],
        '@typescript-eslint/no-unused-vars': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
        // '@typescript-eslint/unbound-method': [
        //   'error',
        //   {
        //     ignoreStatic: true,
        //   }
        // ]
      }
    },
    {
      files: ["*.component.ts"],
      extends: ["plugin:@angular-eslint/template/process-inline-templates"]
    }
  ]
}
