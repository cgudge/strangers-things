function tournamentWinner(competitions, results) {
	let key = {};
	for (let i = 0; i < results.length; i++) {
		let winner = results[i] ? competitions[i][0] : competitions[i][1];
		if (key[winner] === undefined) {
			key[winner] = 1;
		} else {
			key[winner]++;
		}
	}
	let winner = competitions[0][0];
	Object.keys(key).forEach((name) => {
		console.log(key[winner], key[name]);
		if (key[winner] <= key[name] || key[winner] === undefined) {
			winner = name;
		}
	});
	console.log(key);
	return winner;
}
console.log(
	tournamentWinner(
		[
			['Bulls', 'Eagles'],
			['Bulls', 'Bears'],
			['Bears', 'Eagles'],
		],
		[0, 0, 0]
	)
);
