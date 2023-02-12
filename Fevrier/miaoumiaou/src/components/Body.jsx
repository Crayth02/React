import { useState } from "react";

const Body = () => {

    let [limit, setLimit] = useState(10);
    const [chats, setChats] = useState([]);

    const url = "https://api.thecatapi.com/v1/images/search"

    const handleInput = (e) => {
        setLimit(e.currentTarget.value);
        const url1 = new URL(url);
        url1.searchParams.set("limit" , +limit + 1);

        fetch(url1)
        .then(res => res.json())
        .then(res => {
            setChats(res);
        })
    }

    return (
        <div id="container">
            <form action="" method="get">
                <div>
                    <input type="number" 
                    id="limit" 
                    placeholder="Limite du nombre de chat"
                    min="5"
                    max="100"
                    value={limit}
                    onInput={handleInput} 
                    />
                    <button>Valider</button>
                </div>
            </form>
            <section>
                { chats &&
                    chats.map((c, i) => {
                        return (
                            <figure key={i}>
                                <img src={c.url} alt="" />
                                <figcaption>{c.id}</figcaption>
                            </figure>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Body;