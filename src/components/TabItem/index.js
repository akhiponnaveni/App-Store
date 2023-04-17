// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onSelectImage, isActive} = props
  const {displayText, tabId} = tabDetails

  const selectImage = () => {
    onSelectImage(tabId)
  }
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li>
      <button
        type="button"
        className={`list-Tabs ${activeTabBtnClassName}`}
        onClick={selectImage}
      >
        {displayText}
      </button>
      <hr />
    </li>
  )
}

export default TabItem
