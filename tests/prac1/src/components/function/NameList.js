import React from 'react'

function NameList() {
    const names = ["Bruce", "Clark", "Debby"]
    const nameList = names.map(name => <p>{name}</p>)
    return <div>{nameList}</div>
}

export default NameList