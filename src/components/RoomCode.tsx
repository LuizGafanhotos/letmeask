import copyImg from '../assets/images/copy.svg';
import '../styles/RoomCode.scss';

type RoomCodeProps = {
    code: string,
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipcard(){
        navigator.clipboard.writeText(props.code)
    }
    
    return (
        <button className="room-code" onClick={copyRoomCodeToClipcard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala N{props.code}</span>
        </button>
    )
}