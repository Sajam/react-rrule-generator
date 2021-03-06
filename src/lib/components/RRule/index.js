import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';
import TextareaAutosize from 'react-autosize-textarea';

const RRule = ({ rrule, isCopied, handleCopy }) => (
  <div className="px-3">
    <div className="form-group row d-flex align-items-sm-center">

      <div className="col-sm-2 text-sm-right">
        <span className="col-form-label">
          <strong>
            RRule
          </strong>
        </span>

      </div>
      <div className="col-sm-8">
        <TextareaAutosize
          className={`form-control rrule ${isCopied ? 'rrule-copied' : 'rrule-not-copied'}`}
          value={rrule}
          readOnly
        />
      </div>

      <div className="col-sm-2">
        <CopyToClipboard
          text={rrule}
          onCopy={handleCopy}
        >
          <button
            aria-label="Copy generated RRule"
            className={`btn ${isCopied ? 'btn-secondary' : 'btn-primary'} float-right`}
          >
            {isCopied ? 'Copied' : 'Copy'}
          </button>
        </CopyToClipboard>
      </div>

    </div>
  </div>
);

RRule.propTypes = {
  rrule: PropTypes.string.isRequired,
  isCopied: PropTypes.bool.isRequired,
  handleCopy: PropTypes.func.isRequired,
};

export default RRule;
