import { createApp, h } from "vue";

export default () => {
  const mount = () => {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);
    newDiv.id = "test";
    document.body.append(newDiv);

    createApp({
      render() {
        return h(
          "div",
          Object.assign({
            ref: "notification",
            id: "1asd",
          })
        );
      },
    }).mount(newDiv);
  };
  onMounted(() => {
    mount();
  });

  return { mount };
};
