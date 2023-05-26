function getThreads() {
  return document.querySelectorAll(".js-threadList>.structItem");
}

function getThreadCreationDate(thread) {
  try {
    const stringDate = thread.querySelector(".structItem-startDate").innerText;
    if (Date.parse(stringDate) == NaN) {
      throw new Error("Invalid date");
    }

    return new Date(stringDate);
  } catch (e) {
    return null;
  }
}

(() => {
  const threads = getThreads();
  threads.forEach((thread) => {
    const createdAt = getThreadCreationDate(thread);
    if (createdAt == null) {
      return;
    }

    if (createdAt < new Date("2022/11/11")) {
      thread.style = "display: none;";
    }
  });
})();
