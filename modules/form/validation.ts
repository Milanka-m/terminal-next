 function isEmail(string: string) {
    const re =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return re.test(string);
  }

  function isPhone(string: string) {
    const re =
      /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/gm;
    return re.test(string);
  }
  
  export function email(value: string) {
    return value && !isEmail(value.trim()) ? 'Неверный email' : null;
  }

  export function phone(value: string) {
    return value && !isPhone(value.trim()) ? 'Неверный номер телефона' : null;
  }
  
  function isDirty(value: string | number) {
    return value || value === 0;
  }
  
  export function required(
    requiredFields: readonly string[],
    values: Record<string, string>,
  ): Record<string, string> {
    return requiredFields.reduce(
      (fields, field) => ({
        ...fields,
        ...(isDirty(values[field]) ? undefined : { [field]: 'Заполните поле' }),
      }),
      {},
    );
  }