import genericProxyHandler from "utils/proxy/handlers/generic"; 

const widget =  {
  api: "{url}/api/{endpoint}" ,
  proxyHandler: genericProxyHandler ,

  mappings:  {
    subscriptions:  {
      endpoint: "status/subscriptions" ,
    },
    connections: {
      endpoint: "status/connections",
    }
  },
};

export default widget;
