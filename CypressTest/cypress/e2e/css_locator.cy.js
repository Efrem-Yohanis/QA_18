
describe ('example for locater', () => {
    it('css locater', () =>
         {
              cy.visit('http://127.0.0.1:5500/project/form.html')
              // select element by id css locator.
              // select element by id class locator.
                cy.get('.form-control')
              // select element by id class locator.
                cy.get("[name='firstname']")
              // select element by id class locator and attribute.
                cy.get(".form-control[name='firstname']")
             // tag name is opptional for all case
               // select element by id css locator.
                  cy.get('input#fname')
               // select element by id class locator.
                  cy.get('input.form-control')
               // select element by id class locator.
                  cy.get("input[name='firstname']")
               // select element by id class locator and attribute.
                  cy.get("input.form-control[name='firstname']")               
               // cy.find() command
                  cy.get('.text').find('h1')  

        })
})
 
// type text input
//<input class="gLFyf" jsaction="paste:puy29d;" maxlength="2048" name="q" type="text" autocapitalize="off" autocomplete="off" autocorrect="off" autofocus="" role="combobox" spellcheck="false" title="Search" value="" aria-label="Search" data-ved="0ahUKEwjz-O2q3IP-AhUMrqQKHf8aAdwQ39UDCAQ">
// type submit inpute
// <input class="gNO89b" value="Google Search" aria-label="Google Search" name="btnK" role="button" tabindex="0" type="submit" data-ved="0ahUKEwifiIfR3IP-AhXGT8AKHWzbBn0Q4dUDCBA">
// type submit inpute
// <input class="RNmpXc" value="I'm Feeling Lucky" aria-label="I'm Feeling Lucky" name="btnI" type="submit" jsaction="trigger.kWlxhc" data-ved="0ahUKEwiOt-HL3IP-AhUPa8AKHQ8yCrsQ19QECBE">
//  link ancker tag  with text  
//<div id="SIvCob">Google offered in:  <a href="https://www.google.com/setprefs?sig=0_dXUZe6tb3QRUm-k4vl4mbK4juaI%3D&amp;hl=de&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwiOt-HL3IP-AhUPa8AKHQ8yCrsQ2ZgBCBM">Deutsch</a>  </div>