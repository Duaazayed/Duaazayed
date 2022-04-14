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
            expect(resp.username).to.be.eql('duaa');
            expect(resp.bike_id).to.be.eql(1);
            expect(resp.reservation_date).to.be.eql(200);
            expect(resp.body).to.be.a('array');
            expect(resp.body.length).to.not.be.eql(0);
            done();
        });
    });
    it('should GET a single reservation', function(done){
        const expected=[
            {
            id: 1,
            username: 'duaa',
            reservation_date: '2022-04-04T04:09:49.000z',
            reservation_start_time: '',
            reservation_end_time:'',
        },
    ];
    chai 
    .request('http://localhost:5000')
    .get('/api/reservation/1')
    .end(function(err, resp){
            expect(resp.username).to.be.eql('duaa');
            expect(resp.bike_id).to.be.eql(1);
            expect(resp.reservation_date).to.be.eql(200);
            expect(resp.body).to.be.a('array');
            expect(resp.body.length).to.not.be.eql(0);
            expect(resp.body).to.be.eql(expected);
            done();
    });
    });

it('should POST a single reservation', function(done){
    const newReservation ={
        name: 'New test Reservation',
    };
    const expected = { message: 'Add reservation succesfylly'};
    chai
    .request('http://localhost:5000')
    .post('/api/reservation')
    .send(newReservation)
    .end(function (err, resp){
        expect(resp.username).to.be.eql('duaa');
        expect(resp.bike_id).to.be.eql(1);
        expect(resp.reservation_date).to.be.eql(200);
        expect(resp.body).to.be.a('array');
        expect(resp.body.length).to.not.be.eql(0);
        expect(resp.body).to.be.eql(expected);
        done();
});
});
});