const addTask = addEvent => {
  addEvent.preventDefault();
  const element = addEvent.target.elements[0];
  document.querySelector("main > section + section").innerHTML += `<div onclick="doneTask(event)">
          <i class="fa-regular fa-square"></i><i class="fa-solid fa-check"></i>${element.value}<i
            class="fa-solid fa-trash-can"
            onclick="delTask(event)"></i>
        </div>`;

  // document.querySelector("section > div:last-child").addEventListener("click", doneTask);
  // document.querySelector("div > i:last-child").addEventListener("click", delTask);
};

const doneTask = doneEvent => doneEvent.currentTarget.classList.toggle("done");

const delTask = delEvent => delEvent.target.parentElement.remove();
