import { RootState } from '@/state/store';
import { TypeNote } from '@/types';
import { useSelector } from 'react-redux';


export function Note ({title, description, expiresAt}: TypeNote) {
  const themeColor = useSelector((state: RootState) => state.theme.themeColor)
  return (
    <div className={'note ' + themeColor}>
      <h3 className="note__title">{title}</h3>
      <p className="note__description">{description}</p>
      <p className="note__expiresAt">Expires at: {expiresAt}</p>
    </div>
  );
}
