'use strict'

const test = require('tape')

// test v1.1
// test v1.2
// test detect
// test dummy push to tag filter
test('test', (t) => {
  console.log('v1.2');

  t.test('flag success', (t) => {
    try {
      const checkFlag = true;

      if (checkFlag) {
        t.end()
      }
    } catch (e) {
      throw new Error('flag error');
    }
  })

  t.test('flag failed', (t) => {
    const checkFlag = true;

    t.equal(checkFlag, true);
    t.end()
  })

  t.end()
})