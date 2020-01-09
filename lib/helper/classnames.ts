function classnames(...names: (string | undefined | boolean)[]) {
  return names.filter(v => v).join(' ');
}

export default classnames;
