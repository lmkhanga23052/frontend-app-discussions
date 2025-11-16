// webpack.dev-tutor.config.js

// Dùng frontend-build để lấy config dev mặc định
const { createConfig } = require('@openedx/frontend-build');

module.exports = createConfig('webpack-dev', {
  // Chỉ override phần devServer để tắt overlay cảnh báo
  devServer: {
    // API mới của webpack-dev-server v4+
    client: {
      overlay: {
        errors: true,   // vẫn hiện overlay nếu có lỗi build thật
        warnings: false, // KHÔNG hiện overlay cho warnings (như mấy cảnh báo Sass)
      },
    },

    // API cũ (v3) – phòng trường hợp bản bạn đang dùng vẫn đọc field này
    overlay: {
      errors: true,
      warnings: false,
    },
  },
});
