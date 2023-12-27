const TagName = props => {
  const {eachItem} = props
  const {tagName, taskName} = eachItem
  return (
    <>
      <li>
        <div>
          <p>{tagName}</p>
        </div>
      </li>
      <li>
        <div>
          <p>{taskName}</p>
        </div>
      </li>
    </>
  )
}
export default TagName
