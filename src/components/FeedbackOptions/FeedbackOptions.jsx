import PropTypes from 'prop-types';
import './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const state = Object.keys(options);

  return (
    <div>
      {state.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
};