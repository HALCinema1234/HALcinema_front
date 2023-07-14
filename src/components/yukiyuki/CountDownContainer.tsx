import React, { useState } from 'react';

export const CountDownContainer = () => {
    const [count, setcount] = useState(1);
    return (
        <div>
            CountDownContainer
            <button onClick={() => setcount(count +1 )}>+</button>
            <button onClick={() => setcount(count -1 )}>-</button>{count}
        

        </div>
    );
};
