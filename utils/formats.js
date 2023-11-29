import moment from "moment";

export const maskaOnlyLetter = {
  mask: "S*",
  tokens: { S: { pattern: /^[a-zA-Z-а-яА-Я\s]*$/ } },
};

export const withoutSpace = {
  mask: "S*",
  tokens: { S: { pattern: /^((?![\s]).)*$/ } },
};

export const maskaTime = {
  mask: "Hh:Mm",
  tokens: {
    H: { pattern: /^[0-2]/ },
    h: { pattern: /^[0-9]/ },
    M: { pattern: /^[0-5]/ },
    m: { pattern: /^[0-9]/ },
  },
};

export const maskaPhone = "+7 (###) ###-##-##";

export const dateModelType = "YYYY-MM-DD";

export const dateTimeModelType = "yyyy-MM-dd HH:mm:ss";

export const dateCreatedFormat = (params) =>
  params || params?.value
    ? moment(params?.value ? params?.value : params).format("DD.MM.YYYY HH:mm")
    : "";

export const dateCreatedFormatdmy = (params) => {
  if (params == "Invalid date") return "";
  return params || params?.value
    ? moment(params?.value ? params?.value : params).format("DD.MM.YYYY")
    : "";
};

export const onlyDateFormat = (params) =>
  params || params?.value
    ? moment(params?.value ? params?.value : params).format("DD.MM")
    : "";

export const onlyTimeFormat = (params) =>
  params || params?.value
    ? moment(params?.value ? params?.value : params).format("HH:mm")
    : "";

export const dateFormatDDMM = (params) => {
  return params || params?.value
    ? moment(params?.value ? params?.value : params).format("DD.MM")
    : "";
};

export function phoneFormat(str) {
  try {
    if (!str?.length || str?.length < 10 || str?.length > 11) {
      return "";
    }

    if (str.length == 10) {
      const numbers = str
        .replace(/\D+/g, "")
        .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "+7 ($1) $2-$3-$4");

      return numbers;
    }
    const numbers = str
      .replace(/\D+/g, "")
      .replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "+$1 ($2) $3-$4-$5");

    return numbers;
  } catch (error) {
    console.error(error);
  }
}

export function numberFormat(number, dec = true) {
  var decimalSeparator = ".";
  var thousandSeparator = " ";
  var result = String(number);

  var parts = result?.split(decimalSeparator);

  result = parts[0].split("").reverse().join("");
  result = result.replace(/(\d{3}(?!$))/g, "$1" + thousandSeparator);

  parts[0] = result.split("").reverse().join("");

  if (parts.length == 2 && typeof parts[1] == "string") {
    parts[1] = parts[1].substr(0, 2);
  }

  return dec ? parts.join(decimalSeparator) : parts[0];
}

export const numberClear = (str) => {
  try {
    if (typeof str == "number") {
      return str;
    } else if (str && typeof str == "string" && str?.length > 1) {
      const pre = str?.replace(/[^0-9]/g, "");
      return pre ? parseInt(pre) : "";
    } else {
      return "";
    }
  } catch (error) {
    console.error(error);
  }
};

export const currencyFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 0,
});

export function sliceChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export const sumMaska = [
  "F",
  "F#",
  "F##",
  "F##",
  "F ###",
  "F# ###",
  "F## ###",
  "F ### ###",
  "F# ### ###",
  "F## ### ###",
  "F ### ### ###",
  "F# ### ### ###",
  "F## ### ### ###",
];

export const max100Mask = ["#", "F#", "F##"];

export const max100 = {
  mask: max100Mask,
  tokens: { F: { pattern: /^[1-9]/ } },
};

export const maskaSumm = {
  mask: [...sumMaska],
  tokens: { F: { pattern: /^[1-9]/ } },
};
