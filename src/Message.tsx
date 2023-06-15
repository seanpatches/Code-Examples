import React from 'react';

type MessageProps = {
    msg: string;
    name?: string;
}

const Message = (props: MessageProps): React.ReactElement => {
    return (
        <p>{props.msg}{props.name}</p>
    )
}

export default Message;