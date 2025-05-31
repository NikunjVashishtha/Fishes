import Fish from "./Fish";

import fish1 from './fishes/fish1.png';
import fish2 from './fishes/fish2.png';
import fish3 from './fishes/fish3.png';
import fish4 from './fishes/fish4.png';
import fish5 from './fishes/fish5.png';
import fish6 from './fishes/fish6.png';
import fish7 from './fishes/fish7.png';
import fish8 from './fishes/fish8.png';

const FishImages = [fish1, fish2, fish3, fish4, fish5, fish6, fish7, fish8];

const FishList = () => {
    const c = Math.floor(Math.random() * 10) + 8;
    const fishArray = [];
    for (let i = 0; i < c; i++) {
        const wiggleTime = (Math.random() * 2 + 0.5).toFixed(2) + 's';
        const FishNo = Math.floor(Math.random() * 8);
        const side = Math.random() < 0.5 ? -1 : 1;
        const h = Math.floor(Math.random() * 100) + 50;

        fishArray.push(
            <Fish
                key={i}
                src={FishImages[FishNo]}
                h={h}
                FishNo={FishNo}
                side={side}
                wiggleTime={wiggleTime}
            />
        );
    }

    return fishArray;
};

export default FishList;
