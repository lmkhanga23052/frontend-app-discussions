import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  confirmNowButton: {
    id: 'discussions.confirmEmailBanner',
    description: 'Button for sending confirm email and open modal',
    defaultMessage: 'Xác nhận ngay',
  },
  confirmEmailTextReminderBanner: {
    id: 'discussions.confirmEmailTextReminderBanner',
    description: 'Text for reminding user to confirm email',
    defaultMessage:
      'Đừng quên xác nhận email để bạn có thể tiếp tục đăng bài! {confirmNowButton}.',
  },
  verifiedConfirmEmailButton: {
    id: 'discussions.verifiedConfirmEmailButton',
    description: 'Button for verified confirming email',
    defaultMessage: 'Tôi đã xác nhận email',
  },
  confirmEmailModalHeader: {
    id: 'discussions.confirmEmailModalHeader',
    description: 'title for confirming email modal',
    defaultMessage: 'Xác nhận email của bạn',
  },
  confirmEmailModalBody: {
    id: 'discussions.confirmEmailModalBody',
    description: 'text hint for confirming email modal',
    defaultMessage:
      'Chúng tôi đã gửi cho bạn một email để xác minh tài khoản. Vui lòng kiểm tra hộp thư và nhấp vào nút màu đỏ trong email để xác nhận và tiếp tục học.',
  },
  confirmEmailImageAlt: {
    id: 'discussions.confirmEmailImageAlt',
    description: 'text alt confirm email image',
    defaultMessage: 'hình nền xác nhận email',
  },
});

export default messages;
