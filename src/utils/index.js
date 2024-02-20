import { camelCase, upperFirst } from 'lodash';

export const registerComponents = (vm) => {
  try {
    // Require base component context
    const requireComponent = require.context(
      '../components',
      true,
      /[\w-]+\.jsx$/,
    );

    requireComponent.keys().forEach((filePath) => {
      // Get component config
      const componentConfig = requireComponent(filePath);

      // Get filename from the filePath
      const filePre = filePath.split('/');
      const fileName =
        filePre?.[2] == 'index.jsx'
          ? filePre?.[1]
          : filePre?.[1] + filePre?.[2]?.replace(/\.\w+$/, '');
      // Remove file extension and convert component name to pascal case
      const componentName = upperFirst(camelCase(fileName));

      vm.component(componentName, componentConfig.default || componentConfig);
    });
  } catch (err) {
    console.log('Base component registration failed');
    console.error(err);
  }
};

export const registerComposables = (vm) => {
  try {
    // Require base component context
    const requireComponent = require.context(
      '../composables',
      true,
      /[\w-]+\.js$/,
    );

    requireComponent.keys().forEach((filePath) => {
      // Get component config
      const compasable = requireComponent(filePath);
      // Get filename from the filePath
      const fileName = filePath.split('/').slice(-1)[0];
      // Remove file extension and convert component name to pascal case
      const componentName = upperFirst(
        camelCase(fileName.replace(/\.\w+$/, '')),
      );
      vm.use(compasable);
    });
  } catch (err) {
    console.log('Base component registration failed');
    console.error(err);
  }
};

function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function objNotEmpty(obj) {
  if (typeof obj !== 'object' || obj == null) return;
  return !!Object.keys(obj).length;
}

const isObject = (obj) => {
  return obj && typeof obj == 'object' && !Array?.isArray(obj);
};

const isArray = (obj) => {
  return obj && typeof obj == 'object' && Array?.isArray(obj);
};

export const isClient = typeof window !== 'undefined';

export const mergeObjectsData = (initialData, data, formatArray) => {
  try {
    let pre = {};
    if (Utils.isObject(initialData)) {
      Object.entries(initialData).forEach(([key, value]) => {
        // console.error(initialData);
        if (Utils.isObject(value)) {
          pre[key] = mergeObjectsData(value, data[key]);
        } else {
          if (JSON.stringify(value) == JSON.stringify(data[key])) {
            pre[key] = { value: value, edit: false };
          } else {
            pre[key] = { value: data[key], edit: true };
          }
        }
      });

      return pre;
    } else if (Array.isArray(initialData) && formatArray) {
      pre = initialData.map((item, idx) => {
        return mergeObjectsData(item, data[idx]);
      });
      return pre;
    } else {
      return initialData.value;
    }
  } catch (error) {
    console.error('formatObject', error);
  }
};

export const formatObject = (data, formatArray) => {
  //**formatArray -нужно ли обрабатывать вложенный массив  */
  try {
    let pre = {};
    if (Utils.isObject(data)) {
      Object.entries(data).forEach(([key, value]) => {
        if (Utils.isObject(value) || Array.isArray(value)) {
          pre[key] = formatObject(value, formatArray);
        } else {
          pre[key] = { value: value, edit: false };
        }
      });
      return pre;
    } else if (Array.isArray(data) && formatArray) {
      pre = data.map((item) => {
        return formatObject(item, formatArray);
      });

      return pre;
    } else {
      return data;
    }
  } catch (error) {
    console.error('formatObject', error);
  }
};

export const formatObjectReverse = (
  data,
  getId = false,
  formatArray = true,
) => {
  //**formatArray -нужно ли обрабатывать вложенный массив  */
  try {
    let pre = {};
    if (Utils.isObject(data)) {
      Object.entries(data).forEach(([key, value]) => {
        if (
          Utils.isObject(value) &&
          Object?.keys(value)?.length &&
          !Object?.keys(value)?.includes('edit')
        ) {
          let val = formatObjectReverse(value, getId);
          if (val) {
            pre[key] = val;
            if (getId && data.hasOwnProperty('id')) pre['id'] = data?.id?.value;
          } else {
            return null;
          }
        } else {
          if (value?.edit && value?.value) {
            pre[key] = value?.value;
          }
        }
      });
      if (Utils.objNotEmpty(pre)) return pre;
    } else if (Array.isArray(data) && formatArray) {
      pre = data
        .map((item) => {
          return formatObjectReverse(item, getId);
        })
        .filter((item) => !!item);
      return pre;
    } else {
      return data;
    }
  } catch (error) {
    console.error('formatObjectReverse', error);
  }
};

export const objectsEqual = (o1, o2) =>
  typeof o1 === 'object' && Object.keys(o1).length > 0
    ? Object.keys(o1).length === Object.keys(o2).length &&
      Object.keys(o1).every((p) => objectsEqual(o1[p], o2[p]))
    : o1 === o2;

export const isArraysEqual = (a1, a2) =>
  a1.length === a2.length && a1.every((o, idx) => objectsEqual(o, a2[idx]));

export const goTo = (route) => {
  if (process.client && route) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      rel: ' noreferrer',
      href: route,
    }).click();
  }
};

export const getByString = (obj, name) => {
  try {
    let pre = obj;
    const names = name.split('.');
    for (let nam in names) {
      pre = pre[names[nam]];
    }
    return pre;
  } catch (error) {
    console.error(error);
    return 0;
  }
};

export function getProperty(obj, path, def) {
  try {
    const names = path.split('.');
    let pre = obj;
    for (var i = 0; i < names.length; i++) {
      pre = pre?.[names[i]];
      if (!pre) def;
    }
    return pre;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function setProperty(obj, path, value) {
  try {
    const r = !!obj?.value;
    const names = path.split('.');

    if (r) {
      for (var i = 0; i < names.length - 1; i++) {
        obj = obj[names[i]];
        if (!obj) return;
      }
      obj.value[names[names.length - 1]] = value;
    } else {
      for (var i = 0; i < names.length - 1; i++) {
        obj = obj[names[i]];
        if (!obj) return;
      }
      obj[names[names.length - 1]] = value;
    }
  } catch (error) {
    console.error(error);
    return 0;
  }
}

const log = (...c) => {
  console.error(c);
};

export const minMax = (min, max, val) => Math.max(min, Math.min(max, val));

export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

/* istanbul ignore next */
export const on = (function () {
  if (isClient && document.addEventListener) {
    return function (element, event, handler, useCapture = false) {
      if (element && event && handler) {
        element.addEventListener(event, handler, useCapture);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

/* istanbul ignore next */
export const off = (function () {
  if (isClient && document.removeEventListener) {
    return function (element, event, handler, useCapture = false) {
      if (element && event) {
        element.removeEventListener(event, handler, useCapture);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();

export function getDecimals(value) {
  const trimmedStr = value.toString().trim();
  return trimmedStr.includes('.')
    ? trimmedStr.length - trimmedStr.indexOf('.') - 1
    : 0;
}

export function chunk(str, size = 1) {
  const chunked = [];
  let index = 0;
  while (index < str.length) {
    chunked.push(str.substr(index, size));
    index += size;
  }
  return chunked;
}

export function chunkArray(array, size = 1) {
  return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
    array.slice(i * size, i * size + size),
  );
}
export function includes(arr, val) {
  return arr.includes(val);
}
export function isEmpty(val) {
  return (
    val === null ||
    val === undefined ||
    (typeof val === 'string' && val.trim() === '')
  );
}

export function declination(number, titles = [' год', ' года', ' лет']) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}
export function isNullOrUndefined(val) {
  if (val === null || val === undefined) {
    return true;
  }
  return false;
}

function uniqueId() {
  var idstr = String.fromCharCode(Math.floor(Math.random() * 25 + 65));
  do {
    var ascicode = Math.floor(Math.random() * 42 + 48);
    if (ascicode < 58 || ascicode > 64) {
      idstr += String.fromCharCode(ascicode);
    }
  } while (idstr.length < 32);

  return idstr;
}

export const substring = (str, length = 40) => {
  const maxLength = length * 1.25;
  return str && str.length > maxLength ? str.substring(0, length) + '...' : str;
};

export const findEl = async (hash, x) => {
  return (
    document.querySelector(hash) ||
    new Promise((resolve, reject) => {
      if (x > 50) {
        return resolve();
      }
      setTimeout(() => {
        resolve(findEl(hash, ++x || 1));
      }, 100);
    })
  );
};
export const toPath = async (to) => {
  if (to) {
    let el = await findEl(to);
    el.scrollIntoView(false);
  }
};

const Utils = {
  log,
  uniqueId,
  oneOf,
  getDecimals,
  includes,
  isNullOrUndefined,
  setProperty,
  declination,
  isEmpty,
  minMax,
  substring,
  toPath,
  findEl,
  chunkArray,
  getProperty,
  getByString,
  off,
  chunk,
  on,
  isArray,
  cloneDeep,
  goTo,
  objNotEmpty,
  uniqueId,
  isObject,
  formatObjectReverse,
  formatObject,
  isArraysEqual,
  isClient,
  mergeObjectsData,
};

export default Utils;
