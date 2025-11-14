import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'discussions.app.title',
    defaultMessage: 'Thảo luận',
  },
  searchAllPosts: {
    id: 'discussions.posts.actionBar.searchAllPosts',
    defaultMessage: 'Tìm kiếm tất cả bài viết',
    description: 'Placeholder text in search box',
  },
  search: {
    id: 'discussions.posts.actionBar.search',
    defaultMessage: `{page, select,
      topics {Tìm kiếm theo chủ đề}
      posts {Tìm kiếm tất cả bài viết}
      learners {Tìm kiếm người học}
      myPosts {Tìm kiếm bài viết của tôi}
      other {{page}}
    }`,
    description: 'Placeholder text in search box',
  },
  searchInfo: {
    id: 'discussions.actionBar.searchInfo',
    defaultMessage: 'Đang hiển thị {count} kết quả cho "{text}"',
    description: 'Message displayed when user performs a search',
  },
  searchRewriteInfo: {
    id: 'discussions.actionBar.searchRewriteInfo',
    defaultMessage:
      'Không tìm thấy kết quả cho "{searchString}". Đang hiển thị {count} kết quả cho "{textSearchRewrite}".',
    description:
      'Message displayed when user performs a search and search query is rewritten because matching results are not found',
  },
  searchInfoSearching: {
    id: 'discussions.actionBar.searchInfoSearching',
    defaultMessage: 'Đang tìm kiếm...',
    description: 'Message displayed when user performs a search',
  },
  clearSearch: {
    id: 'discussions.actionBar.clearSearch',
    defaultMessage: 'Xóa kết quả',
    description: 'Button to clear search',
  },
  addAPost: {
    id: 'discussion.posts.actionBar.add',
    defaultMessage: 'Tạo bài thảo luận',
    description: 'Button to add a new discussion post',
  },
  close: {
    id: 'discussion.posts.actionBar.close',
    defaultMessage: 'Đóng',
    description:
      'Alt description for close icon button for closing in-context sidebar.',
  },
  confirmEmailTitle: {
    id: 'discussion.posts.confirm.email.title',
    defaultMessage: 'Xác nhận email của bạn',
    description: 'Confirm email title for unverified users.',
  },
  confirmEmailDescription: {
    id: 'discussion.posts.confirm.email.description',
    defaultMessage:
      'Bạn cần xác nhận email trước khi có thể tham gia thảo luận. Nhấn nút bên dưới để nhận email chứa liên kết xác nhận. Mở email đó, sau đó tải lại trang này để bắt đầu đóng góp.\n\nKhông thấy email? Hãy kiểm tra thư mục spam hoặc gửi lại email.',
    description: 'Confirm email description for unverified users.',
  },
  confirmEmailButton: {
    id: 'discussion.posts.confirm.email.button',
    defaultMessage: 'Gửi liên kết xác nhận',
    description: 'Confirmation link email button.',
  },
  closeButton: {
    id: 'discussion.posts.close.button',
    defaultMessage: 'Đóng',
    description: 'Close button.',
  },
  postLimitTitle: {
    id: 'discussion.posts.limit.title',
    defaultMessage: 'Đã đạt giới hạn đăng bài',
    description: 'Post limit title for users who reached the limit.',
  },
  postLimitDescription: {
    id: 'discussion.posts.limit.description',
    defaultMessage:
      'Bạn đã đạt đến giới hạn số bài có thể đăng. Vui lòng thử lại sau.',
    description: 'Post limit description for users who reached the limit.',
  },
});

export default messages;
