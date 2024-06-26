const {Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
         // ไปที่ pwa-cs-lending.counterservice
         await driver.get('https://pwa-cs-lending-stg.counterservice.co.th/app?utm_source=onlinemedia&utm_medium=ld-fb-cs&utm_campaign=lending-ntl&utm_id=11&fbclid=IwZXh0bgNhZW0CMTAAAR31xf0fxNwYtuUqBdb-Ps7CxgP-wM_5BQbxju3O4KaZHj1SgvszPOMwZOM_aem_e44sl7KG3Pt0znDguDGwdw');

         // รอให้ไอคอน accept cookie ปรากฏ
         await driver.wait(until.elementLocated(By.id('btn-accept-all-cookies')), 10000);

         // หาไอคอนโดยใช้ ID (หรือใช้ By.className, By.css, By.xpath ฯลฯ ตามความเหมาะสม)
         let iconAcCookie = await driver.findElement(By.id('btn-accept-all-cookies'));

         await iconAcCookie.click();

         await sleep(1000);

         // รอให้ไอคอนปรากฏ
         await driver.wait(until.elementLocated(By.id('btn_car_type_0')), 10000);
         let icon = await driver.findElement(By.id('btn_car_type_0'));
         await icon.click();
         await sleep(1000);
        //  await driver.wait(until.elementLocated(By.id('checkbox_consent_all_vendor')), 10000);
        //  await driver.findElement(By.id('checkbox_consent_all_vendor')).click();
        //  await sleep(1000);
        //  let modal = await driver.wait(until.elementLocated(By.id('modalScroll')), 10000);
        //  await driver.executeScript('arguments[0].scrollTop = arguments[0].scrollHeight;', modal);
        //  await sleep(1000);
        //  await driver.wait(until.elementLocated(By.id('accept_consent_vendor')), 10000);
        //  await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
        //  await driver.findElement(By.id('accept_consent_vendor')).click();
        //  await sleep(1000);
        //  await driver.wait(until.elementLocated(By.id('accept_select_vendor')), 10000);
        //  await driver.findElement(By.id('accept_select_vendor')).click();
        //  await sleep(1000);
         await driver.wait(until.elementLocated(By.id('accept_select_vendor')), 10000);
         await driver.findElement(By.id('accept_select_vendor')).click();
         await sleep(1000);
        
         await driver.wait(until.elementLocated(By.name('name')), 10000);
         await driver.findElement(By.name('name')).sendKeys('วิทย์', Key.RETURN);
         await sleep(1000);
         await driver.wait(until.elementLocated(By.name('surname')), 10000);
         await driver.findElement(By.name('surname')).sendKeys('เพ็งผ่อง', Key.RETURN);
         await sleep(1000);
         await driver.findElement(By.name('telNo')).click();
         await driver.wait(until.elementLocated(By.name('telNo')), 10000);
         await driver.findElement(By.name('telNo')).sendKeys('836853207', Key.RETURN);
         await sleep(1000);
         let carBand = await driver.wait(until.elementLocated(By.name('carBand')), 10000);
         await carBand.click();
         let option = await driver.findElement(By.css('option[value="honda"]'));
         await option.click();
         await sleep(1000);

         await driver.wait(until.elementLocated(By.name('carYearRegis')), 10000);
         await driver.findElement(By.name('carYearRegis')).sendKeys('2024', Key.RETURN);
         await sleep(1000);

         let loanType = await driver.wait(until.elementLocated(By.name('loanType')), 10000);
         await loanType.click();
         let option2 = await driver.findElement(By.css('option[value="1"]'));
         await option2.click();
         await sleep(1000);

         await driver.wait(until.elementLocated(By.id('checkbox_consent_all_vendor')), 10000);
         await driver.findElement(By.id('checkbox_consent_all_vendor')).click();
         await sleep(1000);

         let dataModal1 = await driver.wait(until.elementLocated(By.id('modalScrollVendor')), 10000);
         let isDisplayedModal1 = await dataModal1.isDisplayed();
         if (!isDisplayedModal1) {
            console.log('ยอมรับข้อกำหนดและเงื่อนไขของสถาบันสินเชื่อไม่แสดงผล');
         } 
         await driver.executeScript('arguments[0].scrollTop = arguments[0].scrollHeight;', dataModal1);
         await sleep(1000);

         await driver.wait(until.elementLocated(By.id('accept_consent_vendor')), 10000);
         await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
         await driver.findElement(By.id('accept_consent_vendor')).click();
         await sleep(1000);

         await driver.wait(until.elementLocated(By.id('checkbox_consent_counterservice')), 10000);
         await driver.findElement(By.id('checkbox_consent_counterservice')).click();
         await sleep(1000);

         let dataModal2 = await driver.wait(until.elementLocated(By.id('modalScroll')), 10000);
         let isDisplayedModal2 = await dataModal2.isDisplayed();
         if (!isDisplayedModal2) {
            console.log('ความยินยอมในการเปิดเผยข้อมูลไม่แสดงผล');
         } 

         await driver.wait(until.elementLocated(By.id('accept')), 10000);
         await driver.findElement(By.id('accept')).click();
         await sleep(1000);

         await driver.wait(until.elementLocated(By.id('accept_counterservice')), 10000);
         await driver.findElement(By.id('accept_counterservice')).click();
         
 
        
    } finally {
        // ปิดเบราว์เซอร์
        // await driver.quit();
    }
}

example();


//btn_car_type_0