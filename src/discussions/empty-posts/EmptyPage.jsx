import React from 'react';
import propTypes from 'prop-types';

import { Button } from '@openedx/paragon';
import classNames from 'classnames';

import EmptyIcon from '../../assets/Empty';

const EmptyPage = ({
  title,
  subTitle = null,
  action = null,
  actionText = null,
  fullWidth = false,
}) => {
  // Trạng thái "không có bài nào trong course" vẫn dùng layout cũ (fullWidth = true)
  if (fullWidth) {
    const containerClasses = classNames(
      'min-content-height justify-content-center align-items-center d-flex w-100 flex-column',
    );

    return (
      <div className={containerClasses}>
        <div className="d-flex flex-column align-items-center">
          <EmptyIcon />
          <h3 className="pt-3 text-gray-500 font-weight-500">{title}</h3>
          {subTitle && <p className="pb-2">{subTitle}</p>}
          {action && actionText && (
            <Button onClick={action} variant="outline-dark">
              {actionText}
            </Button>
          )}
        </div>
      </div>
    );
  }

  // Trạng thái "Chưa chọn bài viết nào" → dùng UI CUSC mới
  return (
    <div className="min-content-height d-flex w-100 justify-content-center align-items-center cusc-discussion-empty-wrapper">
      <section
        className="cusc-discussion-empty-card"
        aria-label={title}
      >
        <div className="cusc-discussion-empty-floating">
          <span className="cusc-discussion-empty-bubble cusc-discussion-empty-bubble--1" />
          <span className="cusc-discussion-empty-bubble cusc-discussion-empty-bubble--2" />
          <span className="cusc-discussion-empty-bubble cusc-discussion-empty-bubble--3" />
          <span className="cusc-discussion-empty-bubble cusc-discussion-empty-bubble--4" />
          <span className="cusc-discussion-empty-bubble cusc-discussion-empty-bubble--5" />
          <span className="cusc-discussion-empty-bubble cusc-discussion-empty-bubble--6" />
        </div>

        <div className="cusc-discussion-empty-inner">
          <div className="cusc-discussion-empty-pill">
            <span className="cusc-discussion-empty-pill-dot" />
            <span>{title}</span>
          </div>

          <div
            className="cusc-discussion-empty-illustration"
            aria-hidden="true"
          >
            <span className="cusc-discussion-empty-icon">💬</span>
          </div>

          <h2 className="cusc-discussion-empty-title">
            Chọn một bài viết để xem chi tiết
          </h2>

          <p className="cusc-discussion-empty-subtitle">
            Nhấp vào một bài viết ở cột bên trái để xem nội dung, trả lời
            hoặc theo dõi cuộc thảo luận. Bạn cũng có thể tạo chủ đề mới
            dành riêng cho lớp học này.
          </p>

          {action && actionText && (
            <div className="cusc-discussion-empty-actions">
              <Button
                size="md"
                variant="primary"
                className="cusc-discussion-empty-primary"
                onClick={action}
              >
                {actionText}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

EmptyPage.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string,
  action: propTypes.func,
  actionText: propTypes.string,
  fullWidth: propTypes.bool,
};

EmptyPage.defaultProps = {
  subTitle: null,
  action: null,
  fullWidth: false,
  actionText: null,
};

export default React.memo(EmptyPage);
