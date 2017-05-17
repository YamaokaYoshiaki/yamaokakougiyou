function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var vertices = [
        [ -1,  1, 0 ], // 0
        [ -1, -1, 0 ], // 1
        [  1, -1, 0 ]  // 2
    ];

    var faces = [
        [ 0, 1, 2 ], // f0
    ];

    var scalars = [
        0.1,   // S0
        0.2, // S1
        0.8  // S2
    ];

    // Create color map
    var cmap = [];
    for ( var i = 0; i < 256; i++ )
    {
	
        var S = i / 255.0; // [0,1]
	var L = 1 - S*0.5; //Lightness

        var color = new THREE.Color();
	color.setHSL(1,1,L);
	
        cmap.push( [ S, '0x' + color.getHexString() ] );
    }

    // Draw color map
    var lut = new THREE.Lut( 'rainbow', cmap.length );
    lut.addColorMap( 'mycolormap', cmap );
    lut.changeColorMap( 'mycolormap' );
    scene.add( lut.setLegendOn( {
        'layout':'horizontal',
        'position': { 'x': 0.6, 'y': -1.1, 'z': 2 },
        'dimensions': { 'width': 0.15, 'height': 1.2 }
    } ) );

    var geometry = new THREE.Geometry();
    var material = new THREE.MeshBasicMaterial();

    var nvertices = vertices.length;
    for ( var i = 0; i < nvertices; i++ )
    {
        var vertex = new THREE.Vector3().fromArray( vertices[i] );
        geometry.vertices.push( vertex );
    }

    var nfaces = faces.length;
    for ( var i = 0; i < nfaces; i++ )
    {
        var id = faces[i];
        var face = new THREE.Face3( id[0], id[1], id[2] );
        geometry.faces.push( face );
    }

    // Assign colors for each vertex
    material.vertexColors = THREE.VertexColors;
    for ( var i = 0; i < nfaces; i++ )
    {
        var id = faces[i];
	var S0 = (scalars[id[0]]-0.1)/0.7 ;
	var S1 = (scalars[id[1]]-0.1)/0.7 ;
	var S2 = (scalars[id[2]]-0.1)/0.7 ;
	var S00 = Math.floor(S0);
        var S01 = S00+1;
	var S10 = Math.floor(S1);
	var S11 = S10+1;
	var S20 = Math.floor(S2);
	var S21 = S20+1;
	var x = S0-S00;
	var y = S1-S10;
	var z = S2-S20;

	var dmap;
	var L = (1 - S00*0.5)*(1-x)+(1 - S01*0.5)*x; //Lightness

        var color = new THREE.Color();
	color.setHSL(1,1,L);
        dmap=('0x' + color.getHexString() );

	var emap;
	var L1 = (1 - S10*0.5)*(1-y)+(1 - S11*0.5)*y; //Lightness

        var color1 = new THREE.Color();
	color1.setHSL(1,1,L1);
        emap=('0x' + color.getHexString() );


	var fmap;
	var L2= (1 - S20*0.5)*(1-z)+(1 - S21*0.5)*z; //Lightness

        var color2 = new THREE.Color();
	color2.setHSL(1,1,L2);

 	fmap=('0x' + color2.getHexString() );

	var C0 = new THREE.Color().setHex( dmap );
	var C1 = new THREE.Color().setHex( emap );
	var C2 = new THREE.Color().setHex( fmap );
	
	
	
	
	
        geometry.faces[i].vertexColors.push( C0 );
        geometry.faces[i].vertexColors.push( C1 );
        geometry.faces[i].vertexColors.push( C2 );
    }

    var triangle = new THREE.Mesh( geometry, material );
    scene.add( triangle );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        renderer.render( scene, camera );
    }
}
