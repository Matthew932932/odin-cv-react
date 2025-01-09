function GenInfo({ 
	onNameChange, 
	nameVar 
}) {
  return (
	<div className="genInfo">
		<label>
        Full name:{' '}
        <input
          value={nameVar}
          onChange={onNameChange}
        />
      </label>
	</div>
	);
}

export {GenInfo};
