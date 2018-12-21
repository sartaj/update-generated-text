# Update Generated Text

Update or append a block of generated text.

## Append Example

```javascript
import updateGeneratedText from 'update-generated-text'

const startString = '# _Start_Generated_Text'
const endString = '# _End_Generated_Text'

const newContents = '
coverage
.tmp
'

const text = `
# Gitignore
./.DS_Store
`

const newText = updateGeneratedText(
  startString,
  endString,
  newContents,
  text
)

/*
  # Gitignore
  ./.DS_Store

  # _Start_Generated_Text
  coverage
  .tmp
  # _End_Generated_Text
*/
console.log(newText)
```

## Replace Example

```javascript
import updateGeneratedText from 'update-generated-text'

const startString = '# _Start_Generated_Text'
const endString = '# _End_Generated_Text'

const newContents = '
coverage
.tmp
'

const text = `
# Gitignore

# _Start_Generated_Text
lib
# _End_Generated_Text

./.DS_Store
`

const newText = updateGeneratedText(
  startString,
  endString,
  newContents,
  text
)

/*
  # Gitignore

  # _Start_Generated_Text
  coverage
  .tmp
  # _End_Generated_Text

  ./.DS_Store
*/
console.log(newText)
```
