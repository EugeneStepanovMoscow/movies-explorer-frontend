import messages from "./messages";

function serverErrorCode2Message(code) {
  if (code === 400) {
      return messages.error.notCorrectData;
  } else if (code === 409) {
      return messages.error.doubleEmail;
  } else if (code === 401) {
    return messages.error.unregisteredUser;
  } else if (code === 429) {
    return messages.error.tooManyRequests;
  } else {
      return messages.error.serverError;
  }
}

export default serverErrorCode2Message
