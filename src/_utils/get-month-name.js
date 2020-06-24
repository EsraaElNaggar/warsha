export const getMonthName = function(dt){
    const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    console.log(dt);
    return mlist[dt.getMonth()];
};