import React from 'react'
import { Tooltip, Pane, } from 'evergreen-ui'

export const RadioGroup = ({ labels, getValue }) => {
    const [selectedIndex, setIndex] = React.useState(0);
    return <div style={styles.container}>
        <div style={styles.tabs}>
            {labels.map((label, index) => {
                return <div
                    style={{
                        cursor: "pointer",
                        width: 60,
                        margin: 0,
                        height: 20,
                        padding: 10, color: index === selectedIndex ? 'white' : 'black', backgroundColor: index === selectedIndex ? 'black' : 'white'
                    }}
                    onClick={() => {
                        setIndex(index);
                        getValue(label.value);
                    }}
                    key={index} >
                    {label.name}
                </div>
            })}
        </div>
        {/* <Pane backgroundColor="#F5F6F7" padding={16} width={180} height={60} flex="1">
            {labels.map((tab, index) => (
                <Pane
                    key={tab}
                    id={`panel-${tab}`}
                    role="tabpanel"
                    aria-labelledby={tab}
                    aria-hidden={index !== selectedIndex}
                    display={index === selectedIndex ? 'block' : 'none'}
                >{tab.description}
                </Pane>
            ))}
        </Pane> */}
    </div>

}
const styles = {
    containter: {
        display: "flex",
        flexDirection: 'column',
        borderRadius: 2
    },
    tabs: {
        display: "flex",
        flexDirection: 'row',
        borderRadius: 2,
        width: 180


    },
    tooltip: {
        width: 30,
        height: 30,
        backgroundColor: 'black',
        opacity: 0.8
    }

}