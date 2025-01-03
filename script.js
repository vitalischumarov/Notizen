function create_new_note() {
  console.log(`new note created`);
  create_note_UI("this is the title", "note message", "2025.01.03");
}

function save_note() {
  console.log(`save note`);
}

function delete_note() {
  console.log(`delete note`);
}

function create_note_UI(title_message, note_message, timestamp_message) {
  const single_note = document.createElement("div");
  single_note.classList.add("single-note");
  const note = document.createElement("div");
  note.classList.add("note");
  const title = document.createElement("span");
  title.classList.add("title");
  const text_note = document.createElement("span");
  text_note.classList.add("text");
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");
  const text = document.createElement("span");
  text.classList.add("text");
  const time_stamp = document.createElement("div");
  time_stamp.classList.add("time-stamp");
  const time = document.createElement("span");
  time.classList.add("time");

  let new_title_message = document.createTextNode(title_message);
  let new_note_message = document.createTextNode(note_message);
  let new_timestamp_message = document.createTextNode(timestamp_message);

  title.appendChild(new_title_message);
  text_note.appendChild(new_note_message);
  time.appendChild(new_timestamp_message);

  single_note.appendChild(note);
  note.appendChild(title);
  note.appendChild(br1);
  note.appendChild(br2);
  note.appendChild(text_note);
  single_note.appendChild(time_stamp);
  time_stamp.appendChild(time);

  let root = document.getElementById("note-list");
  root.appendChild(single_note);
}
