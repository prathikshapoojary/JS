const { test } = require('@playwright/test');
const fs = require("fs");

var links = fs.readFileSync('test.txt').toString() .split('\n') .map(e => e.trim()) 

for (const link of links) {
    test('test for ' + link.toString(), async ({ page }) => { // to remove duplicates
        //For heading 1 tag
        await page.goto(link);

        console.log('Checking URL :\x1b[34m%s\x1b[0m',link)
        console.log("Checking Heading tag:")
       
        var h1  =  await page.$$('h1'), h2  =  await page.$$('h2'), h3  =  await page.$$('h3'), 
        h4  =  await page.$$('h4'), h5  =  await page.$$('h5'), h6  =  await page.$$('h6');

        countH1 = h1.length;countH2 = h2.length;countH3 = h3.length;countH4 = h4.length;countH5 = h5.length;countH6 = h6.length
        console.log("Total Count :\n H1 :",countH1,"\n\n H2 :",countH2,"\n H3 :",countH3,"\n H4 :",countH4,"\n H5 :",countH5,"\n H6 :",countH6)

        if(countH1==1){
          console.log('\x1b[32m%s\x1b[0m',"Validation Success ",countH1," H1 tag found in page");
        }
        else{
          console.log('\x1b[31m%s\x1b[0m',"Validation Failed", " Multiple H1 tag found in page");
        }

        //for titile tag
        var title = await page.$$('title')
        console.log("\nChecking for title tag : \n ");
        if(title)
        {
          console.log('\x1b[32m%s\x1b[0m',"Validation Success ","Title :",title.length);
        }

        //for meta tag
        var meta = await page.$$('meta')
        console.log("\nChecking for meta tag : \n Meta :",meta.length)
      
        console.log("\nChecking for description :")
        lenMeta = await (await page.$$('meta')).length
        for(let i = 0; i< lenMeta; i++)
        {
          var description = await page.$eval("meta >> nth="+i, (el) => el.name)
          if(description == "description")
          {
              console.log('\x1b[32m%s\x1b[0m',description, "Found in page \n");
          }    
        } 
        //For image
        lenImg = await (await page.$$('img')).length
        for(let i = 0; i< lenImg; i++)
        {
            var imgCount = await page.$eval("img >> nth="+i, (el) => el.alt)
            if(imgCount == "")
            {
              console.log('\x1b[31m%s\x1b[0m',"alt Tag not found in <img>: Empty");
            }
            else{
              console.log('\x1b[32m%s\x1b[0m',"alt Tag found in <img>: ",imgCount);
            }
        }
        });
}
