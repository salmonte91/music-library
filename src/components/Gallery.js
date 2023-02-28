import {useContext} from 'react'
import GalleryItem from './GalleryItem'
import {DataContext} from '../context/DataContext'

function Gallery(props) {
  const data = useContext(DataContext)
  const display = props.data.map((item, i) => {
    return(
      <GalleryItem item={item} key={i}/>
    )
  })

  return (
    <div>
        {display}
    </div>
  )
}

export default Gallery