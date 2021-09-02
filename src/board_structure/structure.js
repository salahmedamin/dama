export const structure = () => {
    const rows = Array.from(Array(8).keys()).map((row, pos) => {
      let i = 0;
      let total = [];
      while (i < 8) {
        total = [...total, pos % 2 !== 0  ? (i % 2 === 0 ? "playable":null) : (i % 2 !== 0 ? "playable":null)];
        i++
      }
      return total;
    });
    return rows
  }