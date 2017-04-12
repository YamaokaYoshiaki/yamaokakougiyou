vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}
vec3.prototype.max = function(v){
    var x=v.x;
    var y=v.y;
    var z=v.z;
    if(x>y){
	if(x>z)
	    return x;
	else
	    return z;
    }else{
	if(y>z)
	    return y;
	else
	    return z;
    }
}

vec3.prototype.min = function(v){
    var x=v.x;
    var y=v.y;
    var z=v.z;

    if(x<y){
	if(x<z)
	    return x;
	else
	    return z;
    }else{
	if(y<z)
	    return y;
	else
	    return z;
    }
}

vec3.prototype.mid = function(v){
    var x=v.x;
    var y=v.y;
    var z=v.z;

    return x+y+z-this.min(v)-this.max(v);
}

vec3.prototype.triangle = function(v1,v2,v3){
    var x0=v1.x;
    var y0=v1.y;
    var z0=v1.z;
    var x1=v2.x;
    var y1=v2.y;
    var z1=v2.z;
    var x2=v3.x;
    var y2=v3.y;
    var z2=v3.z;
    var v0=new vec3(x0,y0,z0);
    var v1=new vec3(x1,y1,z1);
    var v2=new vec3(x2,y2,z2);
    var t = (x0*y1*z2+y0*z1*x2+z0*x1*y2-x0*z1*y2-y0*x1*z2-z0*y1*x2)/2
    return t;
    
}

