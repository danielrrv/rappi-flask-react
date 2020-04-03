import React from 'react'
import { Text, Heading } from 'evergreen-ui'

export const Card = ({label}) => {
    return (
        <div className="card" style={styles.container}>
            <p style={styles.title}><strong>Instructions:</strong> Select type of model to apply to, distance to user, profit by order, day and time.To see further, check Model label </p>
            <p>{label}</p>
        
            
        </div>
    )
}
const styles = {
    container: {
        height: 80,


        
        width: 900,
        padding: 20,
        marginBottom:20,
        backgroundColor: "white",

    },
    title: {
        textAlign: 'left'
    }
}
