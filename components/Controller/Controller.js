import React from 'react';
import {View} from 'react-native';
import {START, STOP, RESET} from '../types';
//Components
import {ButtonGeneral} from '../common/ButtonGeneral';
import {CardSection} from '../common/CardSection';

const Controller = (props) => (
				<View>
				<CardSection>
					<ButtonGeneral onPress={() => {props.activateController(START)}} >
						{START}
					</ButtonGeneral>
					<ButtonGeneral onPress={() => {props.activateController(STOP)}}>
						{STOP}
					</ButtonGeneral>
					<ButtonGeneral onPress={() => {props.activateController(RESET)}}>
						{RESET}
					</ButtonGeneral>
				</CardSection> 
			</View>
)

export default Controller;