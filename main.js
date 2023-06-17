muteCoveiragem();
hideImages();

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

function muteCoveiragem() {
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
}


function hideImages() {
const arr = [
  'https://assets-prd.ignimgs.com/',
  'https://oystatic.ignimgs.com/',
  'https://oyster.ignimgs.com/'
];
const images = document.querySelectorAll('.avatar img');
images.forEach((image) => {
if (arr.every(url => !image.src.startsWith(url))) {
image.style.display = 'none';}
});
}
