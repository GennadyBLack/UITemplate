Поле ввода
Если нужно ввести больше 5 слов — используйте многострочное поле ввода
Если вводимое значение имеет определенный формат, используйте специальную версию поля (описаны ниже).
Если пользователю нужно часто очищать поле и вводить новое значение — используйте для этого специальную кнопку-крестик.
Крестик показывается, когда в поле введен хотя бы 1 символ. Крестик показывается даже когда фокус находится вне поля. При клике на крестик фокус переходит в поле, введенное значение стирается. При наведении иконка становится темнее. Область для нажатия по высоте равна полю ввода, по ширине 28 px. Internet Explorer 10 рисует свой крестик для любого поля ввода в фокусе. Чтобы этот крестик не перекрывал нашу иконку, нужно дописать стиль:

При клике по полю и при переходе табом поле выглядит одинаково: появляется темная рамка, которая сохраняется до потери фокуса.
Темная рамка фокуса не появляется, если поле находится в состоянии ошибки или предупреждения, до тех пор, пока значение в поле не будет изменено. Допустимо переносить фокус на следующее поле при нажатии клавиши Enter в поле — иногда такое поведение удобно и интуитивно понятно для пользователя. Если поле последнее в форме, переход фокуса по Enter не должен происходить на кнопку отправки формы.
Поле с ошибкой подсвечивается красной рамкой.
Невозможно ввести 2 и более пробела подряд.

Специальные версии поля:
Поле с маской.
Используйте маски для полей с заранее известным форматом. Когда необходимо ввести определенное количество символов.
Маска показывается только после того, как поле получает фокус. Это снижает количество визуального шума на странице.
Если нажать Backspace, сотрется последний «настоящий» символ, который вводил сам пользователь.
При попытке ввода недопустимого или лишнего символа, этот символ игнорируется.
Поле с паролем.
Однострочное поле для ввода пароля, в котором символы заменяются на точки.
Скрытие пароля. Пароль становится видимым по клику на иконку. Повторный клик возвращает поле в исходное состояние — пароль заменяется на точки, возвращается прежняя иконка. В некоторых браузерах могут появляться дополнительные иконки. Например, в Safari появляется иконка подстановки пароля. Следите, чтобы иконки не накладывались друг на друга в таких случаях.
Валидация срабатывает после отправки формы, если пользователь ввел неправильный пароль.
Поле с валютой.
Плейсхолдер подсказывает пользователю в каком формате указывается значение. При получении фокуса такой плейсхолдер исчезает сразу, а не после ввода первого символа, как в обычном поле.
Рубль, доллар и евро обозначаются специальными символами ₽, $ и €. Для удобства верстки интерфейса все знаки валют ставятся справа от поля ввода.
Каждый третий разряд на лету отбивается тонкой шпацией. Тонкие шпации не копируются в буфер обмена и не считаются за символ при удалении символов, перемещении курсора стрелками с клавиатуры ← → или выделении с шифтом. Они нужны только для визуального разделения на разряды.
Поле игнорирует ввод любых символов, кроме цифр, точки и запятой.
Повторный ввод запятой игнорируется.
Третий символ копеек, по умолчанию, игнорируется. По этой же причине нельзя ввести запятую дальше, чем на два символа от правого края числа.
При вставке значений из буфера обмена поле так же игнорирует пробелы, буквы и другие символы кроме запятых и точек, и отбрасываются лишние символы после запятой.
Максимальное количество вводимых цифр в поле — 15.
Поле без копеек. Если по формату в поле должно быть целое значение, показывается плейсхолдер «0»
Если пользователь введет дробное значение, при потере фокуса оно должно округляться по правилу, предусмотренному в данной форме отчетности. Если правило не описано, округление производится по математическому правилу: до 0,49 в меньшую сторону, после 0,5 в большую.
Поле c копейками. Дробная часть числа отделяется от основной запятой. Дробная часть показывается всегда. Если введено значение без копеек, при потере фокуса добавляются нули.
Выравнивание. Значение в поле по умолчанию выравнивается по правому краю
Поле с телефоном.
В начале поля стоит префикс «+7», который подсказывают пользователю, что номер нужно ввести в полном формате. Префикс нельзя стереть.
При вставке скопированного номера из 11 цифр, первые +7 или 8 вырезаются.
Если пользователь ввел недостаточно цифр, при потере фокуса нужно показать валидацию. Пример:

Поле с E-mail. Может содержать:
цифры в имени пользователя и доменной части;
знак подчеркивания в имени пользователя;
дефис в имени пользователя и доменной части;
точки в имени пользователя;
2-6 букв после точки: .ru.
Недопустимо:
содержать несколько точек в доменной части;
знак подчеркивания в доменной части;
несколько точек в доменной части;
отсутствие дочек в доменной части;
отсутствие @ в email;
email с пробелами в имени пользователя;
email с пробелами в доменной части;
email без имени пользователя;
email без доменной части.
