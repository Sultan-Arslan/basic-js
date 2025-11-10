function renameFiles(names) {
  const map = {};
  return names.map(name => {
    if (!map[name]) {
      map[name] = 1;
      return name;
    } else {
      let k = map[name];
      let newName;
      do {
        newName = `${name}(${k})`;
        k++;
      } while (map[newName]);
      map[name] = k;
      map[newName] = 1;
      return newName;
    }
  });
}

module.exports = {
  renameFiles
};
