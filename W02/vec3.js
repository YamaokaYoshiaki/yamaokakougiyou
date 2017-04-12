vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}
vec3.prototype.max = function(){
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

vec3.prototype.min = function(){
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

vec3.prototype.mid = function(){
    return x+y+z-min-max;
}
