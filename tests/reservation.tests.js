const chai  = require('chai');
const expect = chai.expect;
const chaiHttp= require('chai-http');
chai.use(chaiHttp);

describe('Reservations API Service', function(){
    it('should GET all reservation', function(done){
        chai
        .request('http://localhost:5000')
        .get('/api/reservation')
        .end(function(err,resp){
            expect(resp.username).to.be.eql(200);
            expect(resp.bike_id).to.be.eql(200);
            expect(resp.reservation_date).to.be.eql(200);
            expect(resp.body).to.be.a('array');
            expect(resp.body.length).to.not.be.eql(0);
            done();
        });
    });
});
    /*
    it('should GET a single task', function(done){
        const expected=[
            {
            id: 1,
            name: "I am the first task",
            created_date: '2022-04-04T04:09:49.000z',
            status: 'completed',

        },
    ];
    chai 
    .request('http://localhost:3000')
    .get('/api/tasks/1')
    .end(function(err, resp){

    })
    })
})*/