import React from 'react'
import { Pane, Text, Tablist, Tab, Paragraph } from 'evergreen-ui'
import { Link } from './Link'
import { Home } from './Home'
import { HOC } from './HOC'
import { Model } from './Model'
import { About } from './About'



export const AppBar = () => {
    const [selectedIndex, setIndex] = React.useState(0);
    const tabs = [{ name: 'API', component: Home }, { name: 'Model', component: Model }, { name: 'About', component: About }]



    function arrow(selectedIndex, e) {
        if (e.keyCode == 39 && selectedIndex == 2) {
            setIndex(0)
        } else if (e.keyCode == 37 && selectedIndex == 0) {
            setIndex(2)
        } else if (e.keyCode == 39) {
            setIndex(selectedIndex + 1)
        } else if (e.keyCode == 37) {
            setIndex(selectedIndex - 1)
        } else if (e.keyCode != 37 || e.keyCode != 39) {
            setIndex(selectedIndex)
        } else {
            setIndex(selectedIndex - 1)
        }

    }



    return (
        <div onKeyDown={(e) => arrow(selectedIndex, e)} style={{ borderTop: "1px solid black", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Pane marginBottom={16} flexBasis={240} marginRight={24} display='flex'
                flexDirection='row'>
                {tabs.map((tab, index) => (
                    <Link
                        key={tab.name}
                        id={tab.name}
                        onClick={() => setIndex(index)}
                        isSelected={index === selectedIndex}
                        aria-controls={`panel-${tab.name}`}
                    >
                        {tab.name}
                    </Link>
                ))}
            </Pane>
            <Pane padding={16} flex="1">
                {tabs.map((tab, index) => (
                    <Pane
                        key={tab.name}
                        id={`panel-${tab}`}
                        role="tabpanel"
                        aria-labelledby={tab.name}
                        aria-hidden={index !== selectedIndex}
                        display={index === selectedIndex ? 'block' : 'none'}
                    >
                        {/* <Home label={tab.name} /> */}
                        <HOC WrappedComponent={tab.component} />
                    </Pane>
                ))}
            </Pane>
        </div>
    )
};



