import styles from "./field.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectField, selectIsGameEnded } from "../../selectors/index.js";
import { stepClick } from "../../actions/index.js";

export const Field = () => {
    const field = useSelector(selectField) || [];
    const isGameEnded = useSelector(selectIsGameEnded);
    const dispatch = useDispatch();

    return (
        <div className="canvas">
            <ul className={styles.grid}>
                {field.map((item, index) => (
                    <li key={index}>
                        <button
                            className={styles.btn}
                            disabled={field[index] || isGameEnded}
                            onClick={() => dispatch(stepClick(index))}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
