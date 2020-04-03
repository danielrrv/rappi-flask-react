import React from 'react'
import { Card } from './Card'

export const About = () => {
    return ( <>
            <div className="card" style={styles.container}>
                <p style={styles.title}><strong>Description:</strong> This Application Program Interface looks forward to expose
            a couple Machine Learning Algorithm applied to a <a href='https://www.rappi.com/' target='_blank'>Rappi</a> dataset.To see further, check Model label </p>

            </div>
            <div className="card" style={styles.container}>
                <p style={styles.title}><strong>User story:</strong> As a Rappi, I want to know how likely would a courir taken a order based on
                distance to user, profit by order, day and time. As benefit, Rappi might provide to courirs, orders more likely to be taken. Rappi could reduce percentage of rejections in orders by courir as well. </p>

            </div>
            <div className="card" style={styles.container}>
            <p style={styles.title}><strong>Arquitecture of the App</strong> This Application was boostrapped with React and Flask.Some widget may be found in <a href='https://evergreen.segment.com/' target='_blank'>Evergreen</a>  and <a href='https://material-ui.com/components/slider/' target='_blank'>Material UI</a>  </p>
        
        </div>
        <div className="card" style={styles.container}>
            <p style={styles.title}><strong>Model serving Arquitecture</strong> Under the hood, on the server are 3 models pre-trained(Pickles) which on requests handle the incoming data, predict and then simply the server builds the response that you see on screen.In addition, <a href='https://scikit-learn.org/stable/' target='_blank'>Scikit-learn</a> instances are running as well.If we wanted to go further , we could implement TensorFlow Ecosystem to power this App.</p>
        
        </div>
        </>
    )
}


const styles = {
    container: {
        height: 80,
        width: 900,
        padding: 20,
        marginBottom: 20,
        backgroundColor: "white",

    },
    title: {
        textAlign: 'left'
    }
}
