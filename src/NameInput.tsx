import React from 'react';

type NameInputProps = {
    handler(event: React.ChangeEvent<HTMLInputElement>): void;
}

const NameInput = (props: NameInputProps): React.ReactElement => {
    console.log(props)
    console.log(props.handler)
    return (
        <input width={"100px"} onChange={(e) => props.handler(e)}></input>
    )
}

export default NameInput;