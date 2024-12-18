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
    },
    inputs: {
      endpoint: "status/inputs",
    }
  },
};

export default widget;
