import { useThemeColor } from '@/hooks/hooks';
import { TypeNote } from '@/types';

export function Note ({title, description, expiresAt}: Omit<TypeNote, "id">) {
  const themeColor = useThemeColor()
  return (
    <div className={'note ' + themeColor}>
      <h3 className="note__title">{title}</h3>
      <p className="note__description">{description}</p>
      <p className="note__expiresAt">Expires at: {expiresAt}</p>
    </div>
  );
}
