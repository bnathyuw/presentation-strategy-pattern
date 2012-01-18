(function () {
	var steps, i, step;
	
	steps = document.querySelectorAll(".step");
	
	for (i = 0; i < steps.length; i = i + 1) {
		step = steps[i];
		step.setAttribute("data-x", i * 1000 + 50);
		step.setAttribute("data-y", 100);
	}
}());