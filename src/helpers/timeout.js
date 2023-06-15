export const clearAllTimeouts = () => {
  var id = window.setTimeout(() => {}, 0);

  while (id--) {
      window.clearTimeout(id);
  }
}