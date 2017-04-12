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
    var x1=v2.x-x0;
    var y1=v2.y-y0;
    var x2=v3.x-x0;
    var y2=v3.y-y0;
    var t = (x1*y2-x2*y1)/2
    return t;
    
}

