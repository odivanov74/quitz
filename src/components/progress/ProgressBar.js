import './ProgressBar.css';

function ProgressBar({percent})
{
    const getColor = () =>
    {
        let color = "";
        if(percent<40) color = "#FF0000"
        else if(percent>70)color = "#FFA500"
        else color = "#2ECC71";
        return color;
    }

    return(
        
        <div className='progress-bar'>
            <div className='progress-bar-fill' style = {{width: `${percent}%`, background: {getColor}}} ></div>
            
        </div>
        
    )
}

export default ProgressBar;