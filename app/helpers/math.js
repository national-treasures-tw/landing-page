export const easing = (startPosition, endPosition, scrollTop) => {
  if (startPosition > endPosition || scrollTop > endPosition) {
    return 1;
  } else if (scrollTop < startPosition) {
    return 0;
  }
  return 1 - ((endPosition - scrollTop) / (endPosition - startPosition));
}
