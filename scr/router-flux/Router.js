import React, {Component} from 'react';

import {Router, Scene} from 'react-native-router-flux';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Lamp from '../screens/Lamp';
import Garage from '../screens/Garage';
import Alarm from '../screens/Alarm';
import Sensor from '../screens/Sensor';
import Fan from '../screens/Fan';

const Routes = () => {
    
    return(
        <Router>
            <Scene key="root">
                <Scene 
                    key="Login"                   
                    component={Login}
                    initial={true}
                    hideNavBar={true} 
                />
                <Scene 
                    key="Home"                   
                    component={Home}
                    hideNavBar={true}
                />
                <Scene 
                    key="Lamp"                   
                    component={Lamp}
                    hideNavBar={true}
                />
                <Scene 
                    key="Garage"                   
                    component={Garage}
                    hideNavBar={true}
                />
                <Scene  
                    key="Alarm"                   
                    component={Alarm}
                    hideNavBar={true}
                />
                <Scene  
                    key="Sensor"                   
                    component={Sensor}
                    hideNavBar={true}
                />
                <Scene  
                    key="Fan"                   
                    component={Fan}
                    hideNavBar={true}
                />
            </Scene>
        </Router>
    )
}
export default Routes