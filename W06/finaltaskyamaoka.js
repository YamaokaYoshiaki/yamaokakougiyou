function main(type)
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    screen.init( volume, {
        width: window.innerWidth/2,
        height: window.innerHeight/2.3,
        enableAutoResize: false	
    });
    var bounds = Bounds( volume );
    screen.scene.add( bounds );
    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue, screen,type);
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });
    return screen;


}
