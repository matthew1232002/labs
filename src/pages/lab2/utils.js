export function heapSort(arr) {
  if (arr.length === 0) return [];

  let n = arr.length,
    i = Math.floor(n / 2),
    j,
    k,
    t;

  while (true) {
    if (i > 0) t = arr[--i];
    else {
      n--;
      if (n === 0) return arr;
      t = arr[n];
      arr[n] = arr[0];
    }

    j = i;
    k = j * 2 + 1;

    while (k < n) {
      if (k + 1 < n && arr[k + 1] > arr[k]) k++;
      if (arr[k] > t) {
        arr[j] = arr[k];
        j = k;
        k = j * 2 + 1;
      } else break;
    }

    arr[j] = t;
  }
}
