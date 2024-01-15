<script setup></script>
<template>
  <div class="p-5">
    <h1>Базовое использование</h1>
    <pre>
      {{ String(`
      <UiModal>
        <template #activator>Открыть</template>
        <template #content>Кон модального окнатент</template>
      </UiModal>`) }}
    </pre>
    <p>
      По умолчанию не используется шаблон, только функционал,для привычного
      отображения использовать фывфвфыв
    </p>
    result:
    <pre>
      
      <UiModal name="asdsasdasd"
      ><template #activator>Открыть</template>
      <template #content>Кон модального окнатент</template></UiModal
    ></pre>

    <p>
      По умолчанию не используется шаблон, только функционал,для привычного
      отображения использовать фывфвфыв либо самостоятельный компонент, класс
    </p>

    <h3>Положения модального окна</h3>
    <p>
      За положение отвечает props position по умолчанию center,так же доступны
      left top bottom right
    </p>
    <pre>
      {{ String(`
      <UiModal position="center">
        <template #activator>Открыть</template>
        <template #content>Кон модального окнатент</template>
      </UiModal>`) }}
    </pre>

    result:
    <pre>
      
      <UiModal name="positionRigth" position="right"
      ><template #activator>right</template>
      <template #content><div class="bg-white vh-100">Кон модального окнатент</div></template></UiModal
    >

    <UiModal name="positionLeft" position="left"
      ><template #activator>left</template>
      <template #content><div class="bg-white vh-100">Кон модального окнатент</div></template></UiModal
    >
    <UiModal name="positionBottom" position="bottom"
      ><template #activator>bottom</template>
      <template #content><div class="bg-white  wv-100">Кон модального окнатент</div></template></UiModal
    >

  </pre>
    <h3>Composable</h3>
    <pre>
      Для вызова модального окна функционально нужно использовать composables useModal, обязательный параметр name
      
      Примры использования: 

      const {open,close}=useModal({name:'myModal'})
      open();

      или 

      const modal = =useModal({name:'myModal'})
      modal.open()

    </pre>

    all props
    <pre>

  animation: {
    type: String,
    default: "bounce",
    validate: (v) => false,
  },
      <table><tr ><td>prop name</td><td>default</td><td>result</td></tr>
        <tr ><td>name</td><td>default Uid from current instance </td><td></td></tr>
        <tr ><td>position</td><td>default  - center </td><td></td></tr>
        <tr ><td>prefix</td><td>default - default </td><td> Строка, смешивается с классами модального окна</td></tr>
        <tr ><td>style</td><td>default Пустой объект</td><td> Можно прокинуть кастомные стили для модального окна {border:1px solid red}</td></tr>
        <tr ><td>hover</td><td>default - false</td><td> Открытьмодальное окно при наведении мышкой на элемент</td></tr>
        <tr ><td>shadow</td><td>default true</td><td> Затемнение заднего фона модального окна</td></tr>
        <tr ><td>interactive</td><td>default true</td><td> Закрытие при нажатии все модального окна</td></tr>
        <tr ><td>overflow</td><td>default true</td><td> Запретить скролл всей страницы</td></tr>
        <tr ><td>animation</td><td>default fade </td><td> Анимация появления модального окна, можно добавить кастомные bounce fade slide </td></tr>
      </table>
    </pre>
  </div>
</template>
<style lang="scss">
table {
  border: 1px solid red;
}
tr {
  margin: 10px;
  padding: 10px;
  background: white;
  color: black;
}
</style>
