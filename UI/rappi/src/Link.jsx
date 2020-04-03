import React from 'react'



export const Link = ({ onClick, isSelected,  arial, key, id, index }) => {
    return (
        <div tabIndex='0' className="card"  onClick={e => onClick(e)}>
            <div style={{
                cursor: "pointer",
                borderRadius: 2,
                width: 80,
                margin: 15,
                height: 20,
                padding: 10, color: isSelected ? 'white' : 'black', backgroundColor: isSelected ? 'black' : 'white'
            }}>
                {id}
            </div>
        </div>
    )
}




const style = {
    container: {


    }
}