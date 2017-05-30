//Constructor
Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

//Add method
Vec3.prototype.add = function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}

//Sum method
Vec3.prototype.sum = function()
{
    return this.x+this.y+this.z;
}

//Min method
Vec3.prototype.min = function()
{
    var min=this.x;
    if(min>this.y)
	min=this.y;
    if(min>this.z)
	min=this.z
    return min;
}

//Mid method
Vec3.prototype.mid = function()
{
    var mid=this.sum()-this.min()-this.max();

    return mid;
}

//Max method
Vec3.prototype.max = function()
{
    var max=this.x;
    if(max<this.y)
	max=this.y;
    if(max<this.z)
	max=this.z;
    return max;
}
    
//Cross product(³°ÀÑ) method
function cross(u,v)
{
    var a = new Vec3(u.y*v.z-u.z*v.y, u.z*v.x-u.x*v.z, u.x*v.y-u.y*v.x)   
    return a;
}
    
//Triangel caluculation(»°³Ñ·Á¤Î·×»») method
function AreaOfTriangle(v0,v1,v2)
{
    var u = new Vec3(v1.x-v0.x, v1.y-v0.y, v1.z-v0.z);
    var v = new Vec3(v2.x-v0.x, v2.y-v0.y, v2.z-v0.z);

    var a = cross(u,v);
    var S=Math.sqrt(a.x*a.x+a.y*a.y+a.z*a.z)/2;

    return S;
}


