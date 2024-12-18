import styles from './info.module.css';
import {selectIsDrawing, selectIsGameEnded, selectCurrentPlayer} from '../../selectors/index.js'
import {useSelector} from "react-redux";

export const InformationLayout = () => {
    const isDraw = useSelector(selectIsDrawing);
    const isGameEnded = useSelector(selectIsGameEnded);
    const currentPlayer = useSelector(selectCurrentPlayer)


    return (<div className="info">
            {isDraw ? <div className="draw">
                <p className={styles.p}>Ничья</p>
            </div> : !isDraw && isGameEnded ? <div className="next-step">
                <p className={styles.p}>Победа: {`${currentPlayer}`}</p>
            </div> : !isDraw && !isGameEnded ? <div className="winner">
                <p className={styles.p}>Ходит: {`${currentPlayer}`}</p>
            </div> : null}


        </div>)
}