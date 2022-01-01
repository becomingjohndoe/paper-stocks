const maxRise = 0.07;
const bullProb = 0.6;
const marketSentimentVals = [-7, -1, 1, 3];
const marketSentimentProbs = [0.1, 0.2, 0.8, 1];
const numTurns = 30;
/**
 * Generates price data by calculating a 0%..7% movement magnitude multiplied by the "market sentiment",
 * which is either super bearish, bearish, or bullish. The probabilities of the sentiment can also be configured
 * marketSentimentProbs.
 */
export default function generatePriceData(lastPrice) {
	// let lastPrice = 10;

	let sentiment = marketSentimentVals[2];
	let isBull = false;
	return Array.from({ length: numTurns }, (x, i) => {
		if (i == 0) return lastPrice;

		const movementPercent = Math.random() * maxRise * sentiment;
		lastPrice += lastPrice * movementPercent;
		lastPrice = Math.max(0, lastPrice);

		/* Roll a dice to change isBull */
		const diceRoll = Math.random();
		sentiment =
			marketSentimentVals[marketSentimentProbs.findIndex((it) => diceRoll < it)];
		isBull = Math.random() < bullProb;

		return { lastPrice, movementPercent };
	});
}
