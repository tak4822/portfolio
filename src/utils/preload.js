export default url => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
    resolve(url);
  };
  img.onerror = () => {
    reject(url);
  };
  img.src = url;
});
