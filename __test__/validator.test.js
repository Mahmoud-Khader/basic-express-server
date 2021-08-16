'use strict';

const {app}=require('../src/server');

const supertest=require('supertest');
// const { describe, it, expect } = require('@jest/globals');

const request= supertest(app);

describe('validator middleware',()=>{

    it('should check the person ', async()=>{
        let params='/person?name=mahmoud';
        let status=200

        const response = await request.get(params);

        expect(response.status).toBe(status);
        expect(response.body).toEqual({name:'mahmoud'});
    });


})