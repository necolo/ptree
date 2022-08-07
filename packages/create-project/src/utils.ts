export function correctType<T>(v: unknown, original: T): T {
  if (original instanceof Array) {
    if (v instanceof Array) {
      return v as T;
    }
    return [v] as T;
  }

  if (typeof original === 'object') {
    if (typeof v === 'object') {
      return v as T;
    }
    return {} as T;
  }
  if (typeof original === 'string') {
    return v as T;
  }
  if (typeof original === 'number') {
    let num = Number(v);
    if (isNaN(num)) {
      num = 0;
    }
    return num as T;
  }
  if (typeof original === 'boolean') {
    if (typeof v === 'boolean' || typeof v === 'number') {
      return Boolean(v) as T;
    }
    return (v === 'true' || v === 'y' || v === 'yes') as T;
  }
  return v as T;
}