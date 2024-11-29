export function stringToArray(str: string) {
  const splitArray = str.split(",");
  const resultArray: { label: string; value: string }[] = [];

  splitArray.forEach((item) => {
    resultArray.push({
      label: item.trim(),
      value: item.trim(),
    });
  });

  return resultArray;
}
