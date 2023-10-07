type Mods = Record<string, boolean | string | undefined>;

// Используется для создания className
// cls - основной класс
// additional - дополнительный класс
// mods - объект формата со свойствами типа [styles[size]]: true, где
// styles - объект со стилями из scss
// size - поле из scss
// true - флаг для включения свойства

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
}
