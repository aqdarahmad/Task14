import axios from "axios";
export default function api(baseurl , config={}) {
    const instance = axios.create({
        baseURL:baseurl ,
        headers :{
            "Content-Type" : "application/json",
            ...AxiosHeaders(config.headers || {})
        },
        ...config
    });


this.get = function (path , params = {}){
    return instance.get(path , {params}).then(res=>res.data);
};

this.post = function(path, data){
    return instance.post(path,data).then(res=>res.data);
};

this.put = function(path , data){
    return instance.put(path ,data ).then(res => res.data);
}

}
