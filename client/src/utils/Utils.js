const Utils = {
  isLongerArray(arr, threshold) {
    return Array.isArray(arr) && Number.isInteger(threshold) && arr.length > threshold;
  },
  parseDuration(millis) {
    let remain = millis;

    const days = Math.floor(remain / (1000 * 60 * 60 * 24));
    remain = remain % (1000 * 60 * 60 * 24);

    const hours = Math.floor(remain / (1000 * 60 * 60));
    remain = remain % (1000 * 60 * 60);

    const minutes = Math.floor(remain / (1000 * 60));
    remain = remain % (1000 * 60);

    const seconds = Math.floor(remain / 1000);
    const milliseconds = remain % 1000;

    return {
      days,
      hours,
      minutes,
      seconds,
      milliseconds
    };
  }
}

export default Utils;
