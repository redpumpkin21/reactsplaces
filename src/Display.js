import React from 'react'

const Display = (props) => {
    const {places} = props
    const loaded = () => (
        <div style = {{textAlign: 'center'}} className = 'places'>
            {places.map((place) => (
                <article>
                    <img src ={place.img}/>
                    <h1>{place.name}</h1>
                    <h3>{place.description}</h3>
                    <button onClick = {() => {
                        props.selectPlace(place)
                        props.history.push('/edit')
                    }}>Edit</button>
                    <button onClick = {() => {
                        props.deletePlace(place)
                    }}>Delete</button>
                </article>
            ))}
        </div>
    )
    const loading = <h1>Yeah, we loading .... some stuff atm, sorry not sorry</h1>

    return places.length > 0 ? loaded() : loading                 
}

export default Display