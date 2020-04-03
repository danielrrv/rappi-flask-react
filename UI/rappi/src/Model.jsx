import React from 'react'


export const Model = () => {
    return (
        <div style={styles.container}>
            <iframe id="frame_id" height="100%" width="100%" src="./Rappi.html" name="iframe"
                frameborder="0"></iframe>
        </div>
    )
}




const styles = {
    container: {
        width: 1200,
        height: 600
    }
}