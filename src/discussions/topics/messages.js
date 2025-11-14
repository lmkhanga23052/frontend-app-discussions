import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
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
  sortedBy: {
    id: 'discussions.topics.sort.message',
    defaultMessage: 'Sắp xếp theo {sortBy}',
    description: 'Display text used to indicate how topics are sorted',
  },
  sortByLastActivity: {
    id: 'discussions.topics.sort.lastActivity',
    defaultMessage: 'Hoạt động gần đây',
    description: 'Option in dropdown to sort topics by recent activity',
  },
  sortByCommentCount: {
    id: 'discussions.topics.sort.commentCount',
    defaultMessage: 'Nhiều hoạt động nhất',
    description: 'Option in dropdown to sort topics by most activity',
  },
  sortByCourseStructure: {
    id: 'discussions.topics.sort.courseStructure',
    defaultMessage: 'Cấu trúc khóa học',
    description: 'Option in dropdown to sort topics by course structure',
  },
  searchTopics: {
    id: 'discussions.topics.find.label',
    defaultMessage: 'Tìm kiếm chủ đề',
    description: 'Placeholder text in search bar',
  },
  archivedTopics: {
    id: 'discussions.topics.archived.label',
    defaultMessage: 'Đã lưu trữ',
    description: 'Heading for displaying topics that are archived.',
  },
  unnamedTopicCategories: {
    id: 'discussions.topics.unnamed.label',
    defaultMessage: 'Danh mục chưa đặt tên',
    description: 'Text to display in place of topic name if topic name is empty',
  },
  unnamedTopicSubCategories: {
    id: 'discussions.subtopics.unnamed.label',
    defaultMessage: 'Danh mục con chưa đặt tên',
    description: 'Text to display in place of topic name if topic name is empty',
  },
});

export default messages;
