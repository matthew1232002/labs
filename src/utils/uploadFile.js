export const readFile = (event, callback) => {
  const fileReader = new FileReader();
  fileReader.onloadend = (e) => {
    if (e.currentTarget.result) {
      const value = JSON.parse(e.currentTarget.result);
      callback(value);
    }
  };
  fileReader.readAsText(event.target.files[0]);
}
