export default function Apiservice(baseurl , config ) {

    // built on top of AJAX (XMLHttpRequest)
    this.baseurl = baseurl;
    this.config = config;

    this.get = function(path , params={}) {
        let query = "";
        for(const key in params){
           query += key + "=" + params[key] + "&";
        }
      

        return fetch(`${this.baseurl}${path}?${query}`, {
            ...this.config,
            method: "GET"
        }).then(res => res.json());
    };

    this.post = function(path , data ){
        return fetch(`${this.baseurl}${path}`,{
            ...this.config,
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                ...(this.config?.headers || {})
            },
            body:JSON.stringify(data)
        }).then(res => res.json());
    };
}
