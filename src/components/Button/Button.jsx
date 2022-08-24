import s from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={s.button} onClick={() => onClick()} type="button">
      Load more
    </button>
  );
};

export default Button;
