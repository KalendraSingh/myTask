import './App.css'
import {Component} from 'react'
import {v4} from 'uuid'
import TagName from './TagName/index'
import Tags from './Tags/index'
// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    initialtagsList: tagsList,
    taskInput: '',
    tagsInput: '',
    tagText: '',
    newList: [],
    tagIsAcive: '',
  }

  onChangeTask = e => {
    this.setState({taskInput: e.target.value})
  }

  onChangeTags = e => {
    this.setState({tagsInput: e.target.value})
  }

  onSubmitTheTask = e => {
    e.preventDefault()
    const {tagsInput, taskInput} = this.state

    const newTask = {
      id: v4(),
      tagName: tagsInput,
      taskName: taskInput,
    }

    this.setState(prevState => ({
      newList: [...prevState.newList, newTask],
      tagsInput: '',
      taskInput: '',
    }))
  }

  tagIsClicked = (text, id) => {
    this.setState({tagText: text, tagIsAcive: id})
  }

  render() {
    const {
      initialtagsList,
      tagsInput,
      taskInput,
      newList,
      tagText,
      tagIsAcive,
    } = this.state
    console.log(tagText)
    console.log(tagIsAcive)
    const filteredList = newList.filter(listItem =>
      listItem.tagName.toLowerCase().includes(tagText.toLowerCase()),
    )
    const listLength = filteredList.length
    return (
      <div>
        <div>
          <h1>Create a task!</h1>
          <form onSubmit={this.onSubmitTheTask}>
            <div>
              <label htmlFor="task">Task</label>
              <br />
              <input
                type="text"
                id="task"
                placeholder="Enter the task here"
                onChange={this.onChangeTask}
                value={taskInput}
              />
            </div>
            <div>
              <label htmlFor="tags">Tags</label>
              <br />
              <select id="tags" value={tagsInput} onChange={this.onChangeTags}>
                {initialtagsList.map(eachOption => (
                  <option value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit">Add Task</button>
          </form>
        </div>
        <div>
          <h1>Tags</h1>
          <ul>
            {tagsList.map(eachTags => (
              <Tags
                key={eachTags.optionId}
                eachTags={eachTags}
                tagIsClicked={this.tagIsClicked}
                isActive={tagIsAcive === eachTags.optionId}
              />
            ))}
          </ul>
        </div>
        <div>
          <h1>Tasks</h1>
          <ul>
            {listLength !== 0 ? (
              filteredList.map(eachItem => (
                <TagName key={eachItem.id} eachItem={eachItem} />
              ))
            ) : (
              <p>No Tasks Added Yet</p>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
