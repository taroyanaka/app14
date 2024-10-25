<script>
    let coins = 100;
    let bonus_time = 0;
    const symbols = [
		'7', 'BAR', '★', '🍒', '🔔',
		'7', 'BAR', '★', '🍒', '🔔',
		'7', 'BAR', '★', '🍒', '🔔',
		'7', 'BAR', '★', '🍒', '🔔',
		'7', 'BAR', '★', '🍒', '🔔',
		'7', 'BAR', '★', '🍒', '🔔',
		'7', 'BAR', '★', '🍒', '🔔',
		'7', 'BAR', '★', '🍒', '🔔',
		'7', 'BAR', '★', '🍒', '🔔',
		'7', 'BAR', '★', '🍒', '🔔',
		'7', 'BAR', '★', '🍒', '🔔',
		'7', 'BAR', '★', '🍒', '🔔',
		'7', 'BAR', '★', '🍒', '🔔',
	];
	let central_symbol = [];
	let result = '';
	let isSpinning = false;

    function startGame() {
        if (isSpinning) return;
        isSpinning = true;
        result = '';
        startReelSpin(0);
        startReelSpin(1);
        startReelSpin(2);
        stopReelsSequentially();
    }

    function startReelSpin(index) {
        const reel = document.getElementById(`symbols${index + 1}`);
        reel.style.transition = 'none';
        reel.style.transform = 'translateY(0)';
        setTimeout(() => {
            reel.style.transition = `transform 1s linear ${index * 0.1}s`;
            reel.style.transform = 'translateY(-30rem)';
        }, 100);
    }


		

    function stopReel(index, delay) {
		central_symbol = [];
        setTimeout(() => {
            const reel = document.getElementById(`symbols${index + 1}`);
            const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
            reel.style.transition = 'transform 1s ease-out';
            reel.style.transform = `translateY(-${randomSymbolIndex * 50}px)`;
            reel.dataset.symbol = symbols[randomSymbolIndex];
			central_symbol.push(symbols[randomSymbolIndex + 1]);
			console.log(central_symbol);
        }, delay);
    }



    function stopReelsSequentially() {
        stopReel(0, 1000);
        stopReel(1, 2000);
        stopReel(2, 3000);

        setTimeout(() => {
            if (central_symbol[0] === central_symbol[1] && central_symbol[1] === central_symbol[2]) {
                result = '当たり!';
                if (central_symbol[0] === '7') {
                    coins += bonus_time > 0 ? 10 : 1;
                } else if (central_symbol[0] === 'BAR') {
                    coins += bonus_time > 0 ? 100 : 10;
                } else if (central_symbol[0] === '★') {
                    coins += bonus_time > 0 ? 200 : 20;
                } else if (central_symbol[0] === '🍒') {
                    coins += bonus_time > 0 ? 40 : 4;
                } else if (central_symbol[0] === '🔔') {
                    coins += bonus_time > 0 ? 70 : 7;
                }
                bonus_time += 10;
            } else {
                result = 'ハズレ';
                coins -= 1;
                if (bonus_time !== 0) {
                    bonus_time += Math.random() < 0.1 ? 3 : 0;
                }
                if (bonus_time === 0) {
                    bonus_time = Math.random() < 0.05 ? 10 : 0;
                }
                if (coins <= 0) {
                    result = 'ゲームオーバー';
                }
            }
            if (bonus_time === 0) {
                bonus_time = '';
            } else {
                bonus_time -= 1;
            }
            isSpinning = false;
        }, 4000);
    }



</script>

<style>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background-color: black;
        color: white;
        font-family: sans-serif;
    }
    #Slot-machine {
        width: 300px;
        height: 400px;
        border: 5px solid #f0f0f0;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
		/* 薄い灰色 */
        background-color: #f0f0f0;
    }
    #reels {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        padding: 0 10px;
    }
    .reel {
        width: 80px;
        height: 10rem;
        overflow: hidden;
        border: 2px solid white;
        border-radius: 5px;
		/* 薄い灰色 */
        background-color: #f0f0f0;
        position: relative;
    }
    .symbols {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        width: 100%;
        transition: transform 1s ease-out;
    }
    .symbol {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
    }
    #result {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 2em;
    }
    #start-button {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-color: #ff6600;
        border: none;
        padding: 10px 20px;
        font-size: 1.2em;
        color: white;
        cursor: pointer;
    }

</style>

<div id="Slot-machine">
    <div id="reels">
        <div class="reel" id="reel1">
            <div class="symbols" id="symbols1">
                {#each symbols as symbol, idx}
                    <!-- <div class="symbol" data-symbol={symbol}>{symbol+idx}</div> -->
                    <div class="symbol" data-symbol={symbol}>{symbol}</div>
                {/each}
            </div>
        </div>
        <div class="reel" id="reel2">
            <div class="symbols" id="symbols2">
                {#each symbols as symbol, idx}
				<!-- <div class="symbol" data-symbol={symbol}>{symbol+idx}</div> -->
				<div class="symbol" data-symbol={symbol}>{symbol}</div>
                {/each}
            </div>
        </div>
        <div class="reel" id="reel3">
            <div class="symbols" id="symbols3">
                {#each symbols as symbol, idx}
				<!-- <div class="symbol" data-symbol={symbol}>{symbol+idx}</div> -->
				<div class="symbol" data-symbol={symbol}>{symbol}</div>
                {/each}
            </div>
        </div>
    </div>
    <div id="bonus_time">{bonus_time ? `ボーナスタイム${bonus_time}回(当たりが10倍になる)` : ''}</div>
    <div id="coins">{coins}</div>
    <div id="result">{result}</div>
    <button id="start-button" on:click={startGame} disabled={isSpinning}>Start</button>
</div>

