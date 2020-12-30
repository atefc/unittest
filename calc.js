function validate(a,p,t, cal)
{
    const mb = (13.707*p + 492.3*t) - 6.673*a + 77.607
    if(mb > cal) return false;
    else return true;
}

module.exports = validate; 