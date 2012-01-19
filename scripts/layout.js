(function () {
	"use strict";
	var steps, totalSteps, i, step, angle;

	steps = document.querySelectorAll(".step");

	totalSteps = steps.length;

	for (i = 0; i < totalSteps; i = i + 1) {
		step = steps[i];
		angle = Math.round(i * 360 / totalSteps);
		step.setAttribute("data-x", 3000 * Math.cos(Math.PI * angle / 180));
		step.setAttribute("data-y", 3000 * Math.sin(Math.PI * angle / 180));
		step.setAttribute("data-rotate", angle);
	}
}());