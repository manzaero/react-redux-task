import {useDispatch, useSelector} from "react-redux";
import {selectField, selectIsDrawing, selectIsGameEnded} from "../selectors/index.js";
import {restart, togglePlayer} from "../actions/index.js";

export function GameLayout() {
    const isDraw = useSelector(selectIsDrawing);
    const isGameEnded = useSelector(selectIsGameEnded);
    const field = useSelector(selectField);


    const dispatch = useDispatch();

    return (<div className="container">
        <button className="btn-restart" onClick={() => dispatch(restart())}>Заново
        </button>
        <button className="btn-restart btn-color"
                disabled={isDraw || isGameEnded || field.some((param) => param !== '') ? true : null}
                onClick={() => dispatch(togglePlayer())}>Сменить игрока
        </button>
    </div>)
}