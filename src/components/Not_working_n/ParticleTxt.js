import React, { useEffect, useRef } from 'react';
import * as THREE from 'three'
import Environment from './Not_working_n/Environment.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

const ParticleTxt = () => {

	const containerRef = useRef(null);

	useEffect(() => {
	  // Assuming you have loaded the font and particle assets
	  const fontLoader = new FontLoader();
	  const particleTextureLoader = new THREE.TextureLoader();

	  fontLoader.load('https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json',
		(loadedFont) => {
			const particle = particleTextureLoader.load('https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png');
			
			console.log("Font Main: ", loadedFont)
			console.log("Font Main type: ", typeof(loadedFont))
			const environment = new Environment(loadedFont, particle);
	  
			environment.init(containerRef.current);
		
			// Cleanup function (optional)
			return () => {
			  environment.dispose();
			};
		},
		(progressEvent) => {
			// Handle loading progress
			console.log('Progress loading font:', progressEvent);
		},
		(error) => {
			console.error('Error loading font:', error);
		}
		);


	}, []);
  
	return <div ref={containerRef}></div>;
}

export default ParticleTxt
