(function () {
	"use strict";
	var steps, totalSteps, i, step, angle, radius;

	steps = document.querySelectorAll(".step");

	totalSteps = steps.length;

	radius = (totalSteps * steps[0].clientHeight * 1.3) / (2 * Math.PI);

	for (i = 0; i < totalSteps; i = i + 1) {
		step = steps[i];
		angle = i * 360 / totalSteps;
		step.setAttribute("data-x", radius * Math.cos(Math.PI * angle / 180));
		step.setAttribute("data-y", radius * Math.sin(Math.PI * angle / 180));
		step.setAttribute("data-rotate", Math.round(angle));
	}
}());