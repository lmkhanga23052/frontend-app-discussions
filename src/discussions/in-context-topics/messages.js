import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  backAlt: {
    id: 'discussions.topics.backAlt',
    defaultMessage: 'Quay lại danh sách chủ đề',
    description: 'Display back button text used to navigate back to topics list',
  },
  discussions: {
    id: 'discussions.topics.discussions',
    defaultMessage: `{count, plural,
      =0 {Không có thảo luận}
      one {# thảo luận}
      other {# thảo luận}
    }`,
    description: 'Display tooltip text used to indicate how many posts type are discussion',
  },
  questions: {
    id: 'discussions.topics.questions',
    defaultMessage: `{count, plural,
      =0 {Không có câu hỏi}
      one {# câu hỏi}
      other {# câu hỏi}
    }`,
    description: 'Display tooltip text used to indicate how many posts type are questions',
  },
  reported: {
    id: 'discussions.topics.reported',
    defaultMessage: '{reported} bài bị báo cáo',
    description: 'Display tooltip text used to indicate how many posts are reported',
  },
  previouslyReported: {
    id: 'discussions.topics.previouslyReported',
    defaultMessage: '{previouslyReported} bài từng bị báo cáo',
    description: 'Display tooltip text used to indicate how many posts are previously reported',
  },
  searchTopics: {
    id: 'discussions.topics.find.label',
    defaultMessage: 'Tìm kiếm chủ đề',
    description: 'Placeholder text in search bar',
  },
  unnamedSection: {
    id: 'discussions.topics.unnamed.section.label',
    defaultMessage: 'Phần chưa đặt tên',
    description: 'Text to display in place of section name if section name is empty',
  },
  unnamedSubsection: {
    id: 'discussions.topics.unnamed.subsection.label',
    defaultMessage: 'Tiểu mục chưa đặt tên',
    description: 'Text to display in place of subsection name if subsection name is empty',
  },
  unnamedTopic: {
    id: 'discussions.subtopics.unnamed.topic.label',
    defaultMessage: 'Chủ đề chưa đặt tên',
    description: 'Text to display in place of topic name if topic name is empty',
  },
  noTopicExists: {
    id: 'discussions.topics.title',
    defaultMessage: 'Không có chủ đề nào',
    description: 'Text to display in place of topic list if topic does not exist',
  },
  createTopic: {
    id: 'discussions.topics.createTopic',
    defaultMessage: 'Vui lòng liên hệ quản trị viên để tạo chủ đề',
    description: 'Helping Text to display in place of topic list if topic does not exist',
  },
  nothingHere: {
    id: 'discussions.topics.nothing',
    defaultMessage: 'Chưa có nội dung',
    description: 'Helping Text to display if nothing here yet',
  },
  archivedTopics: {
    id: 'discussions.topics.archived.label',
    defaultMessage: 'Đã lưu trữ',
    description: 'Heading for displaying topics that are archived.',
  },
});

export default messages;
