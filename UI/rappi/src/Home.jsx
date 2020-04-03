import React from 'react'
import { Card } from './Card'
import { RadioGroup } from './Radiogroup';
import { PrettoSlider } from './Slider'
import Typography from '@material-ui/core/Typography';
import { Heading } from 'evergreen-ui'

const url = 'https://rocky-ravine-06764.herokuapp.com/logisticR/query?to_user_distance=3.7&total_earning=5000&hour=5&day=5&earn/dist=500&slope=-0.45&store_score=2'


export const Home = ({ label }) => {
    const [model, setModel] = React.useState('KNN');
    const [distance, setDistance] = React.useState(5);
    const [earn, setEarn] = React.useState(2500);
    const [day, setDay] = React.useState(0);
    const [time, setTime] = React.useState(17);
    const [loading, setLoading] = React.useState(false)
    const [response, setResponse] = React.useState(null)
    function getDistance(value) {

        setDistance(value)
    }
    function getProfit(value) {

        setEarn(value)
    }
    // function getDay(value) {
    //     setDay(value)
    // }
    function getTime(value) {

        setTime(value)
    }
    async function handleSubmit() {
        setLoading(true)
        try {
            const response = await fetch(`https://rocky-ravine-06764.herokuapp.com/${model}/query?to_user_distance=${distance}&total_earning=${earn}&hour=${time}&day=${day}&earn/dist=${earn / distance}&slope=-0.45&store_score=2`)
            setLoading(false)
            const jsonResponse = await response.json()
            setResponse(jsonResponse.prediction)

        }
        catch (e) {
            setLoading(false);
            window.alert("Error fetching ....")
            console.error('mierda!', e)
        }
    }

    return (
        <div style={{ textAlign: 'left' }}>

            <Card label={label} />
            <h3>Choose the model to apply to :</h3>
            <RadioGroup getValue={setModel} labels={modelsOptions} />
            <h3>Slide a distance :</h3>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" max={20} getAriaValueText={getDistance} defaultValue={5} />
            <h3>How much does courir obtain for taking this (COP):</h3>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" max={20000} getAriaValueText={getProfit} defaultValue={2500} />
            <h3>Choose order's day of the week  :</h3>
            <RadioGroup getValue={setDay} labels={days} />
            <h3>Choose Time to carry out the otders</h3>
            <PrettoSlider getAriaValueText={getTime} valueLabelDisplay="auto" aria-label="pretto slider" max={24} defaultValue={17} />
            <br />
            <br />
            <div style={{ display: 'flex' }}>
                <div onClick={() => handleSubmit()} className="submit" >
                    <p>Predict</p>
                </div>
                {response && <div style={{ marginLeft: 20, maxWidth:800 }}>
                    <p style={{wordWrap:"break-word"}}>Given distance to user of {distance} Km, a profit by courir of {earn}COP, {days[day].name} and {time} hour(s). A courir is likely to take the order in {response}  </p>

                </div>}
            </div>


            {loading && <div className="loader"></div>}
        </div>
    )
}



const days = [
    { name: "Monday", value: 0 },
    { name: "Thursday", value: 1 },
    { name: "Wednesday", value: 2 },
    { name: "Tuesday", value: 3 },
    { name: "Friday", value: 4 },
    { name: "Saturday", value: 5 },
    { name: "Sunday", value: 6 }
]

const modelsOptions = [
    { name: "KNN", description: "En eneri KNN se cogio", value: "KNN" },
    { name: "CART", description: "en enero CAT se cogio", value: "CART" },
    { name: "Logistic", description: "en Enero Logistic se cogio", value: "logisticR" }
]

const styles = {
    container: {
        height: "inherit",
        width: 80,
        // padding: 2,
        // margin:"0 auto",
        // background: "white",
        border: "2px solid black"

    },
    title: {
        textAlign: 'left'
    }
}
