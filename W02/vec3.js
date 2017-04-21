vec3 = function(x,y,z)
{
    this.x=x;
    this.y=y;
    this.z=z;
}

vec3.prototype.add = function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}

vec3.prototype.sub = function(v)
{
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
}

vec3.prototype.max = function()
{
 
    if(this.x>this.y)
    {
    if(this.x>this.z)
        return this.x;
    else
        return this.z;
    }
    else if(this.y>this.z)
        return this.y;
    else
        return this.z;
}

vec3.prototype.min = function()
{
    if(this.x<this.y)
    {
    if(this.x<this.z)
        return this.x;
    else
        return this.z;
    }
    else if(this.y<this.z)
        return this.y;
    else
        return this.z;
}

vec3.prototype.mid = function()
{
    return this.x + this.y + this.z - this.min() - this.max();
}

vec3.prototype.crossproduct = function(v)
{
        var x = this.x;
        var y = this.y;
        var z = this.z;

        this.x = y * v.z - z * v.y;
        this.y = z * v.x - x * v.z;
        this.z = x * v.y - y * v.x;

        return this;
}

vec3.prototype.length = function(v)
{
    return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );
}

function AreaOfTriangle(v0,v1,v2)
{
    var v10 = v0.sub(v1);
    var v12 = v2.sub(v1);
    var v22 = v10.crossproduct(v12);
    return 0.5*v22.length();
}


