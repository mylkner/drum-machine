import { useEffect, useRef } from "react";
import "./style.css";

const DrumMachine = () => {
    const descriptor = useRef(null);

    useEffect(() => {
        const keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

        const handleKeydown = (e) => {
            audioPlayer(e.key.toUpperCase());
            const key = e.key.toLowerCase();

            if (keys.includes(key)) {
                document.getElementById(key).className =
                    "drum-pad drum-pad-active";
            }
        };

        const handleKeyup = (e) => {
            const key = e.key.toLowerCase();

            if (keys.includes(key)) {
                document.getElementById(key).className = "drum-pad";
            }
        };

        document.addEventListener("keydown", handleKeydown);
        document.addEventListener("keyup", handleKeyup);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
            document.removeEventListener("keyup", handleKeyup);
        };
    }, []);

    const audioPlayer = (button) => {
        const buttonId = document.getElementById(button.toUpperCase());

        switch (button) {
            case "Q":
                buttonId.currentTime = 0;
                buttonId.play();
                descriptor.current.innerText = "Heater 1";
                break;
            case "W":
                buttonId.currentTime = 0;
                buttonId.play();
                descriptor.current.innerText = "Heater 2";
                break;
            case "E":
                buttonId.currentTime = 0;
                buttonId.play();
                descriptor.current.innerText = "Heater 3";
                break;
            case "A":
                buttonId.currentTime = 0;
                buttonId.play();
                descriptor.current.innerText = "Heater 4";
                break;
            case "S":
                buttonId.currentTime = 0;
                buttonId.play();
                descriptor.current.innerText = "Clap";
                break;
            case "D":
                buttonId.currentTime = 0;
                buttonId.play();
                descriptor.current.innerText = "Open HH";
                break;
            case "Z":
                buttonId.currentTime = 0;
                buttonId.play();
                descriptor.current.innerText = "Kick n' Hat";
                break;
            case "X":
                buttonId.currentTime = 0;
                buttonId.play();
                descriptor.current.innerText = "Kick";
                break;
            case "C":
                buttonId.currentTime = 0;
                buttonId.play();
                descriptor.current.innerText = "Closed HH";
                break;
            default:
                return;
        }
    };

    return (
        <div id="drum-machine">
            <div className="buttons">
                <button
                    id="q"
                    className="drum-pad q"
                    onClick={() => audioPlayer("Q")}
                >
                    Q
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                        id="Q"
                        className="clip"
                    ></audio>
                </button>
                <button
                    id="w"
                    className="drum-pad"
                    onClick={() => audioPlayer("W")}
                >
                    W
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                        id="W"
                        className="clip"
                    ></audio>
                </button>
                <button
                    id="e"
                    className="drum-pad"
                    onClick={() => audioPlayer("E")}
                >
                    E
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                        id="E"
                        className="clip"
                    ></audio>
                </button>
                <button
                    id="a"
                    className="drum-pad"
                    onClick={() => audioPlayer("A")}
                >
                    A
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                        id="A"
                        className="clip"
                    ></audio>
                </button>
                <button
                    id="s"
                    className="drum-pad"
                    onClick={() => audioPlayer("S")}
                >
                    S
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                        id="S"
                        className="clip"
                    ></audio>
                </button>
                <button
                    id="d"
                    className="drum-pad"
                    onClick={() => audioPlayer("D")}
                >
                    D
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                        id="D"
                        className="clip"
                    ></audio>
                </button>
                <button
                    id="z"
                    className="drum-pad"
                    onClick={() => audioPlayer("Z")}
                >
                    Z
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                        id="Z"
                        className="clip"
                    ></audio>
                </button>
                <button
                    id="x"
                    className="drum-pad"
                    onClick={() => audioPlayer("X")}
                >
                    X
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                        id="X"
                        className="clip"
                    ></audio>
                </button>
                <button
                    id="c"
                    className="drum-pad"
                    onClick={() => audioPlayer("C")}
                >
                    C
                    <audio
                        src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                        id="C"
                        className="clip"
                    ></audio>
                </button>
            </div>

            <span id="display" ref={descriptor}></span>
        </div>
    );
};

export default DrumMachine;
