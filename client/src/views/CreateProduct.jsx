import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const CreateProduct = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const history = useHistory()

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new',{title, price, description})
            .then(res=>{
                history.push('/')
            })
            .catch(err=>console.log(err));
            window.location.reload(true);
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Price: </label>
                <input type="number" name="price" value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" name="description" value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
            </div>
            <button>Create</button>
        </form>
    </div>
  )
}

export default CreateProduct