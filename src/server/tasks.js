var https = require('https');

var headers = {
      'Content-Type': 'application/json',
	  'X-IBM-Client-Id' : 'b56cce80-a3fc-4194-87d7-edddb4d3bd28'
    };

var options = {
    host: 'api.us.apiconnect.ibmcloud.com/hcl-exploration-dev/sb',
    path: '/api/tasks',  
    headers: headers
  };

var tasksService = {
 
  getAll: function(filters) {
    var allusers = data; // Spoof a DB call
    return allusers;
  },
 
  getOne: function(req, res) {
    var id = req.params.taskCode;
    var user = data[0]; // Spoof a DB call
    res.json(user);
  },
 
  create: function(values) {
	 console.log('task service create function called'); 
    var newuser = values;
    data.push(newuser); // Spoof a DB call
    return newuser;
  },
 
  update: function(req, res) {
    var updateuser = req.body;
    var id = req.params.taskCode;
    data[taskCode] = updateuser // Spoof a DB call
    res.json(updateuser);
  },
 
  delete: function(req, res) {
    var id = req.params.id;
    data.splice(id, 1) // Spoof a DB call
    res.json(true);
  }
};

var data = [{"assignedTo":null,"assignedToGroup":null,"crearedBy":null,"createdDate":"2017-05-02T00:00:00.000Z","description":"this is task BF TSK1 changed","dueDate":null,"lastModificationDate":"2017-05-02T00:00:00.000Z","modifiedBy":null,"sequenceNumber":1,"sequenceType":"Sequential","startDate":null,"statusId":1,"taskCode":"TSK1","workItemId":0},{"assignedTo":null,"assignedToGroup":null,"crearedBy":null,"createdDate":"2017-05-02T00:00:00.000Z","description":"this is task BF TSK1 changed","dueDate":null,"lastModificationDate":"2017-05-02T00:00:00.000Z","modifiedBy":null,"sequenceNumber":2,"sequenceType":"Sequential","startDate":null,"statusId":1,"taskCode":"TSK2","workItemId":0},{"assignedTo":null,"assignedToGroup":null,"crearedBy":null,"createdDate":"2017-04-27T00:00:00.000Z","description":"this is task TSK1 changed","dueDate":null,"lastModificationDate":"2017-04-27T00:00:00.000Z","modifiedBy":null,"sequenceNumber":1,"sequenceType":"Sequential","startDate":null,"statusId":3,"taskCode":"TSKNew1","workItemId":9},{"assignedTo":null,"assignedToGroup":null,"crearedBy":null,"createdDate":"2017-04-27T00:00:00.000Z","description":"this is new taks changed","dueDate":null,"lastModificationDate":"2017-04-27T00:00:00.000Z","modifiedBy":null,"sequenceNumber":1,"sequenceType":"Sequential","startDate":null,"statusId":1,"taskCode":"TASK1","workItemId":1}];  
 
module.exports = tasksService;