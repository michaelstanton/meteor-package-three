Package.describe({
	summary: "Three.js core library + several useful extensions.",
	version: "0.70.0",
	name: "davidcittadini:three",
	git: "https://github.com/davidcittadini/meteor-package-three.git",
});

Package.on_use(function(api) {
	api.versionsFrom("1.0.3.2");
	api.export("THREE");

	api.add_files([
		// Core
		"lib/three.min.js",

		// Controls
		"extras/controls/EditorControls.js",
		"extras/controls/TrackballControls.js",
		"extras/controls/TransformControls.js",

		// Exporters
		"extras/exporters/STLExporter.js",
		"extras/exporters/OBJExporter.js",

		// Loaders
		"extras/loaders/AWDLoader.js",
		"extras/loaders/BabylonLoader.js",
		"extras/loaders/ColladaLoader.js",
		"extras/loaders/OBJLoader.js",
		"extras/loaders/PLYLoader.js",
		"extras/loaders/SceneLoader.js",
		"extras/loaders/STLLoader.js",
		"extras/loaders/UTF8Loader.js",
		"extras/loaders/VRMLLoader.js",
		"extras/loaders/VTKLoader.js",
		"extras/loaders/ctm/ctm.js",
		"extras/loaders/ctm/CTMLoader.js",
		"extras/loaders/ctm/lzma.js",

		// Renderers
		"extras/renderers/CanvasRenderer.js",
		"extras/renderers/CSS3DRenderer.js",
		"extras/renderers/Projector.js",
		"extras/renderers/RaytracingRenderer.js",
		"extras/renderers/SoftwareRenderer.js",
		"extras/renderers/SVGRenderer.js"
	]);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('davidcittadini:three');
  api.addFiles('davidcittadini:three-tests.js');
});
