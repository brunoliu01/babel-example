class Velocity {
	constructor(distance, time) {
		this.distance = distance;
		this.time = time;
	}

	getVelocity() {
		return this.distance/this.time;
	}
}

const goku = new Velocity(500, 5)
console.log(`La velocidad de goku es ${goku.getVelocity()}`);