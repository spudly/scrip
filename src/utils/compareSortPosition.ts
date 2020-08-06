const compareSortPosition = <T extends {sortPosition: number}>(
  a: T,
  b: T,
): number => a.sortPosition - b.sortPosition;

export default compareSortPosition;
