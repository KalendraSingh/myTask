const Tags = props => {
  const {eachTags, tagIsClicked, isActive} = props
  const {displayText, optionId} = eachTags

  const cl = isActive ? 'active-tag' : ''

  const onClickTag = () => {
    tagIsClicked(displayText, optionId)
  }
  return (
    <li onClick={onClickTag} className={`${cl}`}>
      <button type="button">{displayText}</button>
    </li>
  )
}
export default Tags
