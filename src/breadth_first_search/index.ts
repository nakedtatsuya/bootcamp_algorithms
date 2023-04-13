export const breadthFirstSearch = (
  relationships: number[][],
  startUser: number,
  targetUser: number
): number => {
  const queue = [startUser];
  const visited = new Set<number>();
  let distance = 0;
  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const user = queue.shift() as number;
      if (user === targetUser) return distance;
      visited.add(user);
      for (const friend of relationships[user]) {
        if (!visited.has(friend)) {
          queue.push(friend);
        }
      }
    }
    distance++;
  }
  return -1;
};
