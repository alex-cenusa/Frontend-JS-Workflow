const FINAL_MSG_CONTAINER = () => {
  const template = `
    <div class="popup-container" id="popup-container">
    <div class="popup">
      <h2 id="final-message"></h2>
      <h3 id="final-message-reveal-word"></h3>
      <button id="play-button">Play Again</button>
    </div>
  </div>
    `;

  return template;
};

export default FINAL_MSG_CONTAINER;
