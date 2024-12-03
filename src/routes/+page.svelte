<script>

let dateEquation = Math.floor(((new Date("January 1, 2025") - new Date()) / 1000) / 60);
let dateArray = dateEquation.toString().split('')
let minutesWithComma = dateArray.slice(0,2).join('') + "," + dateArray.slice(2,5).join('');
</script>

<div id="display">
    <h1 >
        {minutesWithComma}
    </h1>
    <h2>
        minutes to midnight
    </h2>
</div>

<style>
    #display {
        
        width: 40rem;
        height: 20rem;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 9rem;
    }
    
    h2 {
        font-size: 1.5rem;
    }
</style>