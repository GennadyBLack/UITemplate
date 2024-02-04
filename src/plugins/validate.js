import { required, min, max, email, between } from '@vee-validate/rules';
import { defineRule, configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';

configure({
  // Generates an English message locale generator
  generateMessage: localize('ru', {
    messages: {
      required: 'Поле обязательное для заполнения',
      between: 'Значение поля  {field} должно быть между - 0:{min} и 1:{max}',
      max: 'Поле {field} должно быть меньше чем - 0:{max}',
      min: 'Минимальное значени для этого поля - 0:{min}',
      email: 'Поле {field} должно быть Email',
    },
  }),
});

defineRule('required', required);
defineRule('min', min);
defineRule('max', max);
defineRule('email', email);
defineRule('between', between);
