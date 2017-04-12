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
