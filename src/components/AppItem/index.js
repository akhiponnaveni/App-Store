// Write your code here

import './index.css'

const AppItem = props => {
  const {imageDetails} = props
  const {imageUrl, appName} = imageDetails
  return (
    <li className="image-list-container">
      <img src={imageUrl} alt={appName} className="Image" />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
