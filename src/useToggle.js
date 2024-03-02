import { useEffect, useState } from "react";

export function useToggle(initialValue = [true, false]) {
	const [sequence, setSequence] = useState(Array.isArray(initialValue) ? initialValue : [true, false]);
	const [value, setValue] = useState(sequence[0]);

	const toggle = (name) => {
		if (sequence.includes(name)) {
			setSequence((prev) => {
				const index = prev.indexOf(name);
				prev = [...prev.slice(index), ...prev.slice(0, index)];
				return [...prev];
			});
		} else {

			setSequence((prev) => {
				prev.push(prev.shift());
				return [...prev];
			});
		}
	}

	useEffect(() => {
		setValue(sequence[0]);
	}, [sequence]);

	return [value, toggle];
}