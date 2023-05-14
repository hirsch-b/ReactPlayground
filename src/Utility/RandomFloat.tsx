import { useEffect, useState } from "react";
import "./RandomFloat.scss";

export default function RandomFloat() {
    const [age, setAge] = useState(66.66);

    useEffect(() => {
        const interval = setInterval(() => {
            let rand_age = (Math.random() * 100) % 100;
            if (rand_age < 10) rand_age += 10;
            setAge(rand_age);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return <code className="RandomFloat">{age.toFixed(2)}</code>;
}
