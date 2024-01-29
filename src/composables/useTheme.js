const DEFAULT_THEMES = {
  themes: {
    dark: {
      variables: {},
      colors: {},
    },
    light: { variables: {}, colors: {} },
  },
};
export function createTheme() {}

export function useTheme() {}

export function setTheme() {
  const el = document.createElement("style");
  el.type = "text/css";
  el.appendChild(
    document.createTextNode(`:root{
    penis:#12313
  }`)
  );

  document.getElementsByTagName("head")[0].appendChild(el);
}

// что нужно :
// Добавление темы
// Данные из определенной темы гет
// Создание классов по префиксу темы
