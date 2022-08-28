export const getType = (value: any) => {
  switch (typeof value) {
    case 'string':
      return 'string';
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    default: {
      if (value instanceof Date) {
        return 'date';
      }
      return 'object';
    }
  }
};
