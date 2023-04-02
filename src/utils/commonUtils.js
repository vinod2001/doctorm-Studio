const fontSizeGenarator = () => {
  const fontSizes = [];
  for (let i = 2; i <= 100; i += 2) {
    fontSizes.push({ title: i.toString(), value: i.toString() });
  }
  return fontSizes;
};

const formatImageUrl = (imageUrl, imageSize) => {
  return imageUrl;
};

export { fontSizeGenarator, formatImageUrl };
