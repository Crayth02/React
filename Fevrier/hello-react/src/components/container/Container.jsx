import { useState } from "react";

const Container = () => {

    const [justify, setJustify] = useState("center");

    console.log(justify);

    return (
        <>
            <div id="container" style={{ ...style.container, justifyContent: justify }}>
                <div className="flex" style={style.flex}></div>
                <div className="flex" style={style.flex}></div>
                <div className="flex" style={style.flex}></div>
            </div>
            <div className="buttons">
                <button onClick={() => setJustify('center')}>Center</button>
                <button onClick={() => setJustify('space-between')}>Space Between</button>
                <button onClick={() => setJustify('space-evenly')}>Space Evenly</button>
            </div>
        </>
    )
}

const style = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },

    flex: {
        width: '200px',
        height: '200px',
        backgroundColor: 'cyan',
        margin: '10px',
    }
}

export default Container;