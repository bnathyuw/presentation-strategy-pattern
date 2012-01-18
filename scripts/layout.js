(function () {
	"use strict";
	var steps, totalSteps, i, step;

	steps = document.querySelectorAll(".step");

	totalSteps = steps.length;

	for (i = 0; i < totalSteps; i = i + 1) {
		step = steps[i];
		step.setAttribute("data-x", 2000 * Math.cos(i * Math.PI * 2 / totalSteps));
		step.setAttribute("data-y", 2000 * Math.sin(i * Math.PI * 2 / totalSteps));
		step.setAttribute("data-rotate", i * (360 / totalSteps));
	}
}());