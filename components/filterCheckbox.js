import React, {useState} from 'react'
import {Label, Checkbox} from '@rebass/forms'
import {Text} from 'rebass'
export default props => {
	const [checked, setChecked] = useState(false)

	const changed = event => {
		setChecked(!checked)
		props.onChange(event.target.value)
	}

	return (
		<Label>
			<Checkbox
				name="check"
				checked={checked}
				onChange={event => changed(event)}
			/>
			<Text fontSize={[1, 2, 3]}>{props.title}</Text>
		</Label>
	)
}
