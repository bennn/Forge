var json = {"relations":{"side":[["s1","g1","far"],["s1","g2","near"],["s1","g3","near"],["s1","w1","near"],["s1","w2","far"],["s1","w3","far"],["s1","boat","near"],["s2","g1","far"],["s2","g2","near"],["s2","g3","near"],["s2","w1","near"],["s2","w2","far"],["s2","w3","near"],["s2","boat","far"],["s3","g1","near"],["s3","g2","near"],["s3","g3","near"],["s3","w1","far"],["s3","w2","far"],["s3","w3","near"],["s3","boat","near"],["s4","g1","near"],["s4","g1","far"],["s4","g2","near"],["s4","g2","far"],["s4","g3","near"],["s4","g3","far"],["s4","w1","near"],["s4","w1","far"],["s4","w2","near"],["s4","w2","far"],["s4","w3","near"],["s4","w3","far"],["s4","boat","near"],["s4","boat","far"],["s5","g1","near"],["s5","g2","near"],["s5","g3","near"],["s5","w1","near"],["s5","w2","near"],["s5","w3","near"],["s6","g1","far"],["s6","g2","far"],["s6","g3","far"],["s6","w1","far"],["s6","w2","far"],["s6","w3","far"],["s6","boat","far"],["s7","g1","near"],["s7","g1","far"],["s7","g2","near"],["s7","g2","far"],["s7","g3","near"],["s7","g3","far"],["s7","w1","near"],["s7","w1","far"],["s7","w2","near"],["s7","w2","far"],["s7","w3","near"],["s7","w3","far"],["s8","g1","near"],["s8","g1","far"],["s8","g2","near"],["s8","g2","far"],["s8","g3","near"],["s8","g3","far"],["s8","w1","near"],["s8","w1","far"],["s8","w2","near"],["s8","w2","far"],["s8","w3","near"],["s8","w3","far"],["s8","boat","far"],["s9","g1","near"],["s9","g1","far"],["s9","g2","near"],["s9","g2","far"],["s9","g3","near"],["s9","g3","far"],["s9","w1","near"],["s9","w1","far"],["s9","w2","near"],["s9","w2","far"],["s9","w3","near"],["s9","w3","far"],["s10","g1","far"],["s10","g2","far"],["s10","g3","far"],["s10","w1","near"],["s10","w2","far"],["s10","w3","near"],["s10","boat","far"],["s11","g1","far"],["s11","g2","near"],["s11","g3","far"],["s11","w1","near"],["s11","w2","near"],["s11","w3","far"],["s11","boat","near"]],"first":[["s5"]],"Next":[["s1","s5"],["s2","s11"],["s3","s2"],["s5","s3"],["s10","s1"],["s11","s6"]]},"edges":[["s1","g1","far"],["s1","g2","near"],["s1","g3","near"],["s1","w1","near"],["s1","w2","far"],["s1","w3","far"],["s1","boat","near"],["s2","g1","far"],["s2","g2","near"],["s2","g3","near"],["s2","w1","near"],["s2","w2","far"],["s2","w3","near"],["s2","boat","far"],["s3","g1","near"],["s3","g2","near"],["s3","g3","near"],["s3","w1","far"],["s3","w2","far"],["s3","w3","near"],["s3","boat","near"],["s4","g1","near"],["s4","g1","far"],["s4","g2","near"],["s4","g2","far"],["s4","g3","near"],["s4","g3","far"],["s4","w1","near"],["s4","w1","far"],["s4","w2","near"],["s4","w2","far"],["s4","w3","near"],["s4","w3","far"],["s4","boat","near"],["s4","boat","far"],["s5","g1","near"],["s5","g2","near"],["s5","g3","near"],["s5","w1","near"],["s5","w2","near"],["s5","w3","near"],["s6","g1","far"],["s6","g2","far"],["s6","g3","far"],["s6","w1","far"],["s6","w2","far"],["s6","w3","far"],["s6","boat","far"],["s7","g1","near"],["s7","g1","far"],["s7","g2","near"],["s7","g2","far"],["s7","g3","near"],["s7","g3","far"],["s7","w1","near"],["s7","w1","far"],["s7","w2","near"],["s7","w2","far"],["s7","w3","near"],["s7","w3","far"],["s8","g1","near"],["s8","g1","far"],["s8","g2","near"],["s8","g2","far"],["s8","g3","near"],["s8","g3","far"],["s8","w1","near"],["s8","w1","far"],["s8","w2","near"],["s8","w2","far"],["s8","w3","near"],["s8","w3","far"],["s8","boat","far"],["s9","g1","near"],["s9","g1","far"],["s9","g2","near"],["s9","g2","far"],["s9","g3","near"],["s9","g3","far"],["s9","w1","near"],["s9","w1","far"],["s9","w2","near"],["s9","w2","far"],["s9","w3","near"],["s9","w3","far"],["s10","g1","far"],["s10","g2","far"],["s10","g3","far"],["s10","w1","near"],["s10","w2","far"],["s10","w3","near"],["s10","boat","far"],["s11","g1","far"],["s11","g2","near"],["s11","g3","far"],["s11","w1","near"],["s11","w2","near"],["s11","w3","far"],["s11","boat","near"],["s1","s5"],["s2","s11"],["s3","s2"],["s5","s3"],["s10","s1"],["s11","s6"]],
"nodes":["s5","s5","s4","s3","s11","s2","s11","s10","s6","s5","s3","s2","s1","far","s6","s7","near","s8","s9","s10","s6","s1"]}


// need the edges to searate from each other, and be different colors

	console.log(edges);

	var nodes = json.nodes.map(function(name){
		return {data: {id: name, label: name}}
	});
	//
	// var edges = Object.entries(json.relations).reduce(function(acc, val){
	// 	relation_
	// 	return acc.concat(val);
	// }, []);
	//
	// console.log(edges);

	var edges = Object.entries(json.relations).reduce(function(acc, val){
		relation_name = val[0];
		console.log(relation_name);

		return acc.concat(val[1].map(function(tuple){
			console.assert(tuple.length >= 1);

			var start = tuple[0];
			var end = tuple[tuple.length - 1];

			var label = relation_name;
			if (tuple.length > 2){
				var between = tuple.slice(1, tuple.length - 1);
				label = relation_name + "[" + between.join("->") + "]";
			}

			return {
				data: {
					id: tuple.join(),
					source: start,
					target: end,
					label: label,
					arrow: "triangle"
				}
			}
		}));
	}, []);


	var cy = cytoscape({

		container: document.getElementById('cy'), // container to render in

		elements: nodes.concat(edges),

		style: [ // the stylesheet for the graph
			{
				selector: 'node',
				style: {
					'background-color': '#666',
					'label': 'data(id)',
					'font-size': 10
				}
			},

			{
				selector: 'edge',
				style: {
					'width': 2,
					'line-color': '#ccc',
					'target-arrow-color': '#ccc',
					'target-arrow-shape': 'triangle',
					'curve-style': 'bezier',
					'label': 'data(label)',
					'text-wrap': 'wrap',
					'control-point-weight': 0.8,
					'control-point-step-size': 50,
					'font-size': 10,
					'color': '#ccc'
				}
			}
		],

		// gotta use bezier, definitely.
		// control point step size
		// control point weight
		// avsdf layout?

		layout: {
			name: 'circle'
			// rows: 6
		}

		// layout: {
		// 	name: "cose"
		// }

	});