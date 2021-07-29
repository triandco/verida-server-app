# Description
Datastore is not working on the server due to window object being undefined.

# Reproduction
1. Create a node app 
2. Install ```@verida/datastore```  0.7.3
3. Initialise verida in index.js 
4. Run node app with ```node index.js```

# Expectation
1. Initialise successfully

# Actual
1. Encounter error:
```
if (!window.nearAPI) window.nearAPI = nearAPI;
^
ReferenceError: window is not defined
```

Please see the example github repository for more details.