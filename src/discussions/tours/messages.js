import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  advanceButtonText: {
    id: 'tour.action.advance',
    defaultMessage: 'Tiếp theo',
    description: 'Action to go to next step of tour',
  },
  dismissButtonText: {
    id: 'tour.action.dismiss',
    defaultMessage: 'Bỏ qua',
    description: 'Action to dismiss current tour',
  },
  endButtonText: {
    id: 'tour.action.end',
    defaultMessage: 'Đã hiểu',
    description: 'Action to end current tour',
  },
  notifyAllLearnersTourTitle: {
    id: 'tour.title.notifyAllLearners',
    defaultMessage: 'Thông báo cho người học.',
    description: 'Title of the tour to notify all learners',
  },
  notifyAllLearnersTourBody: {
    id: 'tour.body.notifyAllLearners',
    defaultMessage: 'Chọn vào ô này để gửi thông báo cho tất cả người học.',
    description: 'Body of the tour to notify all learners',
  },
});

export default messages;
