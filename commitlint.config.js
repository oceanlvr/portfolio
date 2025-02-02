export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 新功能
        'fix',      // 修复
        'docs',     // 文档
        'style',    // 样式
        'refactor', // 重构
        'perf',     // 性能
        'test',     // 测试
        'chore',    // 构建过程或辅助工具的变动
        'revert',   // 回退
        'wip'       // 开发中
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [0],
    'footer-empty': [0],
    'body-empty': [0]
  },
  prompt: {
    questions: {
      body: {
        skip: true
      },
      footer: {
        skip: true
      }
    }
  },
}; 
