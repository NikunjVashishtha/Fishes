const Fish = ({ src, h, FishNo, wiggleTime }) => {
    const leftPos = (Math.random() * 100 + 100).toFixed(2);
    const side = Math.random() < 0.5 ? -1 : 1;
    const fishStyle = {
        position: "absolute",
        height: `${h}px`,
        width: `${h * 1.14}px`,
        zIndex: 1,
        animation: `wiggle ${wiggleTime} linear infinite alternate-reverse`,
    };

    const fishBoxStyle = {
        position: "absolute",
        top: `${Math.random() * 100}vh`,
        left: `${leftPos}vw`,
        animation: `swim ${Math.random() * 5 + 5}s linear infinite`,
    };

    return (
        <div className="flipbox" style={{transform: `scaleX(${side})`}}>
            <div className="fishBox" style={fishBoxStyle}>
                <style>
                    {`@keyframes swim {
                    0% {
                        transform: translateX(${leftPos}vw);
                    }
                    100% {
                        transform: translateX(-200vw);
                    }
                }`}
                </style>
                <img
                    src={src}
                    alt={`Fish ${FishNo}`}
                    className="fish"
                    style={fishStyle}
                />
            </div>
        </div>
    );
};

export default Fish;