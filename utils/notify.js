import { useToast } from "vue-toastification";
const toast = useToast();

export const warningPopup = (message = "Упс что то пошло не так!") => {
  try {
    toast.error(message, 2000);
  } catch (error) {
    console.error("warningPopup", error);
  }
};

export function getErrorData(error) {
  try {
    let errorMessage = `${
      error?.data?.errors?.message ??
      error?.message ??
      `Что то пошло не так: ${error}`
    }`;

    if (error?.data?.errors?.messages) {
      for (let message in error?.data?.errors?.messages) {
        errorMessage += ": " + error?.data?.errors?.messages[message];
      }
    }

    const popup = () => {
      toast.error(errorMessage, 2000);
    };

    return {
      error: true,
      isError: true,
      message: errorMessage,
      errorResponse: error,
      popup: popup,
    };
  } catch (error) {
    console.error("notify", error);
  }
}

export const notify = (error) => {
  try {
    let errorMessage = `${
      error?.data?.errors?.message ??
      error?.message ??
      `Что то пошло не так: ${error}`
    }`;
    if (error?.data?.errors?.messages) {
      for (let message in error?.data?.errors?.messages) {
        errorMessage += ": " + error?.data?.errors?.messages[message];
      }
    }
    toast.error(errorMessage);
  } catch (error) {
    console.error("notify", error);
  }
};

export const success = (message = "Данные успешно сохранены") => {
  try {
    toast.success(message, 2000);
  } catch (error) {
    console.error(error);
  }
};

export const checkSaved = (resp, callback, message = null, errorCallback) => {
  try {
    if (
      resp.errors ||
      resp?.error ||
      (resp?.length && (resp[0]?.error || resp[0]?.errors))
    ) {
      if (errorCallback) {
        errorCallback(resp);
      }
      notify(resp);
    } else {
      success(resp?.message ?? message ?? "Данные успешно сохранены");
      typeof callback == "function" ? callback(resp) : null;
    }
  } catch (error) {
    console.error("checkSaved", error);
  }
};

export default notify;
