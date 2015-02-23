/**
* Stud.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    picture: {
      type: 'string'
    },
    breed: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    height: {
      type: 'string'
    },
    fee: {
      type: 'string'
    },
    age: {
      type: 'integer'
    },
    registry: {
      type: 'string'
    },
    bio: {
      type: 'string'
    },
    phoneNumber: {
      type: 'string'
    },
    ownerName: {
      type: 'string'
    },
    favorites: {
      collection: 'user',
      via: 'studs'
    },
    toJSON: function() {
      var matchObj = this.toObject();
      var thing = {
        id: matchObj.id,
        name: matchObj.name,
        fee: matchObj.fee,
        breed: matchObj.breed,
        picture: matchObj.picture,
        ownerName: matchObj.ownerName,
        phoneNumber: matchObj.phoneNumber
      }
      return thing;
    }


  }
};
