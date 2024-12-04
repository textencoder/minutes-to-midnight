<script>

import {onMount} from 'svelte';

let currentDate = new Date();
let endDate = new Date("January 1, 2025");

$: differenceInMinutes = Math.floor(((endDate - currentDate) / 1000) / 60);

onMount(() => {
    const intervalId = setInterval(() => {
        currentDate = new Date();   
    }, 60000);

    return () => clearInterval(intervalId);
});

// @ts-ignore
//let dateEquation = ;
//let dateArray = dateEquation.toString().split('')
//let minutesWithComma = dateArray.slice(0,2).join('') + "," + dateArray.slice(2,5).join('');

</script>

<div id="display">
    <h1 >
        {differenceInMinutes}
    </h1>
    <h2>
        minutes to midnight
    </h2>
</div>

<style>

    #display { 
        width: 40rem;
        height: 30rem;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       
    }

    h1 {
        font-size: 10rem;
    }
    
    h2 {
        font-size: 1.5rem;
    }
</style>