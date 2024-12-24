import ProgressBar from '../progress/ProgressBar';
import './Quitzes.css'

function Quitzes({question, onClickVariant, lenght, step, correct})
{
 const percent = Math.round(100 * step / (lenght - 1));
 return(
    <div className="content">
        <h3>{question.title}</h3>
        <ul>
            {
                question.variants.map
                (
                    (text, index) => <li key={index} onClick={() => onClickVariant(index)}>
                        {text}
                    </li>
                )
            }
        </ul>
        <ProgressBar percent = {percent} />
    </div>
 )
}
export default Quitzes;