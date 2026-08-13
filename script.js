fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((events) => {
    const list = document.querySelector("#starred");
    if (!list) {
      console.error("List element not found");
      return;
    }
    if (events.length === 0) {
      list.innerHTML = "<li>No starred repositories yet.</li>";
      return;
    }
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });
  })
  .catch((error) => {
    console.error("Error loading starred repositories:", error);
    const list = document.querySelector("#starred");
    if (list) {
      list.innerHTML = "<li>Error loading repositories. Please try again.</li>";
    }
  });
