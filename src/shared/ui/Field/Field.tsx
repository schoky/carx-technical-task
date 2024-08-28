import classNames from 'classnames';
import css from './Field.module.css';

type Props = {
  name: string;
  children: React.ReactNode;
  color?: 'red' | 'blue';
};

export default function Field({ name, children, color }: Props) {
  return (
    <div className={css.wrapper}>
      <div className={classNames('title', css.name, color && css[color])}>
        {name}:
      </div>
      <div className={css.text}>{children}</div>
    </div>
  );
}
