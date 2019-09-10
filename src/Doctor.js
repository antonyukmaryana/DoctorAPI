export class Doctor {
    finddoctor (name,location,lat,lon) {

        return new Promise (function(resolve,reject){
            let request = new XMLHttpRequest();
            let location = lat + "%2C" + lon + "%2C" + "100";
            let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=' + location + '&user_location=37.773%2C-122.413&skip=0&limit=10&user_key='+process.env.API_KEY+'&name='+name+'&query=';

            request.onload = function(){
                if(this.status === 200){
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            };
            request.open("GET",url,true);
            request.send();
        });
    }

    findlocation(city)
    {
        return new Promise (function(resolve,reject){
            let request = new XMLHttpRequest();
            let url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+city+'&key='+process.env.GOOGLE_API_KEY;


            request.onload = function(){
                if(this.status === 200){
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            };
            request.open("GET",url,true);
            request.send();
        });

    }
}