/* first, define necessary JavaScript functions */
const get_data = () => {
	return [ // this array contains the ids of the relevant inputs. This is the order of the parameters of the Rust run_load function.
		'square-feet'
	].map(id => document.getElementById(id).value);
};

const define_default = id => {
	return {
		'square-feet': 1700
	}[id];
};

const display_results = results => {
	document.getElementById("output").innerHTML = results;
};

const js = import("./eds_test.js");
js.then(js => {
	/* begin main code here */
	[...document.querySelectorAll("input[type=text]")].forEach(input => {
		input.value = define_default(input.id);
	});

	document.getElementById("run-load").addEventListener("click", function () {
		js.greet(...get_data());
	});
});
