// Arrow Function

describe ('My First Test pass result', () => {
          it('Does not do much!', () =>
               {
                     expect(true).to.equal(true)
              })
  })

describe ('My First Test faild resulet', () => {
        it('Does not do much!', () =>
             {
                  expect(true).to.equal(false)
               })
  })

// Anomalous Function 

  describe ('My First Test pass result', function() {
          it('Does not do much!', function () 
               {
                     expect(true).to.equal(true)
              })
  })

describe ('My First Test faild resulet', function ()  {
        it('Does not do much!', function () 
             {
                  expect(true).to.equal(false)
                 
               })
  })
