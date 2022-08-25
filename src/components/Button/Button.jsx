import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <div className={s.buttonPosition}>
      <button className={s.button} onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
