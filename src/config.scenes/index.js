import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import Main from '../App/shared/tpl.main'
import Choose from '../App/views/Choose'
import Confirm from '../App/views/Confirm'
import Calendar from '../App/views/Calendar'

export const scenes = Actions.create(
  <Scene key='root' hideNavBar={true} >
     <Scene key='choose' initial={true} component={Main(Choose)} title='Choose'/>
     <Scene key='confirm' component={Confirm} />
     <Scene key='calendar' component={Calendar} />
  </Scene>
)
