const all = {
  fact_address: { maska: "########", rules: {}, name: "Фактический адрес" },
  legal_address: { maska: "########", rules: {}, name: "Юридический адрес" },
  checking_account: {
    rules: { required: true, max: 20, min: 20, name: "Расчетный сче" },
    maska: "####################",
  },
  bank_name: { maska: "########", rules: {}, name: "Название банка" },
  correspondent_account: {
    maska: "########",
    rules: {},
    name: "Кор.счет",
  },
  contact_email: { maska: "########", rules: {}, name: "Фактический адрес" },
  inn: {
    maska: "############",
    rules: { required: true, max: 12, min: 10 },
    name: "ИНН",
  },
  ogrn: {
    rules: { required: true, max: 13, min: 13 },
    maska: "#############",
    name: "ОГРН",
  },
  kpp: {
    rules: { required: true, max: 9, min: 9 },
    maska: "#########",
    name: "КПП",
  },
  bik: {
    rules: { required: true, max: 9, min: 9 },
    maska: "#########",
    name: "БИК",
  },
  name: { maska: "########", rules: {}, name: "Наименование" },
  full_name: { maska: "########", rules: {}, name: "ФИО" },
};

const fieldHepher = (field) => {
  try {
    if (all.hasOwnProperty(field)) {
      return all[word];
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

export default fieldHepher;
