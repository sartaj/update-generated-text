function updateGeneratedText(
  startString,
  endString,
  newContents,
  text
) {
  // TODO: Force append lines as new lines
  const startLine = `\n${startString}\n`;
  const endLine = `\n${endString}\n`;

  const oldStringSearch = `${startLine}(.*)${endLine}`;
  const searchRegex = new RegExp(oldStringSearch, `s`, `S`);

  const newText = `${startLine}${newContents}${endLine}`;
  const results =
    text.search(searchRegex) > -1
      ? text.replace(searchRegex, newText)
      : text.concat(newText);
  return results;
}

module.exports = updateGeneratedText;
