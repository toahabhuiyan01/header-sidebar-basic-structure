import React from 'react'

function Feed() {
    return (
        <div>
            <ul style={{listStyle: "none"}}>
                {
                    [1,2,3,4,5,6].map(idx => (
                        <li style={{display: "block", backgroundColor: "honeydew", padding: "10px", border: "1px solid"}}>Feed  {idx}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Feed;
