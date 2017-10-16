import express from 'express';

let router = express.Router();

/**
 * This is written this way so we can pass in a pre configured passport.
 * @returns {*}
 */
export default function () {

  router.get('/dashboard', (req, res) => {
    console.log(req);
  });

  router.post('/login', (req, res) => {
    console.log(req);
  });


  return router;

}


