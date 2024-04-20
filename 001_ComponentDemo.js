
function ComponentDemo() {
    const elements = [
        { key: 1, name: "Alexander", age: 34 },
        { key: 2, name: "Katherine", age: 30 },
        { key: 3, name: "Juan", age: 24 }
    ];

    // JavaScript styles
    let style = { color: 'blue' };

    return (
        <div>
            <ol>
                {elements.map((item) => {
                    return (<li key={item.key} >Name: {item.name} <b style={style}> Age: {item.age}</b></li>)
                })}
            </ol>
            <button onClick={() => alert("Hello")}>Click</button>
        </div>
    );
};

export default ComponentDemo;