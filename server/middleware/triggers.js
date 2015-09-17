export default {
    standard(request, response) {
        response.send({
            result: true
        }); 
    },
    reject(request, response) {
        response.send({
            result: false,
            error: "Form Rejected"
        }); 
    },
    complex(request, response) {
        var msg = request.body;
//        response.send("({ result: true, returnValues:{ jobPosting_customInt1: 100 } })");
        response.send({ 
            result: true, 
            returnValues:{ 
                jobPosting_customInt1: 100
            }
        });
    },
    deprecated(request, response) {
        var msg = request.body;
        response.send("({ result: true, returnValues:{ jobPosting_customInt1: 100 } })");
    },
    validation(request, response) {
        var msg = request.body;
        if( msg.status == 'TRIGGER' ){
            response.send("({result:false, error:\"The status can't be TRIGGER!</br>\"})");
        } else if( msg.jobPosting_status == 'TRIGGER' ){
            response.send("({result:false, error:\"The status can't be TRIGGER!</br>\"})");
        } else if( msg.user_status == 'TRIGGER' ){
            response.send("({result:false, error:\"The status can't be TRIGGER!</br>\"})");
        } else if( msg.lead_status == 'TRIGGER' ){
            response.send("({result:false, error:\"The status can't be TRIGGER!</br>\"})");
        } else if( msg.candidate_status == 'TRIGGER' ){
            response.send("({result:false, error:\"The status can't be TRIGGER!</br>\"})");
        } else if( msg.client_status == 'TRIGGER' ){
            response.send("({result:false, error:\"The status can't be TRIGGER!</br>\"})");
        } else if( msg.opportunity_status == 'TRIGGER' ){
            response.send("({result:false, error:\"The status can't be TRIGGER!</br>\"})");
        } else if( msg.placement_status == 'TRIGGER' ){
            response.send("({result:false, error:\"The status can't be TRIGGER!</br>\"})");
        } else if( msg.requestStatus == 'TRIGGER' ){
            response.send("({result:false, error:\"The status can't be TRIGGER!</br>\"})");
        } else if( msg.action == 'TRIGGER' ){
            response.send("({result:false, error:\"The action can't be TRIGGER!</br>\"})");
        } else if( Number(msg.payRate) <= 0 ){
            response.send("({result:false, error:\"PayRate must be greater than 0!</br>\"})");
        } else{
            response.send("({ result: true })");    
        }
    }
}