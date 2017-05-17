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
        [  1, -1, 0 ], // 2
	[  1,  1, 0 ]  // 3
    ];

    var faces = [
        [ 0, 1, 2 ], // f0
	[ 0, 2, 3 ], // f1
    ];

    var scalars = [
        0.1,  // S0
        0.2,  // S1
        0.8,  // S2
	0.5   // S3
    ];

    // Create color map
    var cmap = [];

    
    for ( var i = 0; i < 256 ; i++ )
    {	
        var S = i/255.0; // [0,1]
        var R = Math.max( Math.cos( ( S - 1.0 ) * Math.PI ), 0.0 );
        var G = Math.max( Math.cos( ( S - 0.5 ) * Math.PI ), 0.0 );
        var B = Math.max( Math.cos( S * Math.PI ), 0.0 );
        var color = new THREE.Color( R, G, B );

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
	var S0 = (scalars[id[0]]-0.1)/0.7*255 ;
	var S1 = (scalars[id[1]]-0.1)/0.7*255 ;
	var S2 = (scalars[id[2]]-0.1)/0.7*255 ;
//	var S3 = (scalars[id[3]]-0.1)/0.7*255 ;
	var S00 = Math.floor(S0);
        var S01 = S00+1;
	var S10 = Math.floor(S1);
	var S11 = S10+1;
	var S20 = Math.floor(S2);
	var S21 = S20+1;
//	var S30 = Math.floor(S3);
//	var S31 = S30+1;
	var x = S0-S00;
	var y = S1-S10;
	var z = S2-S20;
//	var w = S3-S30;

	var dmap;
 	    var R = Math.max( Math.cos( ( S00/255 - 1.0 ) * Math.PI )*(1-x)+ Math.cos( ( S01/255 - 1.0 ) * Math.PI )*x, 0.0 );
            var G = Math.max( Math.cos( ( S00/255 - 0.5 ) * Math.PI )*(1-x)+ Math.cos( ( S01/255 - 0.5 ) * Math.PI )*x, 0.0 );
            var B = Math.max( Math.cos( S00/255 * Math.PI ) * (1-x)+ Math.cos( S01/255 * Math.PI )*x, 0.0 );
            var color = new THREE.Color( R, G, B );
            dmap=('0x' + color.getHexString() );
	var emap;
 	    var R1 = Math.max( Math.cos( ( S10/255 - 1.0 ) * Math.PI )*(1-y)+ Math.cos( ( S11/255 - 1.0 ) * Math.PI )*y, 0.0 );
            var G1 = Math.max( Math.cos( ( S10/255 - 0.5 ) * Math.PI )*(1-y)+ Math.cos( ( S11/255 - 0.5 ) * Math.PI )*y, 0.0 );
            var B1 = Math.max( Math.cos( S10/255 * Math.PI ) * (1-y)+ Math.cos( S11/255 * Math.PI )*y, 0.0 );
            var color1 = new THREE.Color( R1, G1, B1 );
            emap=('0x' + color1.getHexString() );
	var fmap;
 	    var R2 = Math.max( Math.cos( ( S20/255 - 1.0 ) * Math.PI )*(1-z)+ Math.cos( ( S21/255 - 1.0 ) * Math.PI )*z, 0.0 );
            var G2 = Math.max( Math.cos( ( S20/255 - 0.5 ) * Math.PI )*(1-z)+ Math.cos( ( S21/255 - 0.5 ) * Math.PI )*z, 0.0 );
            var B2 = Math.max( Math.cos( S20/255 * Math.PI ) * (1-z)+ Math.cos( S21/255 * Math.PI )*z, 0.0 );
            var color2 = new THREE.Color( R2, G2, B2 );
            fmap=('0x' + color2.getHexString() );
/*	var gmap;
 	    var R3 = Math.max( Math.cos( ( S30 - 1.0 ) * Math.PI )*(1-w)+ Math.cos( ( S31 - 1.0 ) * Math.PI )*w, 0.0 );
            var G3 = Math.max( Math.cos( ( S30 - 0.5 ) * Math.PI )*(1-w)+ Math.cos( ( S31 - 0.5 ) * Math.PI )*w, 0.0 );
            var B3 = Math.max( Math.cos( S30 * Math.PI ) * (1-w)+ Math.cos( S31 * Math.PI )*w, 0.0 );
            var color3 = new THREE.Color( R3, G3, B3 );
            gmap=('0x' + color3.getHexString() );
*/	
	var C0 = new THREE.Color().setHex( dmap );
	var C1 = new THREE.Color().setHex( emap );
	var C2 = new THREE.Color().setHex( fmap );
//	var C3 = new THREE.Color().setHex( gmap );
	
	
	
	
	
        geometry.faces[i].vertexColors.push( C0 );
        geometry.faces[i].vertexColors.push( C1 );
        geometry.faces[i].vertexColors.push( C2 );
//        geometry.faces[i].vertexColors.push( C3 );

	
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
