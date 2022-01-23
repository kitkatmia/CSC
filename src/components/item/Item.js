
import './item.css'
import { useState } from 'react'

const Item = (props) => {

    const data = props.item

    const [dataStyle, setDataStyle] = useState()
    let [hidden, setHidden] = useState(props.done)

    const handleDone = () => {
        setDataStyle('done')
    }

    const handleDelete = () => {
        setHidden(true)
    }

    return (
        <>
            {
                hidden ? null :
                    <div className="item">
                        <h2 className={dataStyle}>{data}</h2>
                        <button onClick={handleDone}>Done</button>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
            }
        </>
    )
}

export default Item;